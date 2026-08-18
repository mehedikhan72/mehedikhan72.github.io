---
title: "Live Election Monitoring System"
context: "Netra News"
year: 2026
order: 1
image: /assets/blog/election-monitor-system-netranews-3.webp
meta: "Netra News · 2026"
links:
  - label: "Blog Post"
    url: /blogs/election-monitor-system-netranews/
  - label: "Details"
    url: self
blurb: >
  In February 2026, I worked with Netra News as a systems, backend, and infra lead to build a
  live election monitoring system for the national election of Bangladesh. The system reliably
  served ~8 million requests with 100% uptime in a span of a few hours, covering 300 constituencies
  and ~43,000 polling stations nationwide.
---

In February 2026, I worked with Netra News as a systems, backend, and infra lead to build a live election monitoring system for the national election of Bangladesh. The system reliably served ~8 million requests with 100% uptime in a span of a few hours, covering 300 constituencies and ~43,000 polling stations nationwide.

### Tech Stack

FastAPI, PostgreSQL, Alembic, pgBouncer, NextJS (ISR), Kubernetes (DigitalOcean), Docker, Cloudflare (DDoS protection, WAF, Tunnels), Axiom, GitHub Actions, S3-compatible storage, RBAC.

### Architecture

The system was built as a static site using NextJS Incremental Static Regeneration (ISR). Whenever an enumerator entered a polling result, the server triggered an authenticated, non-blocking webhook to regenerate the static pages — keeping content up-to-date with near-zero stale data, while keeping the infrastructure load minimal. The backend was a FastAPI monolith with replicas, following the controller-service pattern. A PostgreSQL primary with a standby replica ensured 99.99% uptime. Two-layer connection pooling (application + pgBouncer) kept database connections under control.

### Infrastructure

All services were deployed on DigitalOcean in the Bangalore region. A managed Kubernetes cluster with 2-6 autoscaling nodes (4 vCPUs, 8 GB RAM each) handled traffic surges. The backend pods were managed by an HPA (5–15 pods), scaling on CPU usage. Cloudflare provided DDoS protection, WAF rules, rate limiting, and bot protection. Cloudflare Tunnels replaced a traditional load balancer to bridge Cloudflare with the Kubernetes cluster seamlessly. The entire infrastructure for a month cost ~$335.

### Gallery

<div class="gallery">
  <img src="/assets/blog/election-monitor-system-netranews-3.webp" alt="Live Election Monitoring System — the team" loading="lazy">
  <img src="/assets/blog/election-monitor-system-netranews-1.webp" alt="Live Election Monitoring System — UI" loading="lazy">
  <img src="/assets/blog/election-monitor-system-netranews-2.webp" alt="Live Election Monitoring System — traffic graph" loading="lazy">
</div>

### What I Learned

This project taught me to design and operate high-availability systems under real pressure. Key takeaways: choosing ISR over dynamic rendering saved the infrastructure, Cloudflare Tunnels are a powerful and underrated tool, and not over-engineering things (like skipping presigned URLs when unnecessary) goes a long way. Working with a cross-disciplinary team — journalists, designers, and engineers — in a new domain was equally rewarding.
