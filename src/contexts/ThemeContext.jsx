import React from "react";

const ThemeContext = React.createContext({
  theme: "dark",
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");

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
    const themeHistory = localStorage.getItem("theme") || "light";
    document.querySelector("html").setAttribute("class", themeHistory);

    setTheme(themeHistory);
  },[]);

  return <ThemeContext.Provider value={dataTheme}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
