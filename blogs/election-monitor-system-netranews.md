---
title: Building a live election monitoring system for Netra News
slug: election-monitor-system-netranews
date: "2026-03-11"
category: "technology"
excerpt: "In February 2026, I worked with Netra News to develop a live election monitoring system targeting the national election of Bangladesh. I worked as a systems, backend, and infra lead for the project. We successfully pulled it off. In the span of a few hours, our system reliably served roughly 8 million requests(client + server) with 100% uptime, with a small cost, for a project this large."
---

[0% AI use for this article - not even revisions. Let's take back control where it matters the most - creative fields]

How would you design a software system where the max potential load is roughly 75 million -130 million (estimated internet users in Bangladesh) users in the span of a few hours, and downtime was unaffordable?

Last month, in February 2026, I worked with [Netra News](https://www.netra.news) to develop a live election monitoring system targeting the national election of Bangladesh. I worked as a systems, backend, and infra lead for the project. We successfully pulled it off. In the span of a few hours, our system reliably served roughly 8 million requests(client + server) with 100% uptime, with a small cost, for a project this large.

![Netra News Election Monitoring System](/blog-images/election-monitor-system-netranews-1.webp)

In this article, I'll write about the system architecture, design choices, infra setup and decisions, what worked and what did not, how it was working with a new team, that too, in a new domain - journalism, which I wasn’t familiar with.

**System Introduction**

Let's take a minute to understand the system and its functional requirements first. There are 300 constituencies where candidates from different parties contest each other in the national parliamentary election of Bangladesh. These 300 constituencies have a total of roughly 43000 polling stations nationwide. Once every polling station's voting result for a constituency is published, the candidate with the most votes wins. The party with the most winning candidates wins the election, with some caveats - irrelevant to the scope of this article.

[Netra News](https://www.netra.news) provided the logistical support for this. They had reporters country-wide, who would inform the Dhaka office once results from a polling station were available. In the Dhaka office, there were about 200 enumerators who were strategically connected with those reporters via WhatsApp groups. The enumerator's job was to enter the vote results in our system, which would be visible to the public. Besides, we had features like live blogs, comparisons, map-based UI, etc.

Three major non-functional requirements were scalability, zero downtime, and protection against cyber attacks, especially DDoS attacks.

**Architecture**

You can already guess this was a huge read-heavy system. And there wasn’t much interaction to have for the public viewers - it was mostly static content. Considering everything, I went with a static site approach. Dynamic rendering, even with a cluster of caches, would not have been feasible in a limited infrastructure setup for millions of active users.

So the plan was that the moment an enumerator would input some result in the system, the server would update the static site's content via an authenticated and non-blocking web hook. Thus, the static site would always be up-to-date and barely show any stale data. Turns out NextJS has built-in support for our use case - Incremental Static Regeneration (ISR).

For the backend, I religiously followed the KISS principle. One FastAPI monolith server(with replicas) and one PostgreSQL instance. Followed the controller-service pattern for the APIs and used Alembic for database migration. I had a Postgres replica standby to ensure 99.99% uptime. Applied a two-step connection pooling for the database - one in the application layer and one in the infrastructure layer using pgBouncer. I had to make sure that the maximum concurrent connections from all the running replicas did not exceed the connection limit of the database instance.

We needed storage for the uploaded result documents and images. I used an S3-compatible managed storage for the job. It was guaranteed that the uploaded file size would not exceed a threshold, so a presigned URL wasn’t needed for uploading the images. Don’t over-engineer anything, folks! Upon file uploading, compression and auto-conversion to WebP were ensured.

For the admins and enumerators, a role-based access system(RBAC) was implemented.

For observability, I implemented a logging middleware and integrated Axiom with it, which let me observe logs in real-time in production.

![Netra News Election Monitoring System - Load](/blog-images/election-monitor-system-netranews-2.webp)

**Infrastructure**

All our cloud services were deployed in DigitalOcean, in the Bangalore(BLR1) region. For state-of-the-art horizontal auto-scaling, I used a managed Kubernetes cluster with 2-6 (min-max) nodes - each having 4vCPUs, 8GBs of RAM. It came in handy later for other tasks as well. The backend was managed by an HPA, keeping the pod count between 5 and 15. When a pod's CPU usage exceeded 60%, a new pod was booted up. CPU usage was the ideal metric here since our application was compute-heavy. The database instances contained 2vCPUs and 8 GB of RAM, with 30 GB of storage.

The application was containerized using Docker, and DigitalOcean was used as the container registry.

I used Cloudflare for its security features: automatic DDoS protection, WAF rules, rate limiting, bot protection, and TLS termination. These features ensured our system’s reliability during the election. Later, we found out that Cloudflare successfully prevented a few scraping attempts for our APIs.

Initially, I planned on having a managed load balancer so communication could be made with our Kubernetes cluster via Cloudflare. However, it turned out that DigitalOcean’s Kubernetes managed load balancer was incompatible with Cloudflare since there was no way to allow IPv6 IPs from Cloudflare’s IP ranges. Later, I discovered Cloudflare tunnels were more suited for the job. I ran three tunnel instances in the Kubernetes cluster and configured them in the Cloudflare dashboard. Bingo! Our backend was accessible via Cloudflare, and the best part about this was that everything was protected.

The entire infrastructure was deployed for a month. We were billed around $335 only.

**Automation**

Netra’s journalists needed a place where they could see a snapshot of the election in one place. I implemented a cronjob-based automation where a few scripts would populate an Excel sheet every 15 minutes, containing all the highlights of the election. The journalists could then review it and make blogs, talk about it on talk shows, etc. I put the cron jobs inside the same Kubernetes cluster.

**Miscellaneous**

Reliability of the application was guaranteed with hundreds of automated end-to-end tests. I used GitHub Actions for continuous integration and continuous delivery(CI-CD), which made the development phase much simpler.

Kubernetes Secret was used for managing environment variables in production.

We had two frontends. A public-facing one and a private-facing one - for the enumerators and admins. The frontend and ISR implementation was done in NextJS and deployed in Vercel's Pro plan - developed and maintained mostly by [Mashukur Rahman](https://www.linkedin.com/in/trulynoirit/). We invested a lot in the UI and UX of the system, which was done mostly by [Arnab Fouzder](https://arnabfouzder.webflow.io/).

From Netra's side, we were mostly involved with [Tasneem Khalil](https://en.wikipedia.org/wiki/Tasneem_Khalil) and [Nazmul Ahasan](https://nazmulahasan.com/) - two amazing individuals and journalists. It was amazing working with such a team.

![Netra News Election Monitoring System - Team](/blog-images/election-monitor-system-netranews-3.webp)

**Conclusion**

I learned a ton from this project. Working under stress, not over-engineering things, understanding proper client needs, and delivering accordingly - the list could go on.

Last but not least, it’s always rewarding to take on mission-critical engineering projects, meet and work with amazing new teams, and most importantly, to live at your edge.
