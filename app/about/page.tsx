import React from "react";
import Skills from "../components/Skills";
import { LuLeaf } from "react-icons/lu";
import Image from "next/image";
import Subheading from "../components/Subheading";
import Link from "next/link";
import { Metadata } from "next";
import { MdOutlineFileDownload } from "react-icons/md";
import ExperienceCard from "../components/ExperienceCard";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <>
      <main className="dark:bg-gray-950 dark:text-white">
        <div className="max-w-4xl mx-auto pt-16 flex flex-col gap-5 p-3">
          <h1 className="text-3xl font-semibold">About me</h1>
          <p className="text-justify">
            I&apos;m <strong>Fajri</strong> Bagja Putra. A graduate of SMKN 2 Cikarang Barat, majoring in Computer and Network Engineering, class of 2025. I&apos;m passionate about web development and design. Familiar with modern Front End and Back End framework such as NextJS ( ReactJS ) and Node JS using Javascript or Typescript. Fundamental
            understanding of mobile first design concepts, API implemetation and search engine optimization (SEO). I&apos;m always eager to take on new challenges and collaborate on exciting projects.
          </p>
          <Skills />
          <div className="flex justify-between items-center">
            <Subheading title="Careers" description="My professional work journey">
              <LuLeaf />
            </Subheading>
            <Link className="px-3 py-1 border border-black dark:border-white rounded-lg flex justify-center items-center gap-1 text-sm" href={"/file/cv.pdf"} target="_blank">
              <MdOutlineFileDownload />
              <p className="text-xs">Download Resume</p>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* <ExperienceCard link="https://www.coredigisolutions.com" title="Coredigi Solutions" occupation="Frontend Developer - Part Time" date="May 2025 - Current" logo="coredigi-solutions.png">
                Coredigi is a digital micro-agency helping businesses grow their business online.  We deliver solutions for your business grow with your goals in mind. we help you look professional and get more clients online.
            </ExperienceCard>
            <ExperienceCard  title="Freelance - India" occupation="Fullstack Developer - Freelance" date="May 2025 - Jun 2025" logo="freelance.png">
            Building mini app telegram using React.js, Typescript, TailwindCSS, ExpressJs, Implementig realtime event with Websocket. Collaborate with other freelancer with github
            </ExperienceCard> */}
            <ExperienceCard link="https://www.valdoinc.com" title="PT Valdo Sumber Daya Mandiri" occupation="Logistic Picker - Part Time" date="Aug 2025 - now" logo="valdo_logo.webp">
            At Valdo Inc., we specialize in reengineering and managing business processes, utilizing cutting-edge technology as a catalyst to boost efficiency. Our strategic approach is focused on maximizing revenue, reducing costs, and mitigating risks, enabling your business to thrive in today’s competitive landscape. Partner with us for unparalleled service and accelerate your business towards unprecedented success.
            </ExperienceCard>
            <ExperienceCard link="https://bas-indonesia.id" title="PT Barokah Amanah Sentosa" occupation="Logistic Checker - Part Time" date="Jul 2025 - now" logo="bas_logo.jpeg">
              BAS adalah perusahaan jasa / outsourcing yang memiliki line of business dalam bidang Recruitment, HR Management & Training. Kami membantu perusahaan dalam mengoptimalkan proses rekrutmen beserta administrasinya sehingga perusahaan Anda dapat fokus pada pengembangan SDM untuk peningkatan produktivitas.
            </ExperienceCard>
            <ExperienceCard link="https://www.edunesia.net" title="PT Edunesia Insan Cerdas" occupation="Frontend Developer - Internship" date="Des 2023 - Jun 2024" logo="edunesia_logo.jpeg">
            Edunesia is an educational platform that serves as a home for formal and non-formal institutions, catering to students, university students, and the entire Indonesian community, enabling them to utilize digital or
                  interactive online learning to enhance their knowladge, skills, and educational levels, thereby contributing towards building a smarter and more superior nation
            </ExperienceCard>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
