import React from "react";
import Aos from "aos";

export const useColorScheme = () => {
  const [themeMode, setTheme] = React.useState("light");
  const [mountedComponent, setMountedComponent] = React.useState(false);

  const setMode = (mode) => {
    try {
      window.localStorage.setItem("themeMode", mode);
    } catch {
      /* do nothing */
    }
    setTheme(mode);
  };

  const themeToggler = () => {
    themeMode === "light" ? setMode("dark") : setMode("light");
  };

  React.useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem("themeMode");
      localTheme ? setTheme(localTheme) : setMode("light");
    } catch {
      setMode("light");
    }
    setMountedComponent(true);
  }, []);

  // Remove the server-side injected CSS.
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    Aos.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: "ease-in-out",
    });
  }, []);

  React.useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  // re-initialize aos on re-renders and theme mode changes
  React.useEffect(() => {
    Aos.refresh();
  }, [mountedComponent, themeMode]);

  return { themeMode, themeToggler, mountedComponent };
};
