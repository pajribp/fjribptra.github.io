"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LuTreePine } from "react-icons/lu";
import { Tooltip } from "react-tooltip";
import { LuAxe  } from "react-icons/lu";
import LightDarkToggle from './LightDarkToggle';
import { GoDownload } from 'react-icons/go';
import { IoMdArchive } from "react-icons/io";

gsap.registerPlugin(useGSAP);


const BottomNavigation = () => {
  const containerRef = useRef();
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  useGSAP(
    () => {
        // gsap code here...
        gsap.from('.nav-container', { 
          y: 100, 
          duration: 1 ,
          scrollTrigger: {
            trigger: ".nav-container",
            scroller: "body",
            markers: true,
            scrub: 2
          }
        }); // <-- automatically reverted
    },
    
);

  return (
    <div ref={containerRef.current}>
      <nav className="nav-container fixed bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 left-0 right-0 mx-auto bg-slate-50 p-1.5 sm:p-2 md:p-2.5 lg:p-3 border w-fit max-w-[calc(100vw-1rem)] sm:max-w-none flex justify-center items-center gap-1 sm:gap-2 md:gap-3 lg:gap-5 rounded-md sm:rounded-lg overflow-x-auto">
        <Link className={`text-sm sm:text-base md:text-lg border p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md sm:rounded-lg border-slate-300 hover:bg-red-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${isActive("/") ? 'bg-red-200' : ''}`} href="/" data-tooltip-id="my-tooltip" data-tooltip-content="Home">
          <IoHomeOutline />
        </Link>
        <Link className={`text-sm sm:text-base md:text-lg border p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md sm:rounded-lg border-slate-300 hover:bg-green-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${isActive("/about") ? 'bg-green-200' : ''}`} href="/about" data-tooltip-id="my-tooltip" data-tooltip-content="About">
          <LuTreePine />
        </Link>
        <Link className={`text-sm sm:text-base md:text-lg border p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md sm:rounded-lg border-slate-300 hover:bg-green-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${isActive("/projects") ? 'bg-green-200' : ''}`} href="/projects" data-tooltip-id="my-tooltip" data-tooltip-content="Projects">
          <LuAxe  />
        </Link>
        <Link className={`text-sm sm:text-base md:text-lg border p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md sm:rounded-lg border-slate-300 hover:bg-green-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${isActive("/archive") ? 'bg-green-200' : ''}`} href="/archive" data-tooltip-id="my-tooltip" data-tooltip-content="Archive">
          <IoMdArchive />
        </Link>
        <Link className={`text-sm sm:text-base md:text-lg border p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md sm:rounded-lg border-slate-300 hover:bg-blue-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center`} href="#" data-tooltip-id="my-tooltip" data-tooltip-content="Donwload Resume" target='_blank'>
        <GoDownload />
        </Link>
        {/* <button className="text-2xl border p-4 rounded-lg border-slate-300" data-tooltip-id="my-tooltip" data-tooltip-content="Toggle Theme">
          <MdOutlineWbSunny />
        </button> */}
        <LightDarkToggle className={'text-sm sm:text-base md:text-lg border p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md sm:rounded-lg border-slate-300 min-w-[44px] min-h-[44px] flex items-center justify-center'}/>
        <Tooltip id="my-tooltip" />
      </nav>
    </div>
  );
};

export default BottomNavigation;
