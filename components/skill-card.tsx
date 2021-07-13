import { FC } from 'react'
import Image from 'next/image'

interface Skill {
  logo: string
  name: string
}

const SkillCard: FC<Skill> = ({ logo, name }) => {
  return (
    <article className="flex flex-col items-center justify-center">
      <div className="relative w-16 h-16 md:w-20 md:h-20">
        <Image
          src={logo}
          sizes="100%"
          layout="fill"
          objectFit="contain"
          alt={name}
        />
      </div>
      <h3 className="text-sm md:text-lg text-white">{name}</h3>
    </article>
  )
}

export default SkillCard
