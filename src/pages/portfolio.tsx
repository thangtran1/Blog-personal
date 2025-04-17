import DefaultLayout from "@/layouts/default";
import {
  FiUser,
  FiBriefcase,
  FiFolder,
  FiSend,
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiHome,
  FiBook,
  FiGrid,
  FiFileText,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { FaCheckCircle } from "react-icons/fa";
import { FaEnvelope, FaFacebook, FaFacebookMessenger } from "react-icons/fa";
const frontendSkillsLeft = [
  "UI/UX",
  "CSS",
  "ReactJS",
  "TailwindCSS",
  "Typescript",
  "NextJS",
];

const backendSkillsLeft = [
  "NodeJS",
  "ExpressJS",
  "RESTful APIs",
  "Authentication (JWT)",
  "MySQL / PostgreSQL",
  "MongoDB / Mongoose",
];

const frontendSkillsRight = [
  "HTML",
  "Javascript",
  "Bootstrap & Ant",
  "SASS",
  "Material UI",
];
const backendSkillsRight = [
  "Sequelize / ORM",
  "Socket.IO",
  "Cloudinary / AWS S3",
  "Redis / Caching",
  "Nginx / Reverse Proxy",
  "Deployment (Render, Vercel)",
];

export default function MyPortfolio() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-white text-2xl" />,
      title: "Email",
      detail: "thangtrandz04@gmail.com",
      link: "mailto:thangtrandz04@gmail.com",
      label: "Send an Email",
    },
    {
      icon: <FaFacebook className="text-white text-2xl" />,
      title: "Facebook",
      detail: "thangtran",
      link: "https://www.facebook.com/share/1Do8bcSUrs/",
      label: "Visit Facebook",
    },
    {
      icon: <FaFacebookMessenger className="text-white text-2xl" />,
      title: "Messenger",
      detail: "thangtran",
      link: "https://www.messenger.com/e2ee/t/25374498102141626/?locale=vi_VN",
      label: "Chat on Messenger",
    },
  ];
  return (
    <DefaultLayout>
      <div className="space-y-12 mb-32 px-6  max-w-7xl mx-auto text-center">
        {/* return scroll */}
        <div className="flex fixed bottom-10 z-50 left-1/2 transform -translate-x-1/2 bg-teal-700 rounded-full py-2 px-6 shadow-lg space-x-6">
          <a
            href="#about"
            className="flex flex-col items-center cursor-pointer text-white hover:bg-teal-800 p-2 rounded-full transition-all duration-300"
          >
            <FiHome className="text-2xl" />
            <span className="text-xs">About</span>
          </a>

          <a
            href="#experience"
            className="flex flex-col items-center cursor-pointer text-white hover:bg-teal-800 p-2 rounded-full transition-all duration-300"
          >
            <FiUser className="text-2xl" />
            <span className="text-xs">Experience</span>
          </a>

          <a
            href="#work"
            className="flex flex-col items-center cursor-pointer text-white hover:bg-teal-800 p-2 rounded-full transition-all duration-300"
          >
            <FiBook className="text-2xl" />
            <span className="text-xs">Work</span>
          </a>

          <a
            href="#contact"
            className="flex flex-col items-center cursor-pointer text-white hover:bg-teal-800 p-2 rounded-full transition-all duration-300"
          >
            <FiGrid className="text-2xl" />
            <span className="text-xs">Contact</span>
          </a>

          <a
            href="#footer"
            className="flex flex-col items-center cursor-pointer text-white hover:bg-teal-800 p-2 rounded-full transition-all duration-300"
          >
            <FiFileText className="text-2xl" />
            <span className="text-xs">Footer</span>
          </a>
        </div>
        {/* infomation */}
        <motion.section
          id="about"
          className="space-y-6 mt-20 px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p>Hello I'm</p>
            <p className="text-2xl font-semibold">Tran Van Thang</p>
            <p>FullStack Developer</p>
          </div>
          <div className="flex gap-4 w-full justify-center">
            <a href="/CV.pdf" download>
              <Button color="primary" variant="bordered">
                Download CV
              </Button>
            </a>
            <Button color="success" className="items-center ">
              <a href="#contact">
                <span className="text-[16px]">Let's Talk</span>
              </a>
            </Button>
          </div>
          <div className="flex w-full items-center justify-center flex-col items-center gap-4">
            <motion.img
              src="/avatar.jpg"
              alt="My Avatar"
              className="w-64 h-64 rounded-full border-4 border-green-400 shadow-lg"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{
                scale: 1.1,
                rotate: 3,
                transition: { type: "spring", stiffness: 300 },
              }}
              transition={{ duration: 0.6 }}
            />

            <h2 className="text-4xl font-extrabold text-white">About Me</h2>
          </div>
        </motion.section>
        {/* About  */}
        <motion.section
          id="experience"
          className="space-y-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-4">
            <FiUser className="w-14 h-14 text-sky-500" />
            <h2 className="text-4xl font-extrabold">About Me</h2>
            <p className="text-gray-600 max-w-2xl">
              Hey there! I'm a web developer with a year of experience in both
              Backend and Frontend development. I’ve had the chance to work on a
              bunch of cool projects, using technologies like Node.js,
              Express.js, React, and MongoDB. I’m passionate about creating
              smooth and user-friendly websites, and I always aim to bring the
              latest tech trends into the mix. If you're looking for a web
              solution that's both efficient and awesome, hit me up by clicking
              the "Let’s Talk" button below. Let’s team up and build something
              amazing together!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left text-sm text-gray-700 max-w-3xl mx-auto">
            <div className="p-6 rounded-lg bg-blue-50 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-lg font-semibold">
                🎮 Game Enthusiast & Coffee Lover
              </h3>
              <p className="mt-2">
                When I'm not coding, you can find me enjoying a good cup of
                coffee or diving into a new video game. I believe that
                creativity flows best with a bit of caffeine and fun!
              </p>
            </div>
            <div className="p-6 rounded-lg bg-purple-50 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-lg font-semibold">
                💻 2+ years of experience
              </h3>
              <p className="mt-2">
                Working as a web developer with hands-on experience in both
                front-end and back-end development.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-yellow-50 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-lg font-semibold">🌎 Remote-friendly</h3>
              <p className="mt-2">
                I can collaborate remotely, anytime, anywhere!
              </p>
            </div>
          </div>
          <Button color="success" className="items-center ">
            <a href="#contact">
              <span className="text-[16px]">Let's Talk</span>
            </a>
          </Button>
        </motion.section>
        {/* Experience */}
        <motion.section
          id="experience"
          className="py-12 px-4 md:px-8  text-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FiBriefcase className="w-14 h-14 mx-auto text-emerald-500 mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-10">
            My Experience
          </h2>

          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 justify-center">
            {/* Frontend Developer */}
            <div className="bg-[#263544] text-white rounded-3xl p-6 md:p-10 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-green-400 text-center mb-6">
                Frontend Developer
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 text-sm sm:text-base">
                {frontendSkillsLeft.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-400" />
                    <span>{skill}</span>
                  </div>
                ))}

                {frontendSkillsRight.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Developer */}
            <div className="bg-[#263544] text-white rounded-3xl p-6 md:p-10 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-green-400 text-center mb-6">
                Backend Developer
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 text-sm sm:text-base">
                {backendSkillsLeft.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-400" />
                    <span>{skill}</span>
                  </div>
                ))}

                {backendSkillsRight.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Work */}
        <motion.section
          id="work"
          className="space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FiFolder className="w-14 h-14 mx-auto text-purple-500" />
          <h2 className="text-4xl font-extrabold">My Recent Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={i}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition cursor-pointer"
              >
                <h3 className="font-semibold text-xl mb-1">Project {i}</h3>
                <p className="text-sm text-gray-500">
                  A modern web app built using latest tech stack including React
                  and Tailwind CSS.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="py-16 px-4 md:px-12 bg-[#375A64] bg-pattern bg-cover"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <FiSend className="w-14 h-14 mx-auto text-yellow-400" />
            <h2 className="text-2xl font-semibold text-white">Get In Touch</h2>
            <h3 className="text-4xl font-bold text-green-300 mt-2">
              Contact Me
            </h3>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-12 max-w-6xl mx-auto">
            <div className="flex flex-col gap-6 w-full md:w-1/3">
              {contactMethods.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#263544] text-white rounded-2xl p-6 space-y-2 shadow-md"
                >
                  <div className="flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm">{item.detail}</div>
                  <a
                    href={item.link}
                    className="text-green-400 text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>

            {/* Right: Form */}
            <form className="w-full md:w-2/3 space-y-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full p-4 bg-transparent border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 text-white placeholder:text-green-200"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-transparent border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 text-white placeholder:text-green-200"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full p-4 bg-transparent border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 text-white placeholder:text-green-200"
              />
              <Button className="bg-green-400 text-white px-6 py-2 hover:bg-green-500 transition rounded-md">
                Send Message
              </Button>
            </form>
          </div>
        </motion.section>
        {/* Footer */}
        <footer className="pt-16 border-t text-gray-400 text-sm">
          <p>© 2025 MyPortfolio. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-lg">
            <a
              href="mailto:your@email.com"
              className="hover:text-gray-600 flex items-center gap-1"
            >
              <FiMail /> Email
            </a>
            <a
              href="tel:+123456789"
              className="hover:text-gray-600 flex items-center gap-1"
            >
              <FiPhone /> Phone
            </a>
            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-600 flex items-center gap-1"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-600 flex items-center gap-1"
            >
              <FiLinkedin /> LinkedInnn
            </a>
          </div>
        </footer>
      </div>
    </DefaultLayout>
  );
}
