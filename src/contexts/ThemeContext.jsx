import React from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext({
  theme: "dark",
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(() => localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    setTheme((prevState) => {
      const themeNow = prevState === "dark" ? "light" : "dark";
      document.querySelector("html").setAttribute("class", themeNow);

      localStorage.setItem("theme", themeNow);

      return themeNow;
    });
  };

  const dataTheme = React.useMemo(() => {
    return {
      theme,
      toggleTheme
    };
  }, [theme]);

  React.useEffect(() => {
    document.querySelector("html").setAttribute("class", theme);
  },[]);

  return <ThemeContext.Provider value={dataTheme}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
}