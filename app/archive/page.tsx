import React from "react";
import Skills from "../components/Skills";
import { LuLeaf } from "react-icons/lu";
import Image from "next/image";
import Subheading from "../components/Subheading";
import Link from "next/link";
import { Metadata } from "next";
import { MdOutlineFileDownload } from "react-icons/md";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
};

const Projects = () => {
  return (
    <>
      <main className="dark:bg-gray-950 dark:text-white">
        <div className="max-w-4xl mx-auto pt-16 flex flex-col gap-5 p-3">
          <h1 className="text-3xl font-semibold">Archive</h1>
          <p className="text-justify">
            Discover all my projects i&apos;ve been done
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ProjectCard category="Archive"  image="/archive/qrgenerator.png" title="Qr Generator" linkToProject="https://pajribp.github.io/qr-generator/"/>
          <ProjectCard category="Archive"  image="/archive/filedownloader.png" title="File Downloader" linkToProject="https://pajribp.github.io/file-downloader/"/>
          <ProjectCard category="Archive"  image="/archive/passwordgenerator.png" title="Random Password Generator" linkToProject="https://pajribp.github.io/password-generator/"/>
          <ProjectCard category="Archive"  image="/archive/noteapp.png" title="Note app" linkToProject="https://pajribp.github.io/note-app/"/>
          <ProjectCard category="Archive"  image="/archive/counter.png" title="Counter" linkToProject="https://pajribp.github.io/js-counter/"/>
          <ProjectCard category="Archive"  image="/archive/qrscanner.png" title="Qr Scanner" linkToProject="https://pajribp.github.io/qr-scanner/"/>
          <ProjectCard category="Archive"  image="/archive/todolist.png" title="To Do List" linkToProject="https://pajribp.github.io/to-do-list/"/>
          <ProjectCard category="Archive"  image="/archive/drawingapp.png" title="Drawing web" linkToProject="https://pajribp.github.io/drawing-app/"/>
          <ProjectCard category="Archive"  image="/archive/colorslider.png" title="RGB Slider" linkToProject="https://pajribp.github.io/rgb-slider"/>
          <ProjectCard category="Archive"  image="/archive/backgroundchanger.png" title="Background Changer" linkToProject="https://pajribp.github.io/rgb/"/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
