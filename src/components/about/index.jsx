"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      className={`p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:scale-105 transition-transform duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const AboutDetails = () => {
  return (
    <section className="relative py-20 w-full bg-gray-900 text-white overflow-hidden">
      {/* Star Background Animation */}
      <div className="absolute inset-0 z-[-1]">
        <div className="stars absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat animate-pulse"></div>
      </div>

      {/* Comet Animation */}
      <div className="absolute inset-0 z-[-2]">
        <div className="comet absolute animate-comet"></div>
      </div>

      <motion.div
        className="col-span-full text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-4xl sm:text-5xl font-bold animate-bounce">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Pasindu Maduranga
          </span>
        </h3>
      </motion.div>

      <div className="container mx-auto grid grid-cols-12 gap-8">
        <ItemLayout className="col-span-full lg:col-span-8 flex-col items-start space-y-4">
          <h2 className="text-3xl font-bold w-full text-left capitalize">
            Relentless Innovator
          </h2>
          <p className="font-light text-sm sm:text-base leading-relaxed">
            Hi Im Pasindu a 22-year-old undergraduate at SLIIT driven by an
            unquenchable thirst for knowledge and an unwavering commitment to
            personal and professional growth. With a natural ability to learn
            fast and adapt to new challenges I thrive in dynamic environments
            where creativity meets problem-solving As a passionate learner and
            developer I constantly push boundaries to refine my skills in web
            development software engineering, and UI/UX design. My journey is
            fueled by a love for innovation, coupled with a motivational
            mindset that empowers me to overcome obstacles and achieve
            excellence. Lets build the future together!
          </p>
        </ItemLayout>

        {/* Projects and Experience in one row */}
        <div className="col-span-full lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ItemLayout className="flex-col items-center">
            <p className="text-4xl font-semibold">
              15+ <span className="text-sm font-light">Projects</span>
            </p>
          </ItemLayout>
          <ItemLayout className="flex-col items-center">
            <p className="text-4xl font-semibold">
              2+ <span className="text-sm font-light">Years of Experience</span>
            </p>
          </ItemLayout>
        </div>

        {/* Most Used Languages and GitHub Stats in one row */}
        <div className="col-span-full lg:col-span-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ItemLayout className="flex-col items-center">
            <motion.img
              className="w-full h-auto rounded-lg"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=darkEmpire-lang&show_icons=true&theme=highcontrast"
              alt="Top Languages"
              loading="lazy"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
          </ItemLayout>
          <ItemLayout className="flex-col items-center">
            <motion.img
              className="w-full h-auto rounded-lg"
              src="https://github-readme-stats.vercel.app/api?username=darkEmpire-lang&show_icons=true&theme=highcontrast"
              alt="GitHub Stats"
              loading="lazy"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
          </ItemLayout>
        </div>

        {/* Skills */}
        <ItemLayout className="col-span-full">
          <motion.img
            className="w-full h-auto rounded-lg"
            src={`https://skillicons.dev/icons?i=java,kotlin,php,r,bootstrap,css,figma,git,github,html,js,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,tailwind,vercel,vite,vscode`}
            alt="Skills"
            loading="lazy"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
        </ItemLayout>

        {/* GitHub Streak */}
        <ItemLayout className="col-span-6 !p-0">
          <motion.a
            href="https://git.io/streak-stats"
            initial={{ rotate: -3 }}
            whileHover={{ rotate: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=darkEmpire-lang&theme=highcontrast&border=EB5454&ring=EBDD24"
              alt="GitHub Streak"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.a>
        </ItemLayout>

        {/* E-Commerce Project */}
        <ItemLayout className="col-span-6 !p-0">
          <Link
            href="https://github.com/darkEmpire-lang/E-Commerce-Shopping-App.git"
            target="_blank"
          >
            <motion.img
              className="w-full h-auto rounded-lg"
              src="https://github-readme-stats.vercel.app/api/pin/?username=darkEmpire-lang&repo=E-Commerce-Shopping-App&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=5"
              alt="E-Commerce Project"
              loading="lazy"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </ItemLayout>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        .stars {
          background-image: url("https://www.transparenttextures.com/patterns/stardust.png");
          animation: moveStars 20s linear infinite;
        }

        @keyframes moveStars {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        .comet {
          width: 10px;
          height: 10px;
          background-color: #fff;
          border-radius: 50%;
          animation: moveComet 5s linear infinite;
        }

        @keyframes moveComet {
          0% {
            transform: translateX(-100px) translateY(-100px);
            opacity: 1;
          }
          50% {
            transform: translateX(100vw) translateY(100vh);
            opacity: 0.5;
          }
          100% {
            transform: translateX(-100px) translateY(-100px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutDetails;
