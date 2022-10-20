import { useState } from "react";
import AboutMe from "./components/aboutme/aboutme";
import Experience from "./components/experience/experience";
import Illustration from "./components/illustration/illustration";
import Menu from "./components/menu/menu";
import "./Global.scss";

const Portfolio = () => {
  const [area, setArea] = useState("main");
  console.log("state: ", area);
  return (
    <div className={`App ${area}`}>
      <Illustration {...{ area, setArea }} />
      <Menu {...{ area, setArea }} />
      <AboutMe {...{ area, setArea }} />
      <Experience {...{ area, setArea }} />
    </div>
  );
};

export default Portfolio;
