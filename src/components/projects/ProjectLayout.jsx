import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

// Define motion-enhanced Link
const ProjectLink = motion(Link);

const ProjectLayout = ({ name, description, date, demoLink, image }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="group flex flex-col md:flex-row items-center justify-between w-full relative rounded-xl overflow-hidden p-6 md:p-8 bg-gray-800 hover:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex-shrink-0">
        <Image
          src={image}
          alt={`${name} preview`}
          width={640} // Adjust the width based on your needs
          height={360} // Adjust the height based on your needs
          className="rounded-lg w-full h-40 md:h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
          priority // Optional: Add priority for faster LCP
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-full px-6 space-y-4 md:space-y-0 max-w-6xl mx-auto">
        <div className="flex flex-col items-start">
          <h2 className="text-foreground text-2xl font-bold group-hover:text-accent transition-colors duration-300">
            {name}
          </h2>
          <p className="text-muted hidden sm:inline-block text-base">
            {description}
          </p>
        </div>
        <div className="self-stretch w-full md:w-auto border-b md:border-none border-dashed border-muted my-4 md:my-0" />
        <p className="text-muted sm:text-foreground text-sm md:text-lg">
          {new Date(date).toDateString()}
        </p>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;
