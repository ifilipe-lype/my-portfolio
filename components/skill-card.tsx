import { FC } from "react";
import Image from "next/image";
import { Skill } from "../@types";

interface SkillProps {
  data: Skill;
}

const SkillCard: FC<SkillProps> = ({ data: { image, name } }) => {
  return (
    <article className="flex flex-col items-center justify-center">
      <div className="relative w-16 h-16 md:w-20 md:h-20">
        <Image
          src={image}
          sizes="100%"
          layout="fill"
          objectFit="contain"
          alt={name}
        />
      </div>
      <h3 className="text-sm mt-2 text-white">{name}</h3>
    </article>
  );
};

export default SkillCard;
