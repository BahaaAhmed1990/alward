import { useContext } from "react";
import { Button } from "../../primitives/Button";
import { GlobalContext } from "../../../context/GlobalState";
import { useTranslation } from "react-i18next";

export default function Light() {
  const { t } = useTranslation();
  const { theme, setTheme } = useContext(GlobalContext);
  function handleClick() {
    // console.log("light clicked");
    localStorage.setItem("theme", "light");
    setTheme("light");
  }

  return (
    <Button
      label={t('light')}
      intent="primary"
      handleClick={() => handleClick()}
      active={theme === "light" ? true : false}
    />
  );
}
