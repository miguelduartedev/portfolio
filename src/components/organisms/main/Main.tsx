import { Area } from "@components/common/types";
import clsx from "clsx";
import { FC } from "react";
import NavLink from "../../atoms/navlink";
import SocialMedia from "../../molecules/socialmedia";
import "./Main.scss";

const Main: FC<Area> = ({ area, setArea }) => (
  <section className={`text-area ${area}`}>
    <h1
      className={clsx(
        "text-area-heading mb-4",
        area !== "main" && "-transitionOut"
      )}
    >
      Welcome!
    </h1>
    <h3
      className={clsx(
        "text-area-heading main",
        area !== "main" && "-transitionOut"
      )}
    >
      <span className="anchor main" onClick={() => setArea("aboutme")}></span>
    </h3>
    <NavLink {...{ area, setArea, navTo: "aboutme", label: "About Me" }} />
    <NavLink
      {...{
        area,
        setArea,
        navTo: "experience",
        label: "Professional Experience",
      }}
    />
    <SocialMedia {...{ area, setArea }} />
  </section>
);

export default Main;
