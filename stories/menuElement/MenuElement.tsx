import { useContext } from "react";
import { MenuContext } from "@stories/menu/Menu";
import "./menuElement.css";

export interface MenuProps {
  icon: string | SVGAElement;
  label: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const MenuElement = ({ icon, label, ...props }: MenuProps) => {
  const { invert, dark, fontColor } = useContext(MenuContext);
  const invertMode = invert ? "storybook-menu-element-invert" : "";

  return (
    <div
      className={["storybook-menu-element", invertMode].join(" ")}
      style={{background: dark, color: fontColor}}
      {...props}
    >
      <img src={icon as string} />
      <label>{label}</label>
    </div>
  );
};
