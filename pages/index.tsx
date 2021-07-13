import Head from 'next/head'

import Header from '../components/header'
import HeroSection from '../components/hero-section'
import PortfolioSection from '../components/portfolio-section'
import SkillSection from '../components/skills-section'
import AboutMeSection from '../components/about-section'

export default function Home() {
  return (
    <div id="home">
      <Head>
        <title>Filipe André - Software Developer</title>
      </Head>

      <main className="">
        <Header />
        <HeroSection />
        <PortfolioSection />
        <SkillSection />
        <AboutMeSection />
      </main>
    </div>
  )
}
