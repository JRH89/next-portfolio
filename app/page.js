"use client"

import React, {
  useState,
  useRef,
  useEffect
} from "react"
import Image from "next/image"
import MyImageGallery from "./certificates/imageGallery"
import projects from "./projects/projectDetails"
import Nav from "./components/Navbar"
import Footer from "./components/Footer"
import Message from "./components/Message"
import Loading from "@/utils/Loading"
import Link from "next/link"

const Page = () => {
  const [activeGroup, setActiveGroup] = useState(null)
  const [activeProject, setActiveProject] = useState(null)
  const buttonRowRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)
  const [certs, setShowCerts] = useState(false)
  const [isLoading, setISLoading] = useState(false)
  const [clickedImage, setClickedImage] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const totalImages = activeProject && activeProject.images ? activeProject.images.length : 0

  const handleImageClick = (imagePath) => {
    setClickedImage(imagePath)
  }

  const handleClose = () => {
    setClickedImage(null)
  }

  function showCerts() {
    setISLoading(true)
    setShowCerts(!certs)
    setISLoading(false)
  }

  function openMenu() {
    setShowMenu(!showMenu)
  }

  const filteredProjects =
    activeGroup === null
      ? []
      : projects.filter((project) => project.group === activeGroup)

  const openProject = (projectId) => {
    const project = projects.find((project) => project.id === projectId)
    setActiveProject(project)
    setActiveImageIndex(0)
  }

  const closeProject = () => {
    setISLoading(true)
    setActiveProject(null)
    setISLoading(false)
  }

  const handleMenuClick = (group) => {
    setActiveGroup(group)
    setShowMenu(!showMenu)
  }

  return (
    <div className="min-h-[100vh]">
      <div id="hero" name="hero" className="flex flex-grow h-full w-full font-bold select-none flex-col items-center my-auto justify-center bg-slate-700 rounded-xl">

        <div id="navbar" className="flex justify-center">
          <Nav
            activeGroup={activeGroup}
            setActiveGroup={setActiveGroup}
            handleMenuClick={handleMenuClick}
            openMenu={openMenu}
            setShowCerts={setShowCerts}
            setActiveProject={setActiveProject}
          />
        </div>
        {isLoading &&
          <Loading />
        }
        {!activeGroup && !certs &&
          <section className={`bg-neutral-950 h-full  mt-12 py-5 my-auto content-center place-content-center flex place-items-center items-center justify-evenly align-middle border-2 border-slate-700 rounded-xl`}>
            <div className="w-full h-full my-auto justify-evenly gap-3 flex flex-col  items-center max-w-3xl">
              <div className="w-1/3 max-w-[300px] flex flex-col justify-center place-content-center align-middle items-center">
                <Image
                  alt="profile picture"
                  width={400}
                  height={400}
                  cover="true"
                  className="w-auto mx-auto justify-center items-center h-auto object-cover rounded-xl border-t-2 border-b-2 border-slate-400"
                  src={"/images/profilepic.png"}
                ></Image>
              </div>
              <h1 className="text-4xl flex align-middle sm:text-5xl font-bold text-center text-slate-400
              ">
                Jared R Hooker
              </h1>

              <div>
                <p className="text-slate-400 leading-tight sm:text-lg text-lg font-medium text-center mx-5 
               ">
                  I specialize in JavaScript for software development and Unreal Engine for developing games. My current stack for building software is ReactJS, NextJS, TailwindCSS, and Firebase.
                </p>
                <p className="text-slate-400 leading-tight sm:text-lg mt-2 text-lg font-medium text-center text-md mx-5 
               ">
                  I understand the importance of effective communication with clients and team members to ensure that projects are completed on time and within budget. When faced with challenges, I approach them with a positive and proactive attitude, seeking creative solutions to overcome obstacles.
                </p>
              </div>
              <div className="border-b-2  border-t-2 p-2 mt-3 rounded-xl border-slate-400">
                <a title="skills" className="flex justify-center" href="https://skillicons.dev">
                  <img className="flex w-80 sm:w-80 flex-row  justify-center" title="skill-images" src="https://skillicons.dev/icons?i=react,nextjs,nodejs,tailwind,cpp,cs&perline=6" />
                </a>
              </div></div>
          </section>
        }
        {!certs &&
          <div className={`text-xl  rounded-xl items-center place-items-center bg-neutral-950 content-center align-middle h-full border-slate-700 my-auto border-2 p-2 justify-center w-full max-w-[770px] ${!activeGroup ? "mb-14" : "pb-48"}`} >
            <div
              id="buttonrow"
              ref={buttonRowRef}
              className={`flex justify-center sm:justify-between gap-1 sm:gap-5 rounded-xl px-2 text-md w-full mt-4 sm:text-3xl my-2 flex-row items-center place-items-center content-center ${activeGroup ? "rounded-none mt-8 top-11 bg-neutral-950 z-10 p-2 sticky flex " : ""
                }`}
            >
              <button
                className={`border-2 w-full hover:scale-90 hover:opacity-60 duration-300 border-red-400 text-red-400 shadow-lg shadow-red-400/50 p-2 rounded-xl ${activeGroup === "software" ? "bg-red-400 text-slate-900" : ""
                  }`
                }
                onClick={() => setActiveGroup(activeGroup === "software" ? null : "software")}
              >
                Software
              </button>
              <button
                className={`hover:scale-90 hover:opacity-60 duration-300 border-2 w-full border-blue-400 z-10 shadow-blue-400/50 text-blue-400 shadow-lg p-2 rounded-xl ${activeGroup === "games" ? "bg-blue-400 text-slate-900" : ""
                  }`}
                onClick={() => setActiveGroup(activeGroup === "games" ? null : "games")}
              >
                Games
              </button>
              <button
                className={`hover:scale-90 hover:opacity-60 duration-300 border-2 w-full border-green-400 shadow-green-400/50 text-green-400 shadow-lg p-2 rounded-xl ${activeGroup === "android" ? "bg-green-400 text-slate-900" : ""
                  }`}
                onClick={() => setActiveGroup(activeGroup === "android" ? null : "android")}
              >
                Android
              </button>
            </div>
            <div id="activegroup" className={`grid h-full text-center ${activeGroup !== null ? "mt-2 mx-5" : "mt-4"} gap-5 ${activeGroup === null ? "mb-0" : ""}`}>
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`border-2 ${project.group === "software" ? "border-red-400 shadow-red-400/50" : project.group === "games" ? "border-blue-400 shadow-blue-400/50" : "border-green-400 shadow-green-400/50"} flex flex-col  bg-neutral-950 shadow-lg rounded-xl p-4 cursor-pointer transition duration-300 ${activeProject && activeProject.id === project.id
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
                      height={1080}
                      width={1920}
                      className="w-full h-auto object-cover border-2 rounded-xl border-slate-400"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <p className="text-slate-400 text-justify">
                    {`${project.description.split('. ')[0]}. ${project.description.split('. ')[1]}...`}
                  </p>
                </div>
              ))
              }
            </div>
          </div>
        }
        {certs && <>
          <div className={`w-full rounded-xl items-center place-items-center bg-neutral-950 relative content-center align-middle border-slate-700 border-2 max-w-3xl p-4 ${certs ? 'mt-11 mb-14' : ''}`}>

            <i onClick={showCerts} className="duration-300 hover:rotate-180 hover:scale-75 fa-solid fa-xmark sm:texr-4xl text-3xl absolute top-1 right-2 cursor-pointer flex text-red-400"></i>
            <div className="mt-3">
              <MyImageGallery />
            </div>
          </div>
        </>
        }
        {/* {!activeGroup && !certs &&
          <div id="contact" name="contact" className="bg-neutral-950 h-[88vh] flex justify-center my-auto items-center max-w-[770px] w-full rounded-xl mb-12 border-slate-700 border-2">
            <Message />
          </div>
        } */}
        {activeProject && (
          <div className="fixed top-0 z-10 flex items-center justify-center w-full max-w-[760px] h-screen bg-neutral-950">
            <div className="max-w-[760px] p-8">
              <h2
                className={`text-3xl underline mt-2 mb-2 sm:text-4xl text-center font-bold ${activeProject.group === "software"
                  ? "text-red-400"
                  : activeProject.group === "games"
                    ? "text-blue-400"
                    : "text-green-400"
                  }`}
              >
                {activeProject.title}
              </h2>
              {isLoading && <Loading />}
              <div className="mb-2 flex justify-center">
                {!isLoading && (
                  <Image
                    height={1080}
                    width={1920}
                    className="sm:w-1/2 h-auto object-cover shadow-md hover:opacity-75 shadow-slate-400/50 rounded-xl hover:shadow-lg hover:shadow-slate-600 border-2 border-slate-400/70 cursor-pointer"
                    src={activeProject.images[activeImageIndex].path}
                    alt={activeProject.images[activeImageIndex].alt}
                    onClick={() =>
                      handleImageClick(activeProject.images[activeImageIndex].path)
                    }
                  />
                )}
                {clickedImage && (
                  <div
                    className="absolute inset-0 z-50 bg-neutral-950 max-w-[800px] left-0 right-0 place-items-center flex flex-col items-center justify-center"
                  >
                    <i onClick={handleClose} className="text-red-400 right-5 absolute top-12 text-3xl hover:scale-75 duration-300 hover:rotate-180 hover:opacity-50 fa-solid fa-xmark"></i>
                    <Image
                      height={1080}
                      width={1920}
                      src={clickedImage}
                      alt="Clicked Image"
                      className="w-full border border-white h-auto"
                    />
                  </div>
                )}
              </div>
              <div className="flex align-middle items-center flex-row gap-5 justify-center">
                <button
                  className="text-blue-400 mr-4 hover:text-green-400 focus:outline-none"
                  onClick={() => {
                    setISLoading(true)
                    setActiveImageIndex((prevIndex) =>
                      (prevIndex - 1 + totalImages) % totalImages,
                    )
                    setISLoading(false)
                  }
                  }
                >
                  <i className="fa-solid fa-caret-left text-3xl"></i>
                </button>
                <p className="text-white align-middle font-medium flex text-center justify-center text-md">
                  (click image to enlarge)
                </p>
                <button
                  className="text-blue-400 ml-4 hover:text-green-400 focus:outline-none"
                  onClick={() => {
                    setISLoading(true)
                    setActiveImageIndex((prevIndex) =>
                      (prevIndex + 1) % totalImages
                    )
                    setISLoading(false)
                  }
                  }
                >
                  <i className="fa-solid fa-caret-right text-3xl"></i>
                </button>
              </div>
              <p className="text-slate-400 text-justify mb-4 text-xl">{activeProject.description}</p>
              <div className="flex align-middle place-items-center w-full flex-row justify-center gap-10">
                <Link className="flex text-2xl justify-center text-green-400 font-bold border-2 border-green-400 shadow-lg shadow-green-400/50 p-2 rounded-xl hover:scale-90 hover:opacity-60 duration-300 py-2" target="_blank" href={activeProject.url}>
                  {activeProject.urlLabel}
                </Link>
                <i
                  className="fa-solid fa-xmark right-5 absolute top-12 text-red-400 hover:opacity-60 mb-5 text-4xl align-middle hover:scale-75 cursor-pointer hover:rotate-180 duration-300 rounded-xl flex justify-center"
                  onClick={closeProject}
                >
                </i>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center" id="footer">
          <Footer /></div>
      </div>
    </div>
  )
}
export default Page
