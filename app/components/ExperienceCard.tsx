import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ExperienceCardProps {
    link?: string
    logo: string
    title: string
    occupation: string
    date: string
    children: React.ReactNode
}

export default function ExperienceCard({link, logo, title, occupation, date, children }: ExperienceCardProps) {
    return (
        <Link rel="nofollow" href={link || ''} target="_blank" className="dark:bg-slate-800 flex flex-col gap-3 p-5 rounded-lg border border-slate-500">
              <div className="flex gap-5">
                <div>
                  <Image className="w-[50px] h-[50px]" src={`/${logo}`} alt="logo" width={400} height={400} />
                </div>
                <div>
                  <h2 className="text-sm font-semibold">{title}</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{occupation}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{date}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-600 line-clamp-5 hover:line-clamp-none dark:text-slate-300">
                  {children}
                </p>
              </div>
            </Link>
    )
}