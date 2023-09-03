import React, {forwardRef} from "react";

function Experience(props) {
  return (
    <div ref={props.experienceRef} className="m-5 p-5">
      <p className="text-5 text-center my-8">Experience</p>
      <div className="flex justify-start items-center text-4">
        <i class="bx bxs-folder"></i>
        <p className="text-4 p-2">Open source contributor</p>
      </div>

      <p className="text-2">
        I've been working as an open source contributor in many small to
        large-scale applications. I've contributed to enterprise level projects
        like
        <a
          className="hover:text-indigo-500 hover:underline px-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/openedx/edx-platform"
        >
          Edx Platform
        </a>
        ,
        <a
          className="hover:text-indigo-500 hover:underline px-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/plone"
        >
          The plone foundation
        </a>
        and many more. Check out my
        <a
          className="hover:text-indigo-500 hover:underline px-1"
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
