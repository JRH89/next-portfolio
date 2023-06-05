"use client"
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [activeGroup, setActiveGroup] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const buttonRowRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)

  function openMenu() {
    setShowMenu(!showMenu)
  }

  const projects = [
    {
      id: 1,
      title: "My Card",
      description: "Personalized digital cards with QR code and URL for easy contact sharing. Reduces waste and eliminates waiting on processing and shipping. Created with React, Next, Tailwind, and Vercel.",
      group: "software",
      image: "/ProjectImgs/project1.png",
    },
    {
      id: 2,
      title: "Jewelry & Gems",
      description: "E-commerce app for selling jewelry and gems. Creaed with React, Next, Tailwind, Zustand, Stripe, and Vercel.",
      group: "software",
      image: "/ProjectImgs/project2.png",
    },
    {
      id: 4,
      title: "Fall Hollow (UE5)",
      description: "Action adventure game featuring three playable characters, open world exploration, expansive cave system, magic-melee battles, and rpg elements. Being built with Unreal Engine 5",
      group: "games",
      image: "/ProjectImgs/project4.png",
    },
    {
      id: 3,
      title: "The Knight Life (Unity",
      description: "Sidescroller made with Unity. Play as a jaded knight rescuing princesses from danger. Published for in browser play on itch.io",
      group: "games",
      image: "/ProjectImgs/project3.png",
    },
    {
      id: 5,
      title: "STARRUNNER",
      description: "Endless runner in which the player helps a shooting star navigate space junk. Developed with html, css, JavaScript, and Android Studio. Displays banner ads at the bottom using Google AdMob.",
      group: "android",
      image: "/ProjectImgs/project5.png",
    },
  ];

  const filteredProjects =
    activeGroup === null
      ? []
      : projects.filter((project) => project.group === activeGroup);

  const openProject = (projectId) => {
    const project = projects.find((project) => project.id === projectId);
    setActiveProject(project);

  };

  const closeProject = () => {
    setActiveProject(null);
  };

  const handleMenuClick = (group) => {
    setActiveGroup(group);
    setShowMenu(false);
  };

  return (
    <>
      <div className="flex select-none flex-col items-center justify-center min-h-screen bg-slate-800 rounded-lg">
        <nav className="w-full max-w-[800px] top-0 rounded-b-lg fixed bg-gradient-to-r from-blue-500 via-green-500 to-red-500 text-slate-800 font-bold py-2">
          <ul className="flex justify-evenly mx-5">
            <li className="hover:scale-90 hover:opacity-50 duration-300">
              <a href="/">Home</a>
            </li>
            <li className=" relative">
              <button className="hover:scale-90 hover:opacity-50 duration-300" onClick={openMenu}>Sections</button>
              {showMenu && (
                <div className="absolute left-1/2 transform -translate-x-1/2 duration-300 text-center mt-2 space-y-2 bg-gray-100 rounded-lg p-2">
                  <button
                    onClick={() => handleMenuClick("software")}
                    className="hover:text-red-400 hover:scale-90 duration-300"
                  >
                    Software
                  </button>
                  <button
                    onClick={() => handleMenuClick("games")}
                    className="hover:text-blue-400 duration-300 hover:scale-90"
                  >
                    Games
                  </button>
                  <button
                    onClick={() => handleMenuClick("android")}
                    className="hover:text-green-400 duration-300 hover:scale-90"
                  >
                    Android
                  </button>
                </div>
              )}
            </li>

            <li className="hover:scale-90 hover:opacity-50 duration-300">
              <a href="https://github.com/jrh89">GitHub</a>
            </li>
            <li className="hover:scale-90 hover:opacity-50 duration-300">
              <Link href="/certificates">Certificates</Link>
            </li>
            <li className="hover:scale-90 hover:opacity-50 duration-300 ">
              <a href="https://have-mycard.vercel.app/api/xT17MRpa">Contact</a>
            </li>
          </ul>
        </nav>
        {!activeGroup &&
          <section className="bg-slate-900 border-2 mt-5 border-slate-700 rounded-lg py-4">
            <div className="w-full justify-center flex flex-col items-center max-w-3xl p-8">
              <div className="w-1/3 flex justify-center place-content-center items-center">
                <Image
                  alt="profile picture"
                  width={400}
                  height={400}
                  cover
                  eager={true}
                  className="w-full justify-center items-center h-auto object-cover mb-8 rounded-full border-2 border-slate-700"
                  src={"/profilepic.png"}
                ></Image>
              </div>
              <h1 className="text-4xl font-bold text-center text-slate-400 mb-8">Jared R Hooker</h1>
              <p className="text-slate-400 text-center mx-5 sm:mx-0 mb-4">
                I specialize in Javascript for software development and Unreal Engine for developing games. My current stack for building software is ReactJS, NextJS, TailwindCSS, and Firebase.
                I understand the importance of effective communication with clients and team members to ensure that projects are completed on time and within budget. When faced with challenges, I approach them with a positive and proactive attitude, always seeking creative solutions to overcome any obstacles.
                Whether you need a game developed from scratch or a custom website/app to be built, I am confident in my ability to provide you with high quality solutions that will meet your needs and exceed your expectations.
              </p>
              <a title="skills" className="flex mx-5 mt-8 justify-center" href="https://skillicons.dev">
                <img className="flex flex-row items-center place-content-center text-center place-items-center justify-center" title="skill-images" src="https://skillicons.dev/icons?i=js,react,nextjs,nodejs,tailwind,firebase,unity,unrealengine&perline=8" />
              </a>
            </div>
          </section>
        }
        <div className="w-full rounded-lg items-center place-items-center bg-slate-900 content-center align-middle border-slate-700 border-2 max-w-3xl p-8">

          <div ref={buttonRowRef} className={`flex justify-center gap-2 flex-row items-center place-items-center content-center ${activeGroup ? " top-[200px] rounded-lg z-10 p-4" : ""
            }`}>
            <button
              className={`border-2 w-full border-red-400 text-red-400 shadow-lg shadow-red-400/50 px-4 py-2 rounded ${activeGroup === "software" ? "bg-red-400 text-slate-900" : ""
                }`}
              onClick={() => setActiveGroup("software")}
            >
              Software
            </button>
            <button
              className={`border-2 w-full border-blue-400 shadow-blue-400/50 text-blue-400 shadow-lg px-4 py-2 rounded ${activeGroup === "games" ? "bg-blue-400 text-slate-900" : ""
                }`}
              onClick={() => setActiveGroup("games")}
            >
              Games
            </button>
            <button
              className={`border-2 w-full border-green-400 shadow-green-400/50 text-green-400 shadow-lg px-4 py-2 rounded ${activeGroup === "android" ? "bg-green-400 text-slate-900" : ""
                }`}
              onClick={() => setActiveGroup("android")}
            >
              Android
            </button>

          </div>
          {activeGroup !== null &&
            <div className="flex w-full justify-center place-items-center content-center items-center self-center align-middle">
              <button className=" border-2 p-2 rounded-md justify-center items-center w-1/4 shadow-lg shadow-white/50 text-center relative flex place-items-center align-middle" onClick={() => setActiveGroup(null)}>
                Close
              </button>
            </div>
          }
          <div className={`grid ${activeGroup !== null ? "mt-8" : "mt-0"} gap-8 ${activeGroup === null ? "" : "md:grid-cols-2"}`}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`border-2 ${project.group === "software" ? "border-red-400 shadow-red-400/50" : project.group === "games" ? "border-blue-400 shadow-blue-400/50" : "border-green-400 shadow-green-400/50"} flex flex-col items-center bg-slate-800 shadow-lg rounded-lg p-4 cursor-pointer transition duration-300 ${activeProject && activeProject.id === project.id
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
                  }`}
                onClick={() => openProject(project.id)}
              >
                <h2
                  className={`text-2xl font-bold mb-2 ${project.group === "software"
                    ? "text-red-400"
                    : project.group === "games"
                      ? "text-blue-400"
                      : "text-green-400"
                    }`}
                >
                  {project.title}
                </h2>
                <div className="mb-2">
                  <Image
                    height={1032}
                    width={1920}

                    className="w-full h-auto object-cover rounded border-2 border-slate-400"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <p className="text-slate-400 text-center">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        {activeProject && (
          <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-white">
            <div className="max-w-3xl p-8">
              <h2
                className={`text-2xl font-bold ${activeProject.group === "software"
                  ? "text-red-400"
                  : activeProject.group === "games"
                    ? "text-blue-400"
                    : "text-green-400"
                  }`}
              >
                {activeProject.title}
              </h2>
              <p className="text-gray-700 mb-4">{activeProject.description}</p>
              <button
                className="bg-red-400 text-white px-4 py-2 rounded-lg"
                onClick={closeProject}
              >
                Close
              </button>
            </div>
          </div>
        )}
        <div className="rounded-top-lg fixed bottom-0 w-full  flex justify-center">
          <footer className="w-full font-bold max-w-[800px] text-center bg-gradient-to-r rounded-t-lg from-blue-500 via-green-500 to-red-500 text-slate-800">Hooker Hill Studios ⓒ 2023</footer>
        </div>
      </div></>
  );
};

export default Page;
