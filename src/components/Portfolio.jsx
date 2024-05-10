import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";

const Portfolio = () => {
  const projs = [
    {
      id: 1,
      project: proj1,
      name: "Productivity app",
      href1: "#proj1",
      href2: "https://github.com/likhitharai/Productivity_app_completed",
      technology1:"#React",
      technology2:"#JavaScript",
      technology3:"#Tailwindcss",
      description:"Introducing TaskTrek, a sleek and efficient productivity app crafted with HTML, CSS, and JavaScript to streamline your daily tasks and keep you organized."
    },
    {
      id: 2,
      project: proj2,
      name: "Weather app",
      href1: "#proj2",
      href2: "#proj1",
      technology1:"#HTML",
      technology2:"#CSS",
      technology3:"#JavaScript",
      description:"The weather app project is a dynamic web application designed to provide users with real-time weather updates and forecasts based on their location by utilizing APIs."
    },
    {
      id: 3,
      project: proj3,
      name: "Drumkit game",
      href1: "#proj3",
      href2: "https://github.com/likhitharai/Interacrive_drum_kit",
      technology1:"#HTML",
      technology2:"#CSS",
      technology3:"#JavaScript",
      description:"The drumkit project is an interactive web application that simulates a virtual drum set, allowing users to produce sounds by clicking on corresponding keys or tapping keys on their keyboard and mouse clicks."
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Portfolio</p>
        <p className="text-gray-400">Check out my recent work <br />(Hover on the card to view the link to demo and source code)</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projs.map(({ id, name, project, href1, href2, technology1, technology2, technology3, description}) => (
          /* My class */
          <div className="bg-gray-800 h-[450px] max-w-sm rounded overflow-hidden shadow-lg">
            <div
              key={id}
              className="transform transition-transform  duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[$040c16]
            group rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative"
            >
              <img src={project} alt="My first project" />

              <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-white tracking-wider"></span>

                <div className="pt-8 text-center">
                  <a href={href1} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live demo
                    </button>
                  </a>
                  <a href={href2}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Source code
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-gray-400">{name}</div>
              <p class="text-white text-base">
                {description}
              </p>
            </div>


            <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{technology1}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{technology2}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{technology3}</span>
  </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Portfolio;
