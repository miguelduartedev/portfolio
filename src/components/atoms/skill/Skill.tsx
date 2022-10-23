import clsx from "clsx";
import { FC } from "react";
import { exists } from "../../common";
import "./Skill.scss";

interface SkillProps {
  alt?: string;
  skill?: string;
  source: string;
  className?: string;
  overrideImgClass?: string;
}

const Skill: FC<SkillProps> = ({
  alt,
  skill,
  source,
  className,
  overrideImgClass,
}) => (
  <div className={clsx("skill-bloc pointer", className)}>
    <img
      className={clsx(overrideImgClass ? overrideImgClass : "skill-logo")}
      src={source}
      alt={clsx(exists(alt) ? alt : skill)}
    />
    {exists(skill) && <p className="mb-0">{skill}</p>}
  </div>
);

export default Skill;
