import { FC } from 'react'
import Image from 'next/image';

interface Skill {
    logo: string;
    name: string;
}

const SkillCard: FC<Skill> = ({ logo, name }) => {
  return (
    <article className="flex flex-col items-center justify-center">
      <div className="relative w-20 h-20 md:w-24 md:h-24">
        <Image
          src={logo}
          sizes="100%"
          layout="fill"
          objectFit="contain"
          alt={name}
        />
      </div>
      <h5 className="md:text-lg text-white">{name}</h5>
    </article>
  )
}

const skills: Skill[] = [
    { logo: "/icons/html-5.png", name: "HTML5"},
    { logo: "/icons/css-3.png", name: "CSS3"},
    { logo: "/icons/js.png", name: "JavaScript"},
    { logo: "/icons/tailwindcss.png", name: "Tailwindcss"},
    { logo: "/icons/reactjs.png", name: "ReactJS"},
    { logo: "/icons/nextjs.png", name: "NextJS"},
    { logo: "/icons/ts.png", name: "TypeScript"},
    { logo: "/icons/nodejs.png", name: "NodeJS"},
    { logo: "/icons/mongodb.png", name: "MongoDB"},
    { logo: "/icons/git.png", name: "Git"},
    { logo: "/icons/github.png", name: "Github"},
]

const SkillSection: FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-purple-900">
      <div className="container max-w-screen-lg flex flex-col justify-center mb-10 md:mb-16 items-center">
        <header className="flex flex-col text-white justify-center items-center text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl uppercase mb-2">
            My Skills
          </h1>
          <h4 className="lg:text-lg">
            See what tools I use to bring excelents solution alive
          </h4>
          <div className="h-1 w-5/12 rounded-full bg-white mt-2"></div>
        </header>
      </div>

      <div className="container max-w-screen-lg">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {
              skills.map((skill, index) => (
                  <li key={index}>
                      <SkillCard {...skill} />
                  </li>
              ))
          }
        </ul>
      </div>
    </section>
  )
}

export default SkillSection
