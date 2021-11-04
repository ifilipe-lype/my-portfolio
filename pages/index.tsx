import Head from "next/head";

import Header from "../components/header";
import HeroSection from "../components/hero-section";
import PortfolioSection from "../components/portfolio-section";
import SkillSection from "../components/skills-section";
import AboutMeSection from "../components/about-section";

import { Project, Skill } from "../@types";
import { getProjects, getSkills } from "../lib/datocms";
import { FC } from "react";

interface HomeInitProps {
  projects: Project[];
  skills: Skill[];
}

const Home: FC<HomeInitProps> = ({ projects, skills }) => {
  return (
    <div id="home">
      <Head>
        <title>Filipe André - Software Developer</title>
      </Head>

      <main className="">
        <Header />
        <HeroSection />
        <PortfolioSection projects={projects} />
        <SkillSection skills={skills} />
        <AboutMeSection />
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const [projects, skills] = await Promise.all([
    await getProjects(),
    await getSkills(),
  ]);

  return {
    props: {
      projects,
      skills,
    },
  };
}

export default Home;
