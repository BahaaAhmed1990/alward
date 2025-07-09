import { Button } from "../../primitives/Button";
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";
export default function Arabic() {
  const { i18n, t } = useTranslation();
  const { setLang } = useContext(GlobalContext);

  function handleClick() {
    console.log("Ar clicked");
    setLang('AR')
    i18n.changeLanguage("ar");
  }
  useEffect(() => {
    document.body.classList.add('ar');
  }, [])

  return (
    <Button
      label={t('arabic')}
      intent="primary"
      handleClick={() => handleClick()}
    />
  );
}
