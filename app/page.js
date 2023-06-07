"use client"
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MyImageGallery from "./components/imageGallery";
import projects from "./projectsData";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Message from "./components/message";
import Loading from "@/utils/Loading";

const Page = () => {
  const [activeGroup, setActiveGroup] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const buttonRowRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)
  const [certs, setShowCerts] = useState(false);
  const [isLoading, setISLoading] = useState(false)

  function showCerts() {
    setISLoading(true)
    setShowCerts(!certs);
    setISLoading(false)
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
    setISLoading(true)
    setActiveProject(null);
    setISLoading(false)
  };

  const handleMenuClick = (group) => {
    setActiveGroup(group);
    setShowMenu(!showMenu)
  };

  return (
    <>


      <div className="flex mx-3 font-bold select-none flex-col items-center justify-center bg-slate-700 rounded-xl">

        <Nav activeGroup={activeGroup} handleMenuClick={handleMenuClick} openMenu={openMenu} />

        {isLoading &&
          <Loading />
        }

        {!activeGroup && !certs &&
          <section className="bg-neutral-800 border-2 mt-10 border-slate-700 rounded-xl ">
            <div className="w-full justify-center flex flex-col items-center max-w-3xl p-4">
              <div className="w-1/2 sm:w-1/3 flex justify-center pt-1 place-content-center items-center">
                <Image
                  alt="profile picture"
                  width={400}
                  height={400}
                  cover="true"
                  className="w-full shadow-md shadow-slate-700/50 justify-center items-center h-auto object-cover mb-4 rounded-xl border-2 border-slate-700"
                  src={"/images/profilepic.png"}
                ></Image>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-center text-slate-400 mb-4">Jared R Hooker</h1>
              <a title="skills" className="flex mb-4 justify-center" href="https://skillicons.dev">
                <img className="flex flex-row items-center place-content-center text-center place-items-center justify-center" title="skill-images" src="https://skillicons.dev/icons?i=react,nextjs,nodejs,tailwind&perline=4" />
              </a>
              <p className="text-slate-400 text-xl text-center border-b border-slate-500/80 mx-2 sm:mx-0 pb-2">
                I specialize in JavaScript for software development and Unreal Engine for developing games. My current stack for building software is ReactJS, NextJS, TailwindCSS, and Firebase.
              </p>
              <p className="text-slate-400 text-xl text-center mx-2 sm:mx-0 pt-2">
                I understand the importance of effective communication with clients and team members to ensure that projects are completed on time and within budget. When faced with challenges, I approach them with a positive and proactive attitude, always seeking creative solutions to overcome any obstacles.
              </p>
            </div>
          </section>
        }
        {!certs &&
          <div className="w-full rounded-xl items-center place-items-center bg-neutral-800 content-center align-middle border-slate-700 border-2 max-w-3xl p-2">
            <div ref={buttonRowRef} className={`flex  justify-center gap-1 sm:gap-5 rounded-xl sm:mx-5 mx-10 text-sm sm:text-3xl my-2 mt-3 flex-row items-center place-items-center content-center ${activeGroup ? "mt-8 top-[200px] z-10 p-2" : ""
              }`
            }
            >
              <button
                className={`border-2 w-full hover:scale-90 hover:opacity-60 duration-300 border-red-400 text-red-400 shadow-lg shadow-red-400/50 px-4 py-2 rounded-xl ${activeGroup === "software" ? "bg-red-400 text-slate-900" : ""
                  }`
                }
                onClick={() => setActiveGroup("software")}
              >
                SOFTWARE
              </button>
              <button
                className={`hover:scale-90 hover:opacity-60 duration-300 border-2 w-full border-blue-400 shadow-blue-400/50 text-blue-400 shadow-lg px-4 py-2 rounded-xl ${activeGroup === "games" ? "bg-blue-400 text-slate-900" : ""
                  }`
                }
                onClick={() => setActiveGroup("games")}
              >
                GAMES
              </button>
              <button
                className={`hover:scale-90 hover:opacity-60 duration-300 border-2 w-full border-green-400 shadow-green-400/50 text-green-400 shadow-lg px-4 py-2 rounded-xl ${activeGroup === "android" ? "bg-green-400 text-slate-900" : ""
                  }`}
                onClick={() => setActiveGroup("android")}
              >
                ANDROID
              </button>
            </div>

            {activeGroup !== null &&
              <div className="flex mb-4 justify-center">
                <i onClick={() => setActiveGroup(null)} className=" fa-solid fa-xmark text-slate-400 text-2xl align-middle  border-2 border-slate-400   hover:rotate-90 cursor-pointer duration-300 px-2 py-1 rounded-xl flex justify-center"></i>
              </div>
            }

            <div className={`grid h-full text-center ${activeGroup !== null ? "mt-2" : "mt-4"} gap-4 ${activeGroup === null ? "mb-0" : "mb-5"}`}>

              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`border-2 ${project.group === "software" ? "border-red-400 shadow-red-400/50" : project.group === "games" ? "border-blue-400 shadow-blue-400/50" : "border-green-400 shadow-green-400/50"} flex flex-col items-center bg-neutral-800 shadow-lg rounded-xl p-4 cursor-pointer transition duration-300 ${activeProject && activeProject.id === project.id
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
                      className="w-full h-auto object-cover  border-2 rounded-xl border-slate-5400"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <p className="text-slate-400 text-center">
                    {`${project.description.split('. ')[0]}. ${project.description.split('. ')[1]}...`}
                  </p>

                </div>
              ))
              }
            </div>
          </div>
        }

        {!activeGroup && <div className={`w-full rounded-xl items-center place-items-center bg-neutral-800 relative content-center align-middle border-slate-700 border-2 max-w-3xl p-4 ${certs ? 'mt-10' : ''}`}>
          <div ref={buttonRowRef} className="flex gap-2 my-2 justify-center ">
            {!certs &&
              <button
                className={`border-2 sm:text-3xl text-xl border-blue-400 w-auto text-center shadow-blue-400/50 text-blue-400 shadow-lg px-4 py-2 rounded-xl hover:scale-90 hover:opacity-50 duration-300 ${certs ? "top-[200px] rounded-xl  p-4" : ""}`}
                onClick={showCerts}
              >
                CERTIFICATES
              </button>}
            {certs &&
              <i onClick={showCerts} className="duration-300 hover:rotate-180 fa-solid fa-xmark text-4xl absolute top-1 right-2 cursor-pointer flex text-slate-500"></i>
            }
          </div>
          {certs && <MyImageGallery />}
        </div>

        }
        {!activeGroup && !certs &&
          <div className="bg-neutral-800 max-w-[770px] w-full mb-6 rounded-xl border-slate-700 border-2">
            <Message />
          </div>
        }
        {activeProject && (
          <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen bg-neutral-800">
            <div className="max-w-[800px] p-8">
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
              <div className="mb-2 flex justify-center">
                <Image
                  height={1032}
                  width={1920}
                  className="sm:w-1/2 h-auto object-cover rounded-xl border-2 border-slate-400"
                  src={activeProject.image}
                  alt={activeProject.title}
                />
              </div>
              <p className="text-slate-400 text-center mb-4 text-xl">{activeProject.description}</p>
              <div className="flex align-middle place-items-ceetner w-full flex-row justify-center gap-10">
                <Link className="flex text-2xl justify-center text-green-400 font-bold underline hover:scale-90 hover:opacity-60 duration-300 py-2 " target="_blank" href={activeProject.url}>
                  {activeProject.urlLabel}
                </Link>
                <i
                  className=" fa-solid fa-xmark text-slate-400 text-2xl align-middle  border-2 border-slate-400   hover:rotate-90 duration-300 px-4 py-3 rounded-xl flex justify-center"
                  onClick={closeProject}
                >
                </i>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};
export default Page;
