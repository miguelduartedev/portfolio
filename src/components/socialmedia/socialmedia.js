import {
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./socialmedia.scss";

const SocialMedia = () => {
  return (
    <span className="social-media mt-2">
      <a href="https://github.com/luisconceicaodev">
        <FontAwesomeIcon className="fa-2xl fa-fw" icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/lu%C3%ADs-miguel-d-619364108/">
        <FontAwesomeIcon className="fa-2xl fa-fw" icon={faLinkedin} />
      </a>
      <a href="https://www.instagram.com/thelifeofmiguel/">
        <FontAwesomeIcon className="fa-2xl fa-fw" icon={faInstagram} />
      </a>

      <a href="https://twitter.com/thelifeofmigueI">
        <FontAwesomeIcon className="fa-2xl fa-fw" icon={faTwitter} />
      </a>
      <a href="mailto: luisconceicao.contact@gmail.com">
        <FontAwesomeIcon className="fa-2xl fa-fw" icon={faGoogle} />
      </a>
    </span>
  );
};

export default SocialMedia;
