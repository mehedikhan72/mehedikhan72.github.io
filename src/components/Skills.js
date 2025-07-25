import React, { forwardRef } from "react";

function Skills(props) {
  return (
    <div ref={props.skillsRef} className="m-5 p-5 ">
      <p className="text-5 text-center">Skills</p>
      <p className="text-center text-3 py-5">
        I'm a complete agnostic when it comes to technology. Whatever works best for the problem at hand, I use that.
        <br />
        Here are some of the technologies I have worked with:
      </p>

      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center m-2 p-2">
        <div className="m-5 p-5 bg-[#E2B714] text-[#323437] rounded-md text-center w-[250px] h-[550px] flex  flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <i class="text-3xl bx bx-world"></i>
            <p className="text-3 py-4 px-2">Languages</p>
          </div>

          <p className="text-2 py-1">C</p>
          <p className="text-2 py-1">C++</p>
          <p className="text-2 py-1">Python</p>
          <p className="text-2 py-1">Java</p>
          <p className="text-2 py-1">JavaScript</p>
          <br />
          <div className="flex justify-center items-center">
            <i class="text-3xl bx bx-brain"></i>
            <p className="text-3 py-4 px-2">AI/ML</p>
          </div>

          <p className="text-2 py-1">PyTorch</p>
          <p className="text-2 py-1">NumPy</p>
          <p className="text-2 py-1">Pandas</p>
          <p className="text-2 py-1">OpenCV</p>
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
          <p className="text-2 py-1">DragonflyDB</p>
        </div>
        <div className="m-5 p-5 bg-[#E2B714] text-[#323437] rounded-md text-center w-[250px] h-[550px] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <i class="text-3xl bx bx-cloud"></i>
            <p className="text-3 py-4 px-2">Cloud/DevOps</p>
          </div>

          <p className="text-2 py-1">AWS</p>
          <p className="text-2 py-1">DigitalOcean</p>
          <p className="text-2 py-1">Docker</p>
          <p className="text-2 py-1">Kubernetes</p>
          <p className="text-2 py-1">Terraform</p>
          <br />
          <div className="flex justify-center items-center">
            <i class="text-3xl bx bx-cog"></i>
            <p className="text-3 py-4 px-2">Tools</p>
          </div>
          <p className="text-2 py-1">Git</p>
          <p className="text-2 py-1">Postman</p>
          <p className="text-2 py-1">Locust</p>
          <p className="text-2 py-1">Firebase</p>
        </div>
        <div className="m-5 p-5 bg-[#E2B714] text-[#323437] rounded-md text-center w-[250px] h-[550px] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <i class="text-3xl bx bx-code-alt"></i>
            <p className="text-3 py-4 px-2">Frontend</p>
          </div>
          <p className="text-2 py-1">React JS</p>
          <p className="text-2 py-1">TypeScript</p>
          <p className="text-2 py-1">Tailwind CSS</p>
          <p className="text-2 py-1">HTML/CSS</p>
          <p className="text-2 py-1">JavaScript</p>
          <br />
          <div className="flex justify-center items-center">
            <i class="text-3xl bx bx-palette"></i>
            <p className="text-3 py-4 px-2">UI/UX</p>
          </div>
          <p className="text-2 py-1">Responsive Design</p>
          <p className="text-2 py-1">Bootstrap</p>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Skills);