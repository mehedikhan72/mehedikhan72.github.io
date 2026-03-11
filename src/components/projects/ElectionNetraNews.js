import React, { useState } from "react";
import Images from "./Images";

export default function ElectionNetraNews() {
  const [detailsOn, setDetailsOn] = useState(false);
  const images = [
    "/blog-images/election-monitor-system-netranews-3.webp",
    "/blog-images/election-monitor-system-netranews-1.webp",
    "/blog-images/election-monitor-system-netranews-2.webp",
  ];

  const toggleDetails = () => {
    setDetailsOn(!detailsOn);
  };

  return (
    <div className="p-5">
      {!detailsOn && (
        <div>
          <div className="flex flex-col xl:flex-row justify-center items-center">
            <div className="w-full xl:w-1/2">
              <div className='flex justify-start text-4'>
                  <i class='bx bxs-folder pt-3' ></i>
                  <p className='px-2 py-2'>Live Election Monitor System - Netra News</p>
                  <a target='_blank' rel='noopener noreferrer' href="https://mehedikhan.me/blogs/election-monitor-system-netranews" className='my-btns-2 hidden md:block'>Blog Post</a>
              </div>
              <div className='flex justify-start items-center text-4'>
                  <a target='_blank' rel='noopener noreferrer' href="https://mehedikhan.me/blogs/election-monitor-system-netranews" className='my-btns-2 md:hidden block'>Blog Post</a>
              </div>

              <p className="text-2 pb-5">
                In February 2026, I worked with Netra News as a systems, backend, and infra lead to build a
                live election monitoring system for the national election of Bangladesh. The system reliably
                served ~8 million requests with 100% uptime in a span of a few hours, covering 300 constituencies
                and ~43,000 polling stations nationwide.
              </p>
            </div>
            <div className="w-full xl:w-1/2 flex justify-center items-center">
              <Images detailed={false} images={images} />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={toggleDetails}
              className="my-btns-2 cursor-default"
            >
              View Details
            </button>
          </div>
        </div>
      )}

      {detailsOn && (
        <div>
          <div className="flex justify-start text-4">
            <i class="bx bxs-folder pt-3"></i>
            <p className="px-2 py-2">Live Election Monitoring System - Netra News</p>
            <a target='_blank' rel='noopener noreferrer' href="https://mehedikhan.me/blogs/election-monitor-system-netranews" className='my-btns-2 hidden md:block'>Blog Post</a>
          </div>
          <div className="flex justify-start items-center text-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.mehedikhan.com/blog/election-monitoring-system-netranews"
              className="my-btns-2 md:hidden block"
            >
              Blog Post
            </a>
          </div>

          <p className="text-2 pb-5">
            In February 2026, I worked with Netra News as a systems, backend, and infra lead to build a
            live election monitoring system for the national election of Bangladesh. The system reliably
            served ~8 million requests with 100% uptime in a span of a few hours, covering 300 constituencies
            and ~43,000 polling stations nationwide.
          </p>

          <p className="text-3 py-2">&gt;_Tech Stack</p>
          <p className="text-2 pb-5">
            FastAPI, PostgreSQL, Alembic, pgBouncer, NextJS (ISR), Kubernetes (DigitalOcean), Docker,
            Cloudflare (DDoS protection, WAF, Tunnels), Axiom, GitHub Actions, S3-compatible storage, RBAC.
          </p>

          <p className="text-3 py-2">&gt;_Architecture</p>
          <p className="text-2 pb-5">
            The system was built as a static site using NextJS Incremental Static Regeneration (ISR). Whenever
            an enumerator entered a polling result, the server triggered an authenticated, non-blocking webhook
            to regenerate the static pages — keeping content up-to-date with near-zero stale data, while
            keeping the infrastructure load minimal. The backend was a FastAPI monolith with replicas, following
            the controller-service pattern. A PostgreSQL primary with a standby replica ensured 99.99% uptime.
            Two-layer connection pooling (application + pgBouncer) kept database connections under control.
          </p>

          <p className="text-3 py-2">&gt;_Infrastructure</p>
          <p className="text-2 pb-5">
            All services were deployed on DigitalOcean in the Bangalore region. A managed Kubernetes cluster
            with 2-6 autoscaling nodes (4 vCPUs, 8 GB RAM each) handled traffic surges. The backend pods were
            managed by an HPA (5–15 pods), scaling on CPU usage. Cloudflare provided DDoS protection, WAF rules,
            rate limiting, and bot protection. Cloudflare Tunnels replaced a traditional load balancer to bridge
            Cloudflare with the Kubernetes cluster seamlessly. The entire infrastructure for a month cost ~$335.
          </p>

          <p className="text-3 py-2">&gt;_Gallery</p>
          <div>
            <Images detailed={true} images={images} />
          </div>

          <p className="text-3 py-2">&gt;_What I Learned</p>
          <p className="text-2 pb-5">
            This project taught me to design and operate high-availability systems under real pressure. Key
            takeaways: choosing ISR over dynamic rendering saved the infrastructure, Cloudflare Tunnels are a
            powerful and underrated tool, and not over-engineering things (like skipping presigned URLs when
            unnecessary) goes a long way. Working with a cross-disciplinary team — journalists, designers,
            and engineers — in a new domain was equally rewarding.
          </p>

          <div className="flex justify-center items-center">
            <button
              onClick={toggleDetails}
              className="my-btns-2 cursor-default"
            >
              Hide Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
