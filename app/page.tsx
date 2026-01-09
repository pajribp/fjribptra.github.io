import SocialIcons from "./components/SocialIcons";
import TypeWriterEffect from "./components/TypeWriterEffect";
import ProjectsPagination from "./components/ProjectsPagination";
import ProjectListCards from "./components/ProjectListCards";
import NavBar from "./components/NavBar";
import Image from "next/image";
import HtmlIcon from "./components/icons/HtmlIcon";
import SkillIcon from "./components/SkillIcon";
import CssIcon from "./components/icons/CssIcon";
import JavascriptIcon from "./components/icons/JavascriptIcon";
import TypescriptIcon from "./components/icons/TypescriptIcon";
import TailwindIcon from "./components/icons/TailwindIcon";
import NodejsIcon from "./components/icons/NodejsIcon";
import NextjsIcon from "./components/icons/NextjsIcon";
import ReactIcon from "./components/icons/ReactIcon";
import LaravelIcon from "./components/icons/LaravelIcon";
import PhpIcon from "./components/icons/PhpIcon";
import CodeigniterIcon from "./components/icons/CodeigniterIcon";
import VuejsIcon from "./components/icons/VuejsIcon";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import GitIcon from "./components/icons/GitIcon";
import Marquee from "react-fast-marquee";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaTiktok  } from "react-icons/fa";
import SocialCard from "./components/SocialCard";
import GitHubCalendar from "react-github-calendar";
import { GoGitPullRequestDraft } from "react-icons/go";
import Subheading from "./components/Subheading";
import { IsDarkMode } from "./functions/isDarkMode";
import GitHubContributionStats from "./components/GitHubContributionStats";

export default function Home() {
  return (
    <main className="dark:bg-gray-950 dark:text-white">
      {/* <NavBar/> */}
      <div className="max-w-4xl mx-auto pt-16 flex flex-col gap-5 p-3">
        <div className="flex justify-start items-center gap-5">
          {/* <Image className="rounded-full w-[100px] h-[100px]" src={`/pajri.jpeg`} alt='' width={400} height={400} /> */}
          {/* <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl">Fajri Bagja Putra</h1>
            <h2 className="bg-purple-200 dark:bg-blue-700 w-fit">Fullstack Web Developer</h2>
          </div> */}
          <h1 className="flex flex-col gap-3 text-3xl font-semibold">
            <p className="flex gap-2">Hi, I&apos;m <TypeWriterEffect /></p>
            <div className="flex gap-2 text-sm">
              <Link className="text-blue-500" href="https://www.linkedin.com/in/fjribptra" target="_blank"><FaLinkedin /></Link>
              <Link className="text-fuchsia-500" href="https://instagram.com/pajribp" target="_blank"><FaInstagram /></Link>
              <Link className="text-red-600" href="https://www.youtube.com/@pajribp" target="_blank"><FaYoutube /></Link>
              <Link className="text-black dark:text-white" href="https://www.tiktok.com/@pajribp" target="_blank"><FaTiktok /></Link>
              <Link className="text-black dark:text-white" href="https://github.com/pajribp" target="_blank"><FaGithub /></Link>
            </div>
          </h1>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <p className="text-justify">I&apos;m passionate about web development and design. Familiar with modern Front End and Back End framework such as NextJS ( ReactJS ) and Node JS using Javascript or Typescript.</p>
          <p className="text-justify">Fundamental understanding of mobile first design concepts, API implemetation and search engine optimization (SEO).</p>
          <p className="text-justify">I&apos;m always eager to take on new challenges and collaborate on exciting projects . Let&apos;s connect and explore opportunities together.</p>
        </div>
        {/* <SocialIcons /> */}
        {/* <Subheading title="Discover me"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SocialCard title="Linkedin" description="Connect for collaboration or explore my profesional experience" buttonColor="bg-blue-500" iconColor="text-blue-500" linkTo="https://www.linkedin.com/in/fjribptra">
            <FaLinkedin />
          </SocialCard>
          <SocialCard title="Github" description="Explore the source code for all my projects on GitHub" buttonColor="bg-black" iconColor="text-black" linkTo="https://github.com/fjribptra">
            <FaGithub />
          </SocialCard>
          <SocialCard title="Instagram" description="More to know about me. one post at a time" buttonColor="bg-fuchsia-500" iconColor="text-fuchsia-500" linkTo="https://instagram.com/pajribp">
            <FaInstagram />
          </SocialCard>
          <SocialCard title="Youtube" description="Discover web dev secrets and elevate your coding skills with me" buttonColor="bg-red-600" iconColor="text-red-600" linkTo="https://www.youtube.com/@pajribp">
            <FaYoutube />
          </SocialCard>
        </div> */}
        <div>
          {/* <Image className="w-full" src="/free-web-templates.png" alt="free web templates" width={1500} height={1500}/>
          </Link> */}
        </div>
        <div className="">
          {/* <h2 className="p-5 flex justify-center items-center uppercase">Project</h2> */}
          {/* <ProjectsPagination />
          <div className="container bg-slate-100 dark:bg-slate-950 text-black mx-auto flex flex-col gap-7 justify-center items-center p-3 md:p-3">
            <ProjectListCards />
          </div> */}
        </div>
        
        <div className="flex flex-col gap-5">
          <Subheading title="Contributions" description="Github contribution and activities statistics">
          <GoGitPullRequestDraft />
          </Subheading>
          <GitHubContributionStats/>
        </div>
      </div>
      {/* Projects Paginaiton Start */}
      {/* <ProjectPagination/> */}
      {/* Projects Pagination End */}

      {/* Projects List Start */}
      {/* <div className=" bg-blue-500 ">
      <div className="container mx-auto flex flex-col gap-7 justify-center items-center p-5 md:grid md:grid-cols-2 lg:grid-cols-3">
     <ProjectListCards/>
      </div>
     </div> */}
      {/* Projects List End */}
      {/* <Link href="https://wa.me/628886166753" className="fixed bottom-2 right-2 md:bottom-5 md:right-5 flex gap-3 justify-center items-center bg-white rounded-full p-2">
        <Image src="/whatsapp-logo.png" alt="whatsapp logo" width={30} height={30} />
        <h2>Interested to work together?</h2>
      </Link> */}
    </main>
  );
}
