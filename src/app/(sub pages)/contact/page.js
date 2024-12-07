import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import bg from "../../../../public/background/nbg.jpg";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      {/* Background Image */}
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      {/* Main Content */}
      <article className="relative w-full min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 space-y-8 bg-gradient-to-t from-gray-900 via-transparent to-gray-900">
        {/* Heading and Description */}
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4 px-4 text-white">
          <h1 className="text-accent font-bold text-center text-4xl sm:text-5xl capitalize">
            Get in Touch With Me
          </h1>
          <p className="text-center font-light text-sm sm:text-base max-w-2xl">
          I'm always open to new opportunities, collaborations, and conversations! Whether you have a question, feedback, or just want to connect, feel free to reach out. I’m here to help and would love to hear from you. Use the form below to send your message, and I'll get back to you as soon as possible!


          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-6 text-white mb-8">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-transform transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-transform transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-transform transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-transform transform hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebook size={30} />
          </a>
        </div>

        {/* Contact Form */}
        <div className="w-full sm:w-3/4 md:w-1/2 px-4 flex justify-center">
          <Form />
        </div>
      </article>
    </>
  );
}
