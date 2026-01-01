import { useContext } from "react";
import { MenuContext } from "@stories/menu/Menu";
import "./menuElement.css";

export interface MenuProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const MenuElement = ({ icon, label, ...props }: MenuProps) => {
  const { invert, dark } = useContext(MenuContext);
  const invertMode = invert ? "storybook-menu-element-invert" : "";

  return (
    <div
      className={["storybook-menu-element", invertMode].join(" ")}
      style={{background: dark, color: dark}}
      {...props}
    >
      <img src={icon} alt="image"/>
      <p>{label}</p>
    </div>
  );
};
