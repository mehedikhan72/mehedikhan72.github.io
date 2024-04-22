import React, { useState } from "react";
import Images from "./Images";

export default function ChaarChakka() {
  const [detailsOn, setDetailsOn] = useState(false);
  const images = [
    "static/cc_1.PNG",
    "static/cc_2.PNG",
    "static/cc_3.PNG",
    "static/cc_4.PNG",
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
              <div className="flex justify-start items-center text-4 flex-wrap">
                <i class="bx bxs-folder"></i>
                <p className="px-2 py-2">Vehicle Buy/Sell platform</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.chaarchakka.com"
                  className="my-btns-2 hidden md:block"
                >
                  Live Site
                </a>
              </div>
              <div className="flex justify-start items-center text-4 flex-wrap">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.chaarchakka.com"
                  className="my-btns-2 md:hidden block"
                >
                  Live Site
                </a>
              </div>

              <p className="text-2 pb-5">
                ChaarChakka is a platform where you can buy/sell new and used
                vehicles(cars and bikes). Me and a friend of mine made this for
                a client and the I did the entire backend for it.
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
          <div className="flex justify-start items-center text-4 flex-wrap">
            <i class="bx bxs-folder"></i>
            <p className="px-2 py-2">Vehicle Buy/Sell platform</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.chaarchakka.com"
              className="my-btns-2 hidden md:block"
            >
              Live Site
            </a>
          </div>
          <div className="flex justify-start items-center text-4 flex-wrap">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.chaarchakka.com"
              className="my-btns-2 md:hidden block"
            >
              Live Site
            </a>
          </div>

          <p className="text-2 pb-5">
            ChaarChakka is a platform where you can buy/sell new and used
            vehicles(cars and bikes). Me and a friend of mine made this for a
            client and the I did the entire backend for it.
          </p>

          <p className="text-3 py-2">&gt;_Tech Used</p>
          <p className="text-2 pb-5">
            Django rest framework, React, TypeScript, JWT Authentication,
            tailwindCSS, axios etc
          </p>

          <p className="text-3 py-2">&gt;_Gallery</p>
          <div>
            <Images detailed={true} images={images} />
          </div>

          <p className="text-3 py-2">&gt;_Challenges and What I Learned</p>
          <p className="text-2 pb-5">
            As a production grade business application, this project pushed me
            to my limits in terms of scalability and performance. I learned to
            host APIs on DigitalOcean.
          </p>
          <p className="text-2 pb-5">
            My project partner did the frontend so we learned more about
            collaboration from this project.
          </p>
          <p className="text-2 pb-5">
            We had to deal with continuous revisions and feedbacks from the
            client so this, for sure gave us a lot of experience in client
            handling.
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
