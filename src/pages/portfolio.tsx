import {
  FiUser,
  FiBriefcase,
  FiSend,
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiHome,
  FiBook,
  FiGrid,
  FiFileText
} from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Button } from '@heroui/button'
import { FaCheckCircle } from 'react-icons/fa'
import { FaEnvelope, FaFacebook, FaFacebookMessenger } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { toast } from 'react-toastify'

import DefaultLayout from '@/layouts/default'
import {
  backendSkillsLeft,
  backendSkillsRight,
  frontendSkillsLeft,
  frontendSkillsRight,
  portfolioItems
} from './data'

export default function MyPortfolio() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-white text-2xl" />,
      title: 'Github',
      detail: 'thangtran1',
      link: 'https://github.com/thangtran1',
      label: 'Send an Github'
    },
    {
      icon: <FaFacebook className="text-white text-2xl" />,
      title: 'Facebook',
      detail: 'thangtran',
      link: 'https://www.facebook.com/share/1Do8bcSUrs/',
      label: 'Visit Facebook'
    },
    {
      icon: <FaFacebookMessenger className="text-white text-2xl" />,
      title: 'Messenger',
      detail: 'thangtran',
      link: 'https://www.messenger.com/e2ee/t/25374498102141626/?locale=vi_VN',
      label: 'Chat on Messenger'
    }
  ]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let formErrors = { ...errors }
    let isValid = true

    if (!formData.name) {
      formErrors.name = 'Name is required'
      isValid = false
    }
    if (!formData.email) {
      formErrors.email = 'Email is required'
      isValid = false
    }
    if (!formData.message) {
      formErrors.message = 'Message is required'
      isValid = false
    }

    setErrors(formErrors)

    if (!isValid) return

    setIsSubmitting(true)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          setIsSubmitting(false)
          setFormData({ name: '', email: '', message: '' })
          toast.success('Message sent successfully!')
        },
        () => {
          setIsSubmitting(false)
          toast.error('Something went wrong, please try again later.')
        }
      )
  }

  return (
    <DefaultLayout>
      <div className="space-y-12 mb-32 px-6  max-w-7xl mx-auto text-center">
        <div className="flex fixed bottom-10 z-50 left-1/2 transform -translate-x-1/2 bg-teal-700 rounded-full shadow-lg">
          <div className="p-1 flex gap-5">
            <a
              className="flex flex-col items-center cursor-pointer text-white hover:bg-teal-800 p-2 rounded-full transition-all duration-300"
              href="#about"
            >
              <FiHome className="text-2xl" />
              <span className="text-xs">About</span>
            </a>

            <a
              className="flex flex-col items-center cursor-pointer text-white hover:bg-teal-800 p-2 rounded-full transition-all duration-300"
              href="#experience"
            >
              <FiUser className="text-2xl" />
              <span className="text-xs">Experience</span>
            </a>

            <a
              className="flex flex-col items-center cursor-pointer text-white hover:bg-teal-800 p-2 rounded-full transition-all duration-300"
              href="#portfolio"
            >
              <FiBook className="text-2xl" />
              <span className="text-xs">Work</span>
            </a>

            <a
              className="flex flex-col items-center cursor-pointer text-white hover:bg-teal-800 p-2 rounded-full transition-all duration-300"
              href="#contact"
            >
              <FiGrid className="text-2xl" />
              <span className="text-xs">Contact</span>
            </a>

            <a
              className="flex flex-col items-center cursor-pointer text-white hover:bg-teal-800 p-2 rounded-full transition-all duration-300"
              href="#footer"
            >
              <FiFileText className="text-2xl" />
              <span className="text-xs">Footer</span>
            </a>
          </div>
        </div>
        <motion.section
          className="mt-20 px-6 space-y-6"
          id="about"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>
            <p>Hello I&apos;m</p>
            <p className="text-2xl font-semibold">Tran Van Thang</p>
            <p>FullStack Developer</p>
          </div>
          <div className="flex gap-4 w-full justify-center">
            <a download href="/CV-final.pdf">
              <Button color="primary" variant="bordered">
                Download CV
              </Button>
            </a>
            <Button className="items-center " color="success">
              <a href="#contact">
                <span className="text-[16px]">Let&apos;s Talk</span>
              </a>
            </Button>
          </div>
          <div className="flex w-full items-center justify-center flex-col gap-4">
            <motion.img
              alt="My Avatar"
              className="w-64 h-64 rounded-full border-4 border-green-400 shadow-lg"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              src="/avatar.jpg"
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                rotate: 3,
                transition: { type: 'spring', stiffness: 300 }
              }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            />

            <h2 className="text-4xl font-extrabold text-white">About Me</h2>
          </div>
        </motion.section>
        <motion.section
          className="space-y-6"
          id="experience"
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="flex flex-col items-center gap-4">
            <FiUser className="w-14 h-14 text-sky-500" />
            <h2 className="text-4xl font-extrabold">About Me</h2>
            <p className="text-gray-600 max-w-2xl">
              Hey there! I&apos;m a web developer with a year of experience in both Backend and
              Frontend development. I’ve had the chance to work on a bunch of cool projects, using
              technologies like Node.js, Express.js, React, and MongoDB. I’m passionate about
              creating smooth and user-friendly websites, and I always aim to bring the latest tech
              trends into the mix. If you&apos;re looking for a web solution that&apos;s both
              efficient and and and awesome, hit me up by clicking the &quot;Let’s Talk&quot; button
              below. Let’s team up something amazing together!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left text-sm text-gray-700 max-w-3xl mx-auto">
            <div className="p-6 rounded-lg bg-blue-50 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-lg font-semibold">🎮 Game Enthusiast & Coffee Lover</h3>
              <p className="mt-2">
                When I&apos;m not coding, you can find me enjoying a good cup of coffee or diving
                into a new video game. I believe that creativity flows best with a bit of caffeine
                and fun!
              </p>
            </div>
            <div className="p-6 rounded-lg bg-purple-50 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-lg font-semibold">💻 2+ years of experience</h3>
              <p className="mt-2">
                Working as a web developer with hands-on experience in both front-end and back-end
                development.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-yellow-50 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-lg font-semibold">🌎 Remote-friendly</h3>
              <p className="mt-2">I can collaborate remotely, anytime, anywhere!</p>
            </div>
          </div>
          <Button className="items-center " color="success">
            <a href="#contact">
              <span className="text-[16px]">Let&apos;s Talk</span>
            </a>
          </Button>
        </motion.section>
        {/* Experience */}
        <motion.section
          className="py-12 px-4 md:px-8  text-center"
          id="experience"
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
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
          className="space-y-8"
          id="portfolio"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-center text-teal-500">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="p-2 rounded-2xl  hover:bg-[#55828b] bg-[#44757f] border hover:border-[#55828b] "
                whileHover={{ scale: 1.05 }}
              >
                <img
                  alt={item.title}
                  className="w-full h-[150px] object-cover rounded-lg mb-4"
                  src={item.image}
                />
                <p className="font-semibold text-2xl  mb-2">{item.title}</p>
                <div className="flex justify-center gap-3 items-center">
                  <a
                    className="bg-teal-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-teal-600 hover:scale-95 transition-all"
                    href={item.githubLink}
                  >
                    Github
                  </a>
                  <a
                    className="bg-teal-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-teal-600 hover:scale-95 transition-all"
                    href={item.demoLink}
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          className="py-16 px-4 md:px-12 bg-[#375A64] bg-pattern bg-cover"
          id="contact"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-12">
            <FiSend className="w-14 h-14 mx-auto text-yellow-400" />
            <h2 className="text-2xl font-semibold text-white">Get In Touch</h2>
            <h3 className="text-4xl font-bold text-green-300 mt-2">Contact Me</h3>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-12 max-w-6xl mx-auto">
            <div className="flex flex-col gap-6 w-full md:w-1/3">
              {contactMethods.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#263544] text-white rounded-2xl p-6 space-y-2 shadow-md"
                >
                  <div className="flex items-center justify-center">{item.icon}</div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm">{item.detail}</div>
                  <a
                    className="text-green-400 text-sm hover:underline"
                    href={item.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>

            <form className="w-full md:w-2/3 space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  className="w-full p-4 bg-transparent border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 text-white placeholder:text-green-200"
                  disabled={isSubmitting}
                  name="name"
                  placeholder="Your Full Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm flex mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  className="w-full p-4 bg-transparent border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 text-white placeholder:text-green-200"
                  disabled={isSubmitting}
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1 flex">{errors.email}</p>}
              </div>

              <div>
                <textarea
                  className="w-full p-4 bg-transparent border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 text-white placeholder:text-green-200"
                  disabled={isSubmitting}
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500 text-sm flex">{errors.message}</p>}
              </div>

              <button
                className="bg-green-400 text-white px-6 py-2 hover:bg-green-500 transition rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Mail'}
              </button>
            </form>
          </div>
        </motion.section>
        <div className="px-6 space-y-3">
          <footer className="pt-16 border-t text-gray-400 text-sm">
            <p>© 2025 MyPortfolio. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-4 text-lg">
              <a
                className="hover:text-gray-600 flex items-center gap-1"
                href="mailto:your@email.com"
              >
                <FiMail /> Email
              </a>
              <a className="hover:text-gray-600 flex items-center gap-1" href="tel:+123456789">
                <FiPhone /> Phone
              </a>
              <a
                className="hover:text-gray-600 flex items-center gap-1"
                href="https://github.com/yourname"
                rel="noreferrer"
                target="_blank"
              >
                <FiGithub /> GitHub
              </a>
              <a
                className="hover:text-gray-600 flex items-center gap-1"
                href="https://linkedin.com/in/yourname"
                rel="noreferrer"
                target="_blank"
              >
                <FiLinkedin /> LinkedInnn
              </a>
            </div>
          </footer>
        </div>
      </div>
    </DefaultLayout>
  )
}
