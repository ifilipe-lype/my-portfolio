import Link from 'next/link'
import { motion } from 'framer-motion'

const articleVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'spring', // default
      mass: 0.4, // the weight of the component
      damping: 8, // the bounce back-and-forth
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
}

const childVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
    },
  },
}

export default function HeroSection() {
  return (
    <section >
      <div className="container min-h-screen relative flex justify-center lg:justify-start items-center max-w-screen-lg">
        <motion.div
          initial={{ opacity: 0, x: '100vh' }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-8/12 h-full bg-cover bg-purple-900 bg-center bg-no-repeat absolute lg:right-0"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dvjnagd3i/image/upload/v1625651133/portfolio_assets/background_qsehvo.jpg)`,
          }}
        ></motion.div>
        <div className="w-full lg:w-8/12 h-full bg-gray-900 bg-opacity-40 md:bg-opacity-30 absolute right-0"></div>
        <motion.article
          initial="initial"
          animate="animate"
          variants={articleVariants}
          className="md:w-1/2 rounded-lg z-10 text-white lg:text-gray-600 dark:text-white text-center lg:text-left"
        >
          <motion.div variants={childVariants}>
            <h4 className="text-lg mb-1 lg:text-gray-400 lg:dark:text-gray-400">
              Hello, world!
            </h4>
            <h1 className="lg:text-5xl text-3xl mb-2">Filipe André</h1>
          </motion.div>
          <motion.div variants={childVariants}>
            <h3 className="text-2xl text-purple-500 font-semibold lg:text-4xl">
              Software Developer
            </h3>
            <div className="flex my-2">
              <p className="text-base lg:text-lg leading-tight lg:p-2 lg:pl-0 lg:bg-white lg:dark:bg-gray-900 rounded-lg">
                I love building software solutions for real life problems that really have an impact on people&apos;s lives
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="flex w-9/12 mx-auto md:w-full lg:mx-0 md:flex-row text-center flex-col items-center mt-8"
          >
            <Link href="#about" passHref>
              <span className="mb-4 md:mb-0 cursor-pointer glow-hover transition w-full lg:w-auto px-4 py-2 lg:px-6 lg:py-3 md:mr-8 bg-purple-500 hover:bg-purple-600 text-white rounded-lg">
                Let&apos;s talk
              </span>
            </Link>
            <Link href="#portfolio" passHref>
              <a className="w-full transition glow-hover cursor-pointer lg:w-auto shadow px-4 py-2 lg:px-6 lg:py-3 bg-gray-700 hover:bg-gray-800 text-gray-100 rounded-lg">
                See my work
              </a>
            </Link>
          </motion.div>
        </motion.article>
      </div>
    </section>
  )
}
