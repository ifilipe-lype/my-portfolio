import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

import ThemeSwitcher from './theme-switcher'
import MobileMenu from './mobile-menu'

const headerVariants = {
  initial: {
    y: '-100vh',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 80,
    },
  },
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      animate="animate"
      initial="initial"
      variants={headerVariants}
      className="shadow-sm sticky top-0 bg-white bg-opacity-95 dark:bg-opacity-95 dark:bg-gray-900 z-50"
    >
      <div className="container py-4 max-w-screen-lg">
        <nav className="flex items-center justify-between">
          <div className="flex w-full md:w-auto justify-between items-center">
            <h1 className="flex items-center">
              <div className="relative w-8 h-8 md:w-10 md:h-10 border mr-4 rounded-full overflow-hidden">
                <Image
                  src="/lype.jpg"
                  alt="Filipe André's Picture"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <div className="flex items-center">
                <span className="md:text-lg leading-none dark:text-white text-gray-700 font-semibold">
                  Lype
                </span>
              </div>
            </h1>

            <div className="flex items-center md:hidden">
              <div className="flex items-center">
                <ThemeSwitcher />
              </div>
              <button
                onClick={() => setIsMenuOpen((oldValue) => !oldValue)}
                className="ml-6 outline-none text-purple-400 focus:ring-purple-500 focus:text-purple-500 focus:outline-none flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className="hidden md:flex items-center justify-between">
            <div className="items-center flex mr-5">
              <ThemeSwitcher />
            </div>

            <ul className="navigation-items flex text-base text-center items-center mr-4 lg:mr-8 text-gray-500 dark:text-gray-200 font-light">
              <li>
                <span>Home</span>
              </li>
              <li>
                <span>Portfolio</span>
              </li>
              <li>
                <span>Skills</span>
              </li>
              <li>
                <span>About me</span>
              </li>
            </ul>

            <button
              className="px-6 py-2 w-auto glow-hover bg-purple-500 hover:bg-purple-700 transition text-white shadow text-sm rounded-xl focus:outline-none">
              Hire me
            </button>
          </div>
          <MobileMenu show={isMenuOpen} hideMenu={() => setIsMenuOpen(false)} />
        </nav>
      </div>
    </motion.header>
  )
}
