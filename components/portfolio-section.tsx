import ProjectCard from './projectCard'
import { motion } from 'framer-motion'

const mockedProjectList = [
  {
    name: 'WebSite for Local Business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Beatae, quas praesentium nesciunt a corporis eligendi nobis.',
    date: Date.now(),
    image: "/avatar-original.jpg",
    tecnologies: ["ReactJS", "Tailwindcss", "NextJS"],
    live_link: "",
    src_link: "",
  },
  {
    name: 'WebSite for Local Business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Beatae, quas praesentium nesciunt a corporis eligendi nobis.',
    date: Date.now(),
    image: "/avatar-original.jpg",
    tecnologies: ["ReactJS", "Tailwindcss", "NextJS"],
    live_link: "",
    src_link: "",
  },
  {
    name: 'WebSite for Local Business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Beatae, quas praesentium nesciunt a corporis eligendi nobis.',
    date: Date.now(),
    image: "/avatar-original.jpg",
    tecnologies: ["ReactJS", "Tailwindcss", "NextJS"],
    live_link: "",
    src_link: "",
  },
  {
    name: 'WebSite for Local Business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Beatae, quas praesentium nesciunt a corporis eligendi nobis.',
    date: Date.now(),
    image: "/avatar-original.jpg",
    tecnologies: ["ReactJS", "Tailwindcss", "NextJS"],
    live_link: "",
    src_link: "",
  },
  {
    name: 'WebSite for Local Business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Beatae, quas praesentium nesciunt a corporis eligendi nobis.',
    date: Date.now(),
    image: "/avatar-original.jpg",
    tecnologies: ["ReactJS", "Tailwindcss", "NextJS"],
    live_link: "",
    src_link: "",
  },
  {
    name: 'WebSite for Local Business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Beatae, quas praesentium nesciunt a corporis eligendi nobis.',
    date: Date.now(),
    image: "/avatar-original.jpg",
    tecnologies: ["ReactJS", "Tailwindcss", "NextJS"],
    live_link: "",
    src_link: "",
  },
]

const listContainerVariants = {
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
      staggerChildren: 0.3,
    }
  }
}

const itemVariants = {
  initial: { opacity: 0, y: -25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  }
}

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-16 lg:py-24 bg-gray-50 dark:bg-transparent"
    >
      <div className="container max-w-screen-lg flex flex-col justify-center items-center">
        <motion.header initial={{y: "100vh"}} animate={{ y: 0}}
          className="flex flex-col dark:text-white justify-center mb-10 md:mb-16  items-center text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl uppercase mb-2">Portfolio</h1>
          <h4 className="lg:text-lg">See what I&apos;ve been doing lately</h4>
          <div className="h-1 w-5/12 rounded-full bg-purple-500 mt-2"></div>
        </motion.header>

        <motion.ul variants={listContainerVariants} animate="animate" initial="initial"
          className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            mockedProjectList.map((project, index) => (
              <motion.li variants={itemVariants} key={index}>
                <ProjectCard {...project} />
              </motion.li>
            ))
          }
        </motion.ul>
      </div>
    </section>
  )
}
