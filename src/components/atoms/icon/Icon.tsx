import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import "./Icon.scss";

interface IconProps {
  iconName: IconProp;
  url?: string;
  className?: string;
}

const Icon: FC<IconProps> = ({ url, iconName, className }) => (
  <a href={url} target="_blank" className={className} rel="noreferrer">
    <FontAwesomeIcon className="fa-2xl fa-fw" icon={iconName} />
  </a>
);

export default Icon;
