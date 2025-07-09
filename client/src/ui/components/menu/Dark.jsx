import { useContext } from "react";
import { Button } from "../../primitives/Button";
import { GlobalContext } from "../../../context/GlobalState";
import { useTranslation } from "react-i18next";

export default function Dark() {
  const { t } = useTranslation();
  const { theme, setTheme } = useContext(GlobalContext);

  function handleClick() {
    console.log("dark clicked");
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  }
  return (
    <Button
      label={t('dark')}
      intent="primary"
      handleClick={() => handleClick()}
      active={theme === "dark" ? true : false}
    />
  );
}
