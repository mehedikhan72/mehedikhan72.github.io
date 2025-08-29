import React, { forwardRef } from "react";

function Experience(props) {
  return (
    <div ref={props.experienceRef} className="m-5 p-5">
      <p className="text-5 text-center my-8">Experience</p>
      <div className="flex justify-start items-center text-4">
        <i class="bx bxs-folder"></i>
        <p className="text-4 p-2">Backend Engineer (December, 2024 - July, 2025)</p>
      </div>
      <p className="text-2">
        I worked remotely as a backend engineer at 
        <a
          className="hover:text-indigo-500 underline hover:underline px-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://systemica-institut.de/"
        >
          Systemica Institut.
        </a>
        It's a German-based company that provides training to Psychiatrists. My role included developing a scalable File Processing API with Python & FastAPI.
      </p>

      <div className="flex justify-start items-center text-4">
        <i class="bx bxs-folder"></i>
        <p className="text-4 p-2">Freelance Developer (2023 - 2024)</p>
      </div>
      <p className="text-2">
        I've been working as a freelance developer for the past two year. I've made
        applications for small to medium scale businesses. Some of my clients
        include
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
      <div className="flex justify-start items-center text-4">
        <i class="bx bxs-folder"></i>
        <p className="text-4 p-2">Open source contributor (2023 - Present)</p>
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
    </div>
  );
}

export default forwardRef(Experience);
