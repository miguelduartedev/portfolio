import clsx from "clsx";
import SocialMedia from "../socialmedia/socialmedia";
import "./menu.scss";

const Menu = ({ area, setArea }) => {
  return (
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
        <span className="anchor main" onClick={() => setArea("aboutme")}>
          About Me
        </span>
      </h3>
      <h3
        className={clsx(
          "text-area-heading main",
          area !== "main" && "-transitionOut"
        )}
      >
        <span className="anchor main" onClick={() => setArea("experience")}>
          Professional Experience
        </span>
      </h3>
      <SocialMedia {...{ area }} />
    </section>
  );
};

export default Menu;
