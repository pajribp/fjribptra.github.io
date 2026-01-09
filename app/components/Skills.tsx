import React from "react";
import Marquee from "react-fast-marquee";
import SkillIcon from "./SkillIcon";
import HtmlIcon from "./icons/HtmlIcon";
import CssIcon from "./icons/CssIcon";
import JavascriptIcon from "./icons/JavascriptIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import TailwindIcon from "./icons/TailwindIcon";
import NodejsIcon from "./icons/NodejsIcon";
import ReactIcon from "./icons/ReactIcon";
import NextjsIcon from "./icons/NextjsIcon";
import GitIcon from "./icons/GitIcon";
import PhpIcon from "./icons/PhpIcon";
import LaravelIcon from "./icons/LaravelIcon";
import CodeigniterIcon from "./icons/CodeigniterIcon";
import VuejsIcon from "./icons/VuejsIcon";
import { GoCopy } from "react-icons/go";
import ExpressIcon from "./icons/ExpressIcon";
import DockerIcon from "./icons/DockerIcon";
import MongodbIcon from "./icons/MongodbIcon";
import Subheading from "./Subheading";
import LinuxIcon from "./icons/LinuxIcon";
import { TbSeo } from "react-icons/tb";

const Skills = () => {
  return (
    <section className="flex flex-col gap-5">
      <Subheading title="Skills" description="My stack / skill list i'm currently using">
        <GoCopy />
      </Subheading>
      <div className="flex gap-5 flex-wrap">
        <Marquee>
          <SkillIcon title="HTML">
            <HtmlIcon />
          </SkillIcon>
          <SkillIcon title="CSS">
            <CssIcon />
          </SkillIcon>
          <SkillIcon title="JAVASCRIPT">
            <JavascriptIcon />
          </SkillIcon>
          <SkillIcon title="TYPESCRIPT">
            <TypescriptIcon />
          </SkillIcon>
          <SkillIcon title="TAILWINDCSS">
            <TailwindIcon />
          </SkillIcon>
          <SkillIcon title="NODE.JS">
            <NodejsIcon />
          </SkillIcon>
          <SkillIcon title="SEARCH ENGINE OPTIMIZATION">
            <TbSeo />
          </SkillIcon>
        </Marquee>
        <Marquee direction="right">
          <SkillIcon title="REACT JS">
            <ReactIcon />
          </SkillIcon>
          <SkillIcon title="NEXT JS">
            <NextjsIcon />
          </SkillIcon>
          <SkillIcon title="GIT">
            <GitIcon />
          </SkillIcon>
          {/* <SkillIcon title="LARAVEL">
            <LaravelIcon />
          </SkillIcon> */}
          {/* <SkillIcon title="CODEIGNITER">
            <CodeigniterIcon />
          </SkillIcon> */}
          <SkillIcon title="DOCKER">
            <DockerIcon />
          </SkillIcon>
          <SkillIcon title="EXPRESS">
            <ExpressIcon />
          </SkillIcon>
          <SkillIcon title="VUE JS">
            <VuejsIcon />
          </SkillIcon>
          <SkillIcon title="MONGODB">
            <MongodbIcon />
          </SkillIcon>
          <SkillIcon title="LINUX">
            <LinuxIcon/>
          </SkillIcon>
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
