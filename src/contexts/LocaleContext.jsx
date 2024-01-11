import React from "react";

const LocaleContext = React.createContext({
  locale: "en",
  toggleLocale: () => {}
});

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = React.useState("en");

  const toggleLocale = () => {
    setLocale((prevState) => {
      const localeNow = prevState === "en" ? "id" : "en";
      localStorage.setItem("locale", localeNow);

      return localeNow;
    });
  };

  const dataLocale = React.useMemo(() => {
    return {
      locale,
      toggleLocale
    };
  }, [locale]);

  React.useEffect(() => {
    const localeHistory = localStorage.getItem("locale") || "en";

    setLocale(localeHistory);
  },[]);

  return <LocaleContext.Provider value={dataLocale}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => {
  return React.useContext(LocaleContext);
};
