"use client"
// pages/index.tsx
import React, { useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  Mail,
  MapPin,
  Code,
  Layout,
  Layers,
  Box,
  Feather,
  Zap,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Notification from "@/components/nav/notification"
const Home: NextPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // useScroll on container so parallax is relative to hero viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms: small movements -> tuned to match reference feel
  const leftTagX = useTransform(scrollYProgress, [0, 1], [0, 18]); // move right slightly
  const leftTagY = useTransform(scrollYProgress, [0, 1], [0, -10]); // move up slightly
  const rightTagX = useTransform(scrollYProgress, [0, 1], [0, -18]); // move left slightly
  const rightTagY = useTransform(scrollYProgress, [0, 1], [0, -10]); // move up slightly

  // Entrance animation variants for title and avatar
  const entrance = {
    hidden: { opacity: 0, scale: 0.95, y: 12 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  // Bottom marquee icons list
  const icons: React.ReactElement<SVGSVGElement>[] = [
    <Code key="code" size={20} />,
    <Layout key="layout" size={20} />,
    <Layers key="layers" size={20} />,
    <Mail key="mail" size={20} />,
    <MapPin key="map" size={20} />,
    <Feather key="feather" size={20} />,
    <Zap key="zap" size={20} />,
    <Box key="box" size={20} />,
  ];

  return (
    <>
      <Head>
        <title>Chandan — Portfolio Hero</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Notification />
      <main className=" bg-[#181A1B] flex items-center justify-center p-6">
        <div
          ref={containerRef}
          className="w-full mx-auto "
          aria-hidden={false}
        >
          {/* Glassmorphic panel */}
          <div className="relative backdrop-blur-md rounded-3xl shadow-lg p-6 md:p-10 h-screen overflow-hidden">
            {/* subtle outer padding shadow effect */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none -z-10" />


            {/* HERO CONTENT */}
            <div className="relative min-h-[62vh] flex flex-col items-center justify-center">
              {/* Left parallax tag (Web Designer) */}
              <motion.div
                style={{ x: leftTagX, y: leftTagY }}
                className="absolute left-16 top-1/3 hidden sm:flex items-center"
              >
                <div className="flex items-center gap-2">
                  {/* bubble */}
                  <div
                    className="relative bg-[#FF4D00] text-black px-4 py-2 rounded-lg font-medium shadow-sm text-sm"
                    style={{ minWidth: 110 }}
                  >
                    Web Designer
                  </div>
                  {/* arrow (small triangle) */}
                  <div className="w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      fill="#FF4D00"
                      width="100%"
                      height="100%"
                      style={{ display: "inline-block", flexShrink: 0 }}
                    >
                      <g>
                        <path d="M240,113.58a15.76,15.76,0,0,1-11.29,15l-76.56,23.56-23.56,76.56a15.77,15.77,0,0,1-15,11.29h-.3a15.77,15.77,0,0,1-15.07-10.67L33,53.41a1,1,0,0,1-.05-.16A16,16,0,0,1,53.25,32.9l.16.05L229.33,98.21A15.78,15.78,0,0,1,240,113.58Z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Right parallax tag (Hi, I&apos;m Chandan) */}
              <motion.div
                style={{ x: rightTagX, y: rightTagY }}
                className="absolute right-16 top-28 hidden sm:flex items-center"
              >
                <div className="flex items-center gap-2">
                  {/* arrow (pointing left) */}
                  <div
                    className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-300"
                    style={{ transform: "translateY(-4px) rotate(166deg)" }}
                  />
                  <div className="relative bg-gray-200/80 text-gray-900 px-3 py-2 rounded-md text-sm shadow-sm">
                    Hi, I&apos;m Chandan
                  </div>
                </div>
              </motion.div>

              {/* center avatar */}
              <motion.div
                variants={entrance}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.18 }}
                className="z-10 mb-6"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-neutral-900/60 rounded-xl flex items-center justify-center shadow-2xl border border-neutral-700">
                  {/* emoji avatar - keep as an accessible image fallback */}
                  <span
                    role="img"
                    aria-label="avatar"
                    className="text-4xl md:text-5xl select-none"
                  >
                    👋🏾
                  </span>
                </div>
              </motion.div>

              {/* MAIN TITLES */}
              <motion.div
                variants={entrance}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.28 }}
                className="text-center px-4"
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-100">
                  Digital <span className="text-white">Designer</span>
                </h1>
                <p className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
                  and <span className="text-gray-100">Creative Developer</span>
                </p>
              </motion.div>

              {/* contact & location */}
              <div className="mt-8 text-center text-gray-400 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <Mail size={16} className="text-gray-400" />
                  <span className="text-gray-300">info@omardesign.me</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-gray-300">London UK / Remote</span>
                </div>
              </div>

              {/* bottom icons marquee */}
              <div className="absolute left-0 right-0 bottom-6 flex items-center justify-center">
                <div className="w-full max-w-3xl overflow-hidden">
                  {/* Motion marquee container: duplicate icons for smooth loop */}
                  <motion.div
                    className="flex gap-8 items-center py-3"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        duration: 18,
                        ease: "linear",
                      },
                    }}
                    style={{ width: "200%" }}
                  >
                    {/* first copy */}
                    <div className="flex gap-8 items-center px-4">
                      {icons.map((icon, i) => (
                        <div
                          key={`icon1-${i}`}
                          className="opacity-60 hover:opacity-100 transition text-gray-400"
                        >
                          {React.cloneElement(icon)}
                        </div>
                      ))}
                    </div>

                    {/* second copy (for infinite smooth loop) */}
                    <div className="flex gap-8 items-center px-4">
                      {icons.map((icon, i) => (
                        <div
                          key={`icon2-${i}`}
                          className="opacity-60 hover:opacity-100 transition text-gray-400"
                        >
                          {React.cloneElement(icon)}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* rounded border inset to mimic inner panel edges */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-black/20" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
