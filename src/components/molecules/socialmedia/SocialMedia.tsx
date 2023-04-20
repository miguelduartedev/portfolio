import { Area } from "@components/common/types"
import {
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import Icon from "../../atoms/icon"

import { faFileAlt } from "@fortawesome/free-regular-svg-icons"
import clsx from "clsx"
import { FC } from "react"
import "./SocialMedia.scss"

const SocialMedia: FC<Area> = ({ area }) => (
  <span
    className={clsx("social-media mt-2", area !== "main" && "-transitionOut")}
  >
    <Icon url="https://github.com/miguelduartedev" iconName={faGithub} />
    <Icon
      url="https://www.linkedin.com/in/luis-miguel-duarte-conceicao/"
      iconName={faLinkedin}
    />
    <Icon
      url="https://www.instagram.com/thelifeofmiguel/"
      iconName={faInstagram}
    />
    <Icon url="https://flowcv.com/resume/ufj2gfikvl" iconName={faFileAlt} />
    <Icon url="mailto: miguelduarte.contact@gmail.com" iconName={faGoogle} />
  </span>
)

export default SocialMedia
