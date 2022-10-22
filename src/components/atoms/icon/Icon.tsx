import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface IconProps {
  url: string;
  iconName: IconProp;
}

const Icon: FC<IconProps> = ({ url, iconName }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <FontAwesomeIcon className="fa-2xl fa-fw" icon={iconName} />
  </a>
);

export default Icon;
