import { useState } from "react";
import Illustration from "./components/illustration/illustration";
import Menu from "./components/menu/menu";
import "./Global.scss";

const Portfolio = () => {
  const [area, setArea] = useState("main");
  console.log("state: ", area);
  return (
    <div className="App">
      <Illustration {...{ area, setArea }} />
      <Menu {...{ area, setArea }} />
    </div>
  );
};

export default Portfolio;
