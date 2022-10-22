import { AreaTypes } from "@components/common/types";
import { useState } from "react";
import "./components/common/Global.scss";
import AboutMe from "./components/organisms/aboutme/AboutMe";
import Experience from "./components/organisms/experience";
import Illustration from "./components/organisms/illustration";
import Main from "./components/organisms/main";

const Portfolio = () => {
  const [area, setArea] = useState<AreaTypes>("main");

  return (
    <div className={`App ${area}`}>
      <Illustration {...{ area, setArea }} />
      <Main {...{ area, setArea }} />
      <AboutMe {...{ area, setArea }} />
      <Experience {...{ area, setArea }} />
    </div>
  );
};

export default Portfolio;
