import { motion } from "framer-motion";
import { FC } from "react";

import ProjectCard from "./projectCard";
import Loading from "./loading";
import { Project } from "../@types";
import Masonry from "react-masonry-css";

const listContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring", // default
      mass: 0.4, // the weight of the component
      damping: 8, // the bounce back-and-forth
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: -25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

interface PortfolioSectionProps {
  projects: Project[];
}

const PortfolioSection: FC<PortfolioSectionProps> = ({ projects }) => {
  return (
    <section
      id="portfolio"
      className="py-16 lg:py-24 bg-gray-50 dark:bg-transparent"
    >
      <div className="container max-w-screen-lg flex flex-col justify-center items-center">
        <motion.header
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          className="flex flex-col dark:text-white justify-center mb-10 md:mb-16  items-center text-center"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl uppercase mb-2">
            Portfolio
          </h1>
          <h4 className="lg:text-lg">See what I&apos;ve been doing lately</h4>
          <div className="h-1 w-5/12 rounded-full bg-purple-500 mt-2"></div>
        </motion.header>

        {projects.length ? (
          <Masonry
            breakpointCols={{
              default: 4,
              1524: 3,
              960: 2,
              620: 1,
            }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {projects?.map((project) => (
              <motion.div
                variants={itemVariants}
                key={project.id}
                className="w-full"
              >
                <ProjectCard data={project} />
              </motion.div>
            ))}
          </Masonry>
        ) : (
          <div className="mt-4">
            <Loading className="text-purple-700 h-20 w-20" />
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
