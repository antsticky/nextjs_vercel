import { ReactNode, createContext } from "react";
import "./menu.css";

export const MenuContext = createContext<{invert: boolean, dark: string}>({ invert: false, dark: "#000000" });

export interface MenuProps {
  /** Is this the principal call to action on the page? */
  dark?: boolean;
  /** How large the menu? */
  size?: number;
  /** Button contents */
  children: ReactNode;
  invert?: boolean;
}

/** Primary UI component for user interaction */
export const Menu = ({
  dark,
  size = 250,
  children,
  invert,
  ...props
}: MenuProps) => {
  const darkMode = dark ? "#000000" : "#ffffff";
  const invertMode = !!invert;

  return (
    <MenuContext.Provider value={{ invert: invertMode, dark: darkMode }}>
      <div
        className="storybook-menu"
        style={{ width: size, background: darkMode}}
        {...props}
      >
        {children}
      </div>
    </MenuContext.Provider>
  );
};
