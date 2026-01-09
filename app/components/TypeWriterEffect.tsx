"use client";
import { Typewriter } from 'react-simple-typewriter'

export default function TypeWriterEffect() {
    return (
        <div className="">
             <Typewriter
            words={['Fajri Bagja Putra', 'Website Developer', 'Digital Marketer']}
            loop={true}
            cursor
            // cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
    )
}