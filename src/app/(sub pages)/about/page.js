"use client";

import Image from "next/image";
import bg from "../../../../public/background/nbg.jpg"; // Background Image
import myImage from "../../../../public/background/my.jpg"; // Replace with your image path
import AboutDetails from "@/components/about";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Background Image */}
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-60"
      />

      {/* Content Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center z-10">
        {/* Main Content */}
        <main className="flex min-h-screen flex-col items-center justify-between relative">
          <div className="w-full h-screen flex items-center justify-center">
            {/* Centered Circular Image with Shining White Outline */}
            <motion.div
              whileHover={{
                scale: 1.15,
                boxShadow: `0px 0px 50px 15px rgba(255, 255, 255, 0.8)`,
              }}
              whileTap={{
                scale: 1.2,
                boxShadow: `0px 0px 60px 20px rgba(255, 255, 255, 1)`,
                transition: { duration: 0.5 },
              }}
              className="relative rounded-full overflow-hidden shadow-lg"
              style={{
                width: "25vw", // Dynamic width
                height: "25vw", // Dynamic height
                minWidth: 250, // Minimum size for small screens
                minHeight: 250, // Minimum size for small screens
                background: "radial-gradient(circle, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))",
                boxShadow: `0px 0px 40px 10px rgba(255, 255, 255, 0.6)`, // Shining white glow
                zIndex: 1, // Make sure it's above background elements
              }}
            >
              {/* Animated Border Effect */}
              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  filter: "blur(8px)",
                  zIndex: -1,
                }}
              />
              {/* Rotating Icons */}
              <motion.div
                animate={{
                  rotate: [0, 360], // Rotation effect on icons
                }}
                transition={{
                  repeat: Infinity,
                  duration: 10, // Controls the speed of rotation
                  ease: "linear",
                }}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  zIndex: 2, // Keep icons on top of the background
                }}
              >
                {/* Replace with your actual icons */}
                <div className="flex space-x-4 text-white">
                  <motion.div className="text-2xl" whileHover={{ scale: 1.2 }}>
                    <i className="fa fa-facebook"></i> {/* Example icon */}
                  </motion.div>
                  <motion.div className="text-2xl" whileHover={{ scale: 1.2 }}>
                    <i className="fa fa-twitter"></i> {/* Example icon */}
                  </motion.div>
                  <motion.div className="text-2xl" whileHover={{ scale: 1.2 }}>
                    <i className="fa fa-instagram"></i> {/* Example icon */}
                  </motion.div>
                </div>
              </motion.div>

              {/* Image */}
              <Image
                src={myImage}
                alt="My Image"
                width={500}
                height={500}
                className="object-cover w-full h-full relative"
              />
            </motion.div>
          </div>

          {/* About Text Section */}
          <div className="mt-12 text-center max-w-3xl mx-auto text-white p-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Me</h2>
            <p className="text-lg md:text-xl">
              I&#39;m a passionate web developer and designer, focusing on creating beautiful and functional websites. I love experimenting with cutting-edge technologies and crafting unique user experiences.
            </p>
          </div>
        </main>
      </div>

      {/* About Details Section */}
      <div className="relative z-20 mt-20">
        <AboutDetails />
      </div>
    </>
  );
}
