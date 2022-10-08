import SocialMedia from "../socialmedia/socialmedia";
import "./menu.scss";

const Menu = ({ area, setArea }) => {
  return (
    <section className={`text-area ${area}`}>
      <h1 className="text-area-heading mb-4">Welcome!</h1>
      <h3 className="text-area-heading">
        <span className="anchor" onClick={() => setArea("aboutme")}>
          About Me
        </span>
      </h3>
      <h3 className="text-area-heading">
        <span className="anchor" href="#professional-experience">
          Professional Experience
        </span>
      </h3>
      <SocialMedia />
    </section>
  );
};

export default Menu;
