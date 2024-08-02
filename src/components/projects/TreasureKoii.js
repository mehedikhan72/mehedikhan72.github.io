import React, { useState } from "react";
import Images from "./Images";

export default function TreasureKoii() {
  const [detailsOn, setDetailsOn] = useState(false);
  const images = [
    "static/tk_1.webp",
    "static/tk_2.PNG",
    "static/tk_3.PNG",
    "static/tk_4.PNG",
    "static/tk_5.PNG",
    "static/tk_6.PNG",
    "static/tk_7.PNG",
    "static/tk_8.PNG",
  ];

  const toggleDetails = () => {
    setDetailsOn(!detailsOn);
  };

  return (
    <div className="p-5">
      {!detailsOn && (
        <div>
          <div className="flex flex-col xl:flex-row justify-center items-center">
            <div className="w-full xl:w-1/2 flex justify-center items-center">
              <Images detailed={false} images={images} />
            </div>
            <div className="w-full xl:w-1/2">
              <div className="flex justify-start items-center text-4 flex-wrap">
                <i class="bx bxs-folder"></i>
                <p className="px-2 py-2">Treasure Hunt Organizer</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.treasurekoii.com"
                  className="my-btns-2 hidden md:block"
                >
                  Live Site
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mehedikhan72/TreasureKoii-Client"
                  className="my-btns-2 hidden md:block"
                >
                  Github-Client
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mehedikhan72/TreasureKoii-Api"
                  className="my-btns-2 hidden md:block"
                >
                  Github-API
                </a>
              </div>
              <div className="flex justify-start items-center text-4 flex-wrap">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.treasurekoii.com"
                  className="my-btns-2 md:hidden block"
                >
                  Live Site
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mehedikhan72/TreasureKoii-Client"
                  className="my-btns-2 md:hidden block"
                >
                  Github-Client
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mehedikhan72/TreasureKoii-Api"
                  className="my-btns-2 md:hidden block"
                >
                  Github-API
                </a>
              </div>

              <p className="text-2 pb-5">
                TreasureKoii is a platform that lets you organize treasure
                hunts. Users can create teams and take part in treasure hunts.
                This app lets you create puzzles and participants solve them to
                get to the next level. The overall user experience is very
                interactive and fun with realtime leaderboards, announcements
                and many more features.
              </p>
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
            <p className="px-2 py-2">Treasure Hunt Organizer</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.treasurekoii.com"
              className="my-btns-2 hidden md:block"
            >
              Live Site
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mehedikhan72/TreasureKoii-Client"
              className="my-btns-2 hidden md:block"
            >
              Github-Client
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mehedikhan72/TreasureKoii-Api"
              className="my-btns-2 hidden md:block"
            >
              Github-API
            </a>
          </div>
          <div className="flex justify-start items-center text-4 flex-wrap">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.treasurekoii.com"
              className="my-btns-2 md:hidden block"
            >
              Live Site
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mehedikhan72/TreasureKoii-Client"
              className="my-btns-2 md:hidden block"
            >
              Github-Client
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mehedikhan72/TreasureKoii-Api"
              className="my-btns-2 md:hidden block"
            >
              Github-API
            </a>
          </div>

          <p className="text-2 pb-5">
            TreasureKoii is a platform that lets you organize treasure hunts.
            Users can create teams and take part in treasure hunts. This app
            lets you create puzzles and participants solve them to get to the
            next level. The overall user experience is very interactive and fun
            with realtime leaderboards, announcements and many more features.
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
            This project took a lot of critical thinking for the hunts to be in
            optimal condition, as it was a real-world application. As this was
            my first application that many people used at the same time, I had
            to experience many production level issues.
          </p>
          <p className="text-2 pb-5">
            A friend helped me in the frontend part of this project. So I
            learned to work in a team and lead a team!
          </p>
          <p className="text-2 pb-5">
            This is also our first SaaS product, so we plan to improve and
            market it in the future. Our target is to make treasure hunts more
            fun and accessible to everyone.
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
