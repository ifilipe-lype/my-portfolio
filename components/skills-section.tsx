import { FC } from "react";
import { motion } from "framer-motion";

import Loading from "./loading";
import SkillCard from "./skill-card";
import { Skill } from "../@types";

const skillsListVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      type: "spring", // default
      mass: 0.4, // the weight of the component
      damping: 8, // the bounce back-and-forth
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

const skillItemVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};

interface SkillSectionProps {
  skills: Skill[];
}

const SkillSection: FC<SkillSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-16 lg:py-24 bg-purple-900">
      <div className="container max-w-screen-lg flex flex-col justify-center mb-10 md:mb-16 items-center">
        <motion.header
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          className="flex flex-col text-white justify-center items-center text-center"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl uppercase mb-2">
            My Skills
          </h1>
          <h4 className="lg:text-lg">
            See some of the tools I use to bring excellent solutions to life
          </h4>
          <div className="h-1 w-5/12 rounded-full bg-white mt-2"></div>
        </motion.header>
      </div>

      <div className="container max-w-screen-lg flex flex-col justify-center items-center">
        {skills.length ? (
          <motion.ul
            variants={skillsListVariants}
            animate="animate"
            initial="initial"
            className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {skills?.map((skill) => (
              <motion.li variants={skillItemVariants} key={skill.id}>
                <SkillCard data={skill} />
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <div className="mt-4">
            <Loading className="text-purple-700 h-20 w-20" />
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillSection;
