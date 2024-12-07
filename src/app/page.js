"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion for animations
import bg from "../../public/background/bgn1.jpg";
import myImage from "../../public/background/my.jpg"; // Replace with your image path
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* Background Image */}
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />

        {/* Centered Circular Image with Space-Like Shining Outline */}
        <div className="flex items-center justify-center h-full">
          <motion.div
            whileHover={{
              scale: 1.15,
              boxShadow: `0px 0px 50px 15px rgba(75, 0, 130, 0.6),  /* Indigo */
                0px 0px 100px 30px rgba(0, 0, 255, 0.5),  /* Blue */
                0px 0px 150px 50px rgba(0, 255, 255, 0.4), /* Cyan */
                0px 0px 200px 70px rgba(255, 0, 255, 0.3) /* Magenta */`,
            }}
            whileTap={{
              scale: 1.2,
              boxShadow: `0px 0px 60px 20px rgba(75, 0, 130, 0.8),  /* Brighter Indigo */
                0px 0px 120px 40px rgba(0, 0, 255, 0.7),  /* Brighter Blue */
                0px 0px 180px 60px rgba(0, 255, 255, 0.6), /* Brighter Cyan */
                0px 0px 240px 80px rgba(255, 0, 255, 0.5) /* Brighter Magenta */`,
              transition: { duration: 0.5 },
            }}
            className="relative rounded-full overflow-hidden shadow-lg"
            style={{
              width: "25vw", // Dynamic width
              height: "25vw", // Dynamic height
              minWidth: 250, // Minimum size for small screens
              minHeight: 250, // Minimum size for small screens
              perspective: 1000, // Adds a 3D perspective
              background: "radial-gradient(circle, rgba(75,0,130,0.7), rgba(0,0,255,0.5), rgba(0,255,255,0.4), rgba(255,0,255,0.3))",
              boxShadow: `0px 0px 40px 10px rgba(75, 0, 130, 0.6),  /* Base Indigo */
                0px 0px 80px 20px rgba(0, 0, 255, 0.5),  /* Base Blue */
                0px 0px 120px 40px rgba(0, 255, 255, 0.4), /* Base Cyan */
                0px 0px 160px 60px rgba(255, 0, 255, 0.3) /* Base Magenta */`,
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
                background: "radial-gradient(circle, rgba(75,0,130,0.9), rgba(0,0,255,0.6), rgba(0,255,255,0.5), rgba(255,0,255,0.4))",
                filter: "blur(15px)",
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
              <div className="flex space-x-4">
                <motion.div
                  className="text-white text-2xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <i className="fa fa-facebook"></i> {/* Example icon */}
                </motion.div>
                <motion.div
                  className="text-white text-2xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <i className="fa fa-twitter"></i> {/* Example icon */}
                </motion.div>
                <motion.div
                  className="text-white text-2xl"
                  whileHover={{ scale: 1.2 }}
                >
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
      </div>
    </main>
  );
}
