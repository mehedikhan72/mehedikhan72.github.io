import React, { forwardRef } from "react";

function Skills(props) {
  return (
    <div ref={props.skillsRef} className="m-5 p-5 ">
      <p className="text-5 text-center">Skills</p>
      <p className="text-center text-3 py-5">
        I love new technologies. Here are some of the
        technologies and frameworks I'm comfortable with.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center m-2 p-2">
        <div className="m-5 p-5 bg-[#E2B714] text-[#323437] rounded-md text-center w-[250px] h-[550px] flex  flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <i class="text-3xl bx bx-world"></i>
            <p className="text-3 py-4 px-2">Languages</p>
          </div>

          <p className="text-2 py-1">C</p>
          <p className="text-2 py-1">C++</p>
          <p className="text-2 py-1">Python</p>
          <p className="text-2 py-1">JavaScript</p>
          <p className="text-2 py-1">Java</p>
          <div className="flex justify-center items-center">
            <i class="text-3xl bx bx-cloud"></i>
            <p className="text-3 py-4 px-2">Cloud</p>
          </div>

          <p className="text-2 py-1">DigitalOcean</p>
          <p className="text-2 py-1">Netlify</p>
          <p className="text-2 py-1">Firebase</p>
          <p className="text-2 py-1">PythonAnywhere</p>
        </div>
        <div className="m-5 p-5 bg-[#E2B714] text-[#323437] rounded-md text-center w-[250px] h-[550px] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <i class="text-3xl bx bx-code-alt"></i>
            <p className="text-3 py-4 px-2">Frontend</p>
          </div>
          <p className="text-2 py-1">React JS</p>
          <p className="text-2 py-1">TypeScript</p>
          <p className="text-2 py-1">Tailwind CSS</p>
          <br />
          <div className="flex justify-center items-center">
            <i class="text-3xl bx bx-cog"></i>
            <p className="text-3 py-4 px-2">Tools</p>
          </div>
          <p className="text-2 py-1">Git</p>
          <p className="text-2 py-1">Docker</p>
          <p className="text-2 py-1">Kubernetes</p>
          <p className="text-2 py-1">Postman</p>
        </div>
        <div className="m-5 p-5 bg-[#E2B714] text-[#323437] rounded-md text-center w-[250px] h-[550px] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <i class="text-3xl bx bx-server"></i>
            <p className="text-3 py-4 px-2">Backend</p>
          </div>
          <p className="text-2 py-1">Rest APIs</p>
          <p className="text-2 py-1">Spring Boot</p>
          <p className="text-2 py-1">Django Rest Framework</p>
          <p className="text-2 py-1">FastAPI</p>
          <p className="text-2 py-1">Flask</p>
          <br />
          <div className="flex justify-center items-center">
            <i class="text-3xl bx bx-data"></i>
            <p className="text-3 py-4 px-2">Databases</p>
          </div>
          <p className="text-2 py-1">PostgreSQL</p>
          <p className="text-2 py-1">Redis</p>
          <p className="text-2 py-1">SQLite</p>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Skills);
