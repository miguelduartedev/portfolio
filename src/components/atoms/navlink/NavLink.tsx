import { Area, AreaTypes } from "@components/common/types";
import clsx from "clsx";
import { FC } from "react";
import "./NavLink.scss";

interface NavLinkProps extends Area {
  label: string;
  navTo: AreaTypes;
}

const NavLink: FC<NavLinkProps> = ({ area, setArea, navTo, label }) => (
  <h3
    className={clsx(
      "text-area-heading main",
      area !== "main" && "-transitionOut"
    )}
  >
    <span className="anchor main" onClick={() => setArea(navTo)}>
      {label}
    </span>
  </h3>
);

export default NavLink;
