import {
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import "./socialmedia.scss";

const SocialMedia = ({ area }) => {
  return (
    <span
      className={clsx("social-media mt-2", area !== "main" && "-transitionOut")}
    >
      <a
        href="https://github.com/luisconceicaodev"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="fa-2xl fa-fw" icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/lu%C3%ADs-miguel-d-619364108/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="fa-2xl fa-fw" icon={faLinkedin} />
      </a>
      <a
        href="https://www.instagram.com/thelifeofmiguel/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="fa-2xl fa-fw" icon={faInstagram} />
      </a>

      <a
        href="https://twitter.com/thelifeofmigueI"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="fa-2xl fa-fw" icon={faTwitter} />
      </a>
      <a
        href="mailto: luisconceicao.contact@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="fa-2xl fa-fw" icon={faGoogle} />
      </a>
    </span>
  );
};

export default SocialMedia;
