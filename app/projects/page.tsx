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
          <h1 className="text-3xl font-semibold">My Projects</h1>
          <p className="text-justify">
            Discover all my projects i&apos;ve been done
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ProjectCard category="Company Profile"  image="/projects/edunesia_landingpage.png" title="PT Edunesia Insan Cerdas Website Company Profile" linkToProject="https://www.edunesia.net"/>
          <ProjectCard category="AI Tools"  image="/projects/ringkasinai.png" title="Ringkasin AI" linkToProject="https://ringkasinai.vercel.app/"/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
