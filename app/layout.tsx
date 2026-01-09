import type { Metadata } from "next";
import { Figtree, Inter, Roboto } from "next/font/google";
import "./globals.css";
import 'react-tooltip/dist/react-tooltip.css';

import ReduxProvider from "./components/ReduxProvider";
import Footer from "./components/Footer";
import HTML from "./components/HTML";
import BottomNavigation from "./components/BottomNavigation";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const figtree = Figtree({subsets: ["latin"]})

export const metadata: Metadata = {
  title: {
    template: " %s | Fajri Bagja Putra - Personal Website",
    default: "Fajri Bagja Putra - Personal Website",
  },
  description: "I'm passionate about web development and design. Familiar with modern Front End and Back End  framework such as NextJS ( ReactJS ) and Node JS using Javascript or Typescript. Fundamental understanding of mobile first design concepts, API implemetation and search engine optimization (SEO). I'm always eager to take on new challenges and collaborate on exciting projects . Let's connect and explore opportunities together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
    <HTML>
      <body className={`${figtree.className}`}>
        {children}
        <Footer/>
        <BottomNavigation/>
      </body>
    </HTML>
        </ReduxProvider>
  );
}
