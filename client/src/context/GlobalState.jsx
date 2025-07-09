import { useState, useEffect, createContext } from "react";
import { useSearchParams } from "react-router-dom";

export const GlobalContext = createContext();

export default function GlobalState({ children }) {
  const [params] = useSearchParams();
  const [theme, setTheme] = useState("dark");
  const [fullScreen, setFullScreen] = useState(false);
  const [lang, setLang] = useState('');
  const [iframeContactFormOpen, setIframeContactFormOpen] = useState(false);


  useEffect(() => {
    document.fullscreenElement ? setFullScreen(true) : setFullScreen(false);
    // console.log(document.fullscreenElement);
    document.addEventListener("fullscreenchange", (e) => {
      // console.log("full screen change");
      document.fullscreenElement ? setFullScreen(true) : setFullScreen(false);
    });

    // chech language on load
    if (
      localStorage.i18nextLng === "en" || !("i18nextLng" in localStorage)) {
      setLang("EN");
    } else {
      setLang("AR");
    }
  }, []);

  // console.log("theme", theme);
  // console.log("fullscreen", fullScreen);
  // console.log("language", lang);

  return (
    <GlobalContext.Provider
      value={{
        theme, setTheme,
        fullScreen, setFullScreen,
        lang, setLang,
        iframeContactFormOpen, setIframeContactFormOpen
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
