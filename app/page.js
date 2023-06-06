"use client"
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MyImageGallery from "./components/imageGallery";
import projects from "./projectsData";

const Page = () => {
  const [activeGroup, setActiveGroup] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const buttonRowRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)
  const [certs, setShowCerts] = useState(false);

  function showCerts() {
    setShowCerts(!certs);
  }

  function openMenu() {
    setShowMenu(!showMenu)
  }

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
      <div className="flex mx-3 font-bold select-none flex-col items-center justify-center bg-slate-700 rounded-xl">
        <nav className="w-full max-w-[800px] top-0 rounded-b-xl fixed bg-gradient-to-r from-blue-500 via-green-500 to-red-500 text-slate-900 font-bold ">
          <ul className="flex justify-evenly mx-5">
            <li className="hover:scale-90 hover:opacity-50 duration-300">
              <a href="/">
                HOME
              </a>
            </li>
            <li className=" relative">
              <button className="hover:scale-90 hover:opacity-50 duration-300" onClick={openMenu}>
                SECTIONS
              </button>
              {showMenu && (
                <div className="absolute left-1/2 transform -translate-x-1/2 duration-300 text-center mt-2 space-y-3 shadow-md shadow-white/50 bg-gray-100 rounded-xl p-6">
                  <button
                    onClick={() => handleMenuClick("software")}
                    className="hover:text-red-400 hover:scale-90 duration-300"
                  >
                    SOFTWARE
                  </button>
                  <button
                    onClick={() => handleMenuClick("games")}
                    className="hover:text-blue-400 duration-300 hover:scale-90"
                  >
                    GAMES
                  </button>
                  <button
                    onClick={() => handleMenuClick("android")}
                    className="hover:text-green-400 duration-300 hover:scale-90"
                  >
                    ANDROID
                  </button>
                </div>
              )}
            </li>
            <li className="hover:scale-90 hover:opacity-50 duration-300">
              <a href="https://github.com/jrh89"
              >GITHUB
              </a>
            </li>
            <li className="hover:scale-90 hover:opacity-50 duration-300 ">
              <a href="https://have-mycard.vercel.app/api/xT17MRpa">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        {!activeGroup && !certs &&
          <section className="bg-black border-2 mt-6 border-slate-700 rounded-xl ">
            <div className="w-full justify-center flex flex-col items-center max-w-3xl p-4">
              <div className="w-1/2 sm:w-1/3 flex justify-center pt-1 place-content-center items-center">
                <Image
                  alt="profile picture"
                  width={400}
                  height={400}
                  cover
                  className="w-full shadow-md shadow-slate-700/50 justify-center items-center h-auto object-cover mb-4 rounded-xl border-2 border-slate-700"
                  src={"/images/profilepic.png"}
                ></Image>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-center text-slate-500 mb-4">Jared R Hooker</h1>
              <a title="skills" className="flex mb-4 justify-center" href="https://skillicons.dev">
                <img className="flex flex-row items-center place-content-center text-center place-items-center justify-center" title="skill-images" src="https://skillicons.dev/icons?i=react,nextjs,nodejs,tailwind&perline=4" />
              </a>
              <p className="text-slate-500 text-xl text-center border-b border-slate-500/80 mx-2 sm:mx-0 pb-2">
                I specialize in JavaScript for software development and Unreal Engine for developing games. My current stack for building software is ReactJS, NextJS, TailwindCSS, and Firebase.
              </p>
              <p className="text-slate-500 text-xl text-center mx-2 sm:mx-0 pt-2">
                I understand the importance of effective communication with clients and team members to ensure that projects are completed on time and within budget. When faced with challenges, I approach them with a positive and proactive attitude, always seeking creative solutions to overcome any obstacles.
              </p>
            </div>
          </section>
        }
        {!certs &&
          <div className="w-full rounded-xl items-center place-items-center bg-black content-center align-middle border-slate-700 border-2 max-w-3xl p-4">
            <div ref={buttonRowRef} className={`flex  justify-center gap-1 sm:gap-2 rounded-xl sm:mx-5 mx-10 text-sm sm:text-3xl my-2 flex-row items-center place-items-center content-center ${activeGroup ? " top-[200px] rounded-xl z-10 p-4" : ""
              }`}>
              <button
                className={`border-2 w-full border-red-400 text-red-400 shadow-lg shadow-red-400/50 px-4 py-2 rounded-xl ${activeGroup === "software" ? "bg-red-400 text-slate-900" : ""
                  }`}
                onClick={() => setActiveGroup("software")}
              >
                SOFTWARE
              </button>
              <button
                className={`border-2 w-full border-blue-400 shadow-blue-400/50 text-blue-400 shadow-lg px-4 py-2 rounded-xl ${activeGroup === "games" ? "bg-blue-400 text-slate-900" : ""
                  }`}
                onClick={() => setActiveGroup("games")}
              >
                GAMES
              </button>
              <button
                className={`border-2 w-full border-green-400 shadow-green-400/50 text-green-400 shadow-lg px-4 py-2 rounded-xl ${activeGroup === "android" ? "bg-green-400 text-slate-900" : ""
                  }`}
                onClick={() => setActiveGroup("android")}
              >
                ANDROID
              </button>
              {activeGroup !== null &&

                <button className=" border-2 border-slate-500 p-2 text-slate-500 rounded-xl justify-center items-center w-1/4 shadow-lg shadow-slate-500/50 text-center flex place-items-center align-middle" onClick={() => setActiveGroup(null)}>
                  X
                </button>

              }
            </div>
            <div className={`grid h-full text-center ${activeGroup !== null ? "mt-0" : "mt-4 mb-5"} gap-4 ${activeGroup === null ? "mb-4" : "mb-0"}`}>
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`border-2 ${project.group === "software" ? "border-red-400 shadow-red-400/50" : project.group === "games" ? "border-blue-400 shadow-blue-400/50" : "border-green-400 shadow-green-400/50"} flex flex-col items-center bg-black shadow-lg rounded-xl p-4 cursor-pointer transition duration-300 ${activeProject && activeProject.id === project.id
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                    }`}
                  onClick={() => openProject(project.id)}
                >
                  <h2
                    className={`text-3xl font-bold mb-4 ${project.group === "software"
                      ? "text-red-400"
                      : project.group === "games"
                        ? "text-blue-400"
                        : "text-green-400"
                      }`}
                  >
                    {project.title}
                  </h2>
                  <div className="mb-4">
                    <Image
                      height={1032}
                      width={1920}
                      className="w-full h-auto object-cover  border-2 rounded-xl border-slate-500"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <p className="text-slate-500 text-center">
                    {project.description.split('. ')[1] + '...'}
                  </p>


                </div>
              ))}
            </div>
          </div>}
        {!activeGroup && <div className="w-full mb-6 rounded-xl items-center place-items-center bg-black content-center align-middle border-slate-700 border-2 max-w-3xl p-4">
          <div ref={buttonRowRef} className="flex gap-2 my-2 justify-center ">
            {!certs &&
              <button
                className={`border-2 sm:text-3xl text-xl border-blue-400 w-auto text-center shadow-blue-400/50 text-blue-400 shadow-lg px-4 py-2 rounded-xl hover:scale-90 hover:opacity-50 duration-300 ${certs ? "top-[200px] rounded-xl  p-4" : ""}`}
                onClick={showCerts}
              >
                CERTIFICATES
              </button>}
            {certs &&

              <button className=" border-2 border-slate-500 p-2 text-slate-500 rounded-xl justify-center items-center px-4 shadow-lg shadow-slate-500/50 text-center flex place-items-center align-middle" onClick={showCerts}>
                X
              </button>

            }
          </div>
          {certs && <MyImageGallery />}
        </div>}
        {activeProject && (

          <div className="fixed top-0  left-0 z-10 flex items-center justify-center w-full h-screen bg-black">

            <div className=" max-w-[800px] p-8">
              <h2
                className={`text-3xl mb-2 sm:text-4xl text-center font-bold ${activeProject.group === "software"
                  ? "text-red-400"
                  : activeProject.group === "games"
                    ? "text-blue-400"
                    : "text-green-400"
                  }`
                }

              >
                {activeProject.title}
              </h2>
              <div className="mb-2 flex  justify-center">

                <Image
                  height={1032}
                  width={1920}
                  className="sm:w-1/2 h-auto object-cover rounded-xl border-2 border-slate-500"
                  src={activeProject.image}
                  alt={activeProject.title}
                />
                <h3>Images:</h3>
                {activeProject.images.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index}`}
                    height={200}
                    width={400}
                    className="h-auto object-cover rounded-xl border-2 border-slate-500"
                  />))}

              </div>
              <p className="text-slate-500 text-center mb-4 text-xl sm:text-2xl">{activeProject.description}</p>
              <div className="flex w-full flex-row justify-center gap-10">
                <Link className="flex justify-center text-green-400 font-bold underline hover:scale-90 hover:opacity-60 duration-300 py-2 mr-5xl" target="_blank" href={activeProject.url}>
                  {activeProject.urlLabel}
                </Link>
                <button
                  className="bg-red-400 text-black shadow-lg shadow-red-400/50 px-4 py-2 rounded-xl flex justify-center"
                  onClick={closeProject}
                >
                  Close
                </button></div>
            </div>
          </div>
        )}
        <div className="rounded-top-xl fixed bottom-0 w-full  flex justify-center">
          <footer className="w-full font-bold max-w-[800px] text-center bg-gradient-to-r rounded-t-xl from-blue-500 via-green-500 to-red-500 text-slate-900">Hooker Hill Studios ⓒ 2023</footer>
        </div>
      </div></>
  );
};

export default Page;
