import React, { forwardRef } from "react";

function Experience(props) {
  return (
    <div ref={props.experienceRef} className="m-5 p-5">
      <p className="text-5 text-center my-8">Experience</p>
      <div className="flex justify-start text-4">
        <i class="bx bxs-folder pt-1"></i>
        <p className="text-4 px-2 pb-2">Research Assistant @ Sysmodeler.ai | Remote | (November, 2025 - February, 2026)</p>
      </div>
      <p className="text-2">
        My role at 
        <a
          className="hover:text-indigo-500 underline hover:underline px-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://sysmodeler.ai/"
        >
          Sysmodeler.ai
        </a>
        included working on various novel research problems regarding Model-Based Systems Engineering (MBSE) and AI-based SysML generation.
      </p>
      <br />

      <div className="flex justify-start text-4">
        <i class="bx bxs-folder pt-1"></i>
        <p className="text-4 px-2 pb-2">Backend Engineer @ Systemica Institut | Remote | (December, 2024 - July, 2025)</p>
      </div>
      <p className="text-2">
        My role at 
        <a
          className="hover:text-indigo-500 underline hover:underline px-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://systemica-institut.de/"
        >
          Systemica Institut
        </a>
        included developing a scalable & reliable File Processing API with Python & FastAPI. |
        <a
          className="hover:text-indigo-500 underline hover:underline px-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1OZ9srLVw1oXkLgI46c1VtDezwR2hEHv-OKZ922u0z-w/edit?tab=t.0"
        >
          Design Document.
        </a>
      </p>
      <br />

      <div className="flex justify-start text-4">
        <i class="bx bxs-folder pt-1"></i>
        <p className="text-4 px-2 pb-2">Freelance Developer (2023 - Present)</p>
      </div>
      <p className="text-2">
        As a side gig, I've been working as a freelance developer for the past three years. I've made
        applications for small to medium scale businesses. Some of my clients
        include
                <a
          className="hover:text-indigo-500 hover:underline underline px-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.netra.news/"
        >
          Netra News
        </a>
        ,
        <a
          className="hover:text-indigo-500 hover:underline underline px-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.rantir.com/"
        >
          Rantir
        </a>
        ,
        <a
          className="hover:text-indigo-500 hover:underline px-1 underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https:www.chaarchakka.com"
        >
          ChaarChakka
        </a>
        etc.
      </p>
      <br />

      <div className="flex justify-start text-4">
        <i class="bx bxs-folder pt-1"></i>
        <p className="text-4 px-2 pb-2">Open source contributor (2023 - 2024)</p>
      </div>

      <p className="text-2">
        Working as an open source contributor in many small to
        large-scale applications. I've contributed to enterprise level projects
        like
        <a
          className="hover:text-indigo-500 hover:underline px-1 underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/apache/incubator-seata"
        >
          Apache Seata
        </a>,
        <a
          className="hover:text-indigo-500 hover:underline px-1 underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/openedx/edx-platform"
        >
          Edx Platform
        </a>
        ,
        <a
          className="hover:text-indigo-500 hover:underline px-1 underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/plone"
        >
          The plone foundation
        </a>
        and many more. Check out my
        <a
          className="hover:text-indigo-500 hover:underline px-1 underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mehedikhan72"
        >
          GitHub
        </a>
        to see my other contributions.
      </p>
      <br />
    </div>
  );
}

export default forwardRef(Experience);
