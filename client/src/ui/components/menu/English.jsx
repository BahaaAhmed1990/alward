import { useContext, useEffect } from "react";
import { Button } from "../../primitives/Button";
import { GlobalContext } from "../../../context/GlobalState";
import { useTranslation } from "react-i18next";

export default function English() {
  const { i18n, t } = useTranslation();
  const { setLang } = useContext(GlobalContext);
  function handleClick() {
    // console.log("En clicked");
    setLang('EN')
    i18n.changeLanguage('en')
  }

  useEffect(() => {
    document.body.classList.remove('ar');
  }, [])

  return (
    <Button
      label={t('english')}
      intent="primary"
      handleClick={() => handleClick()}
    />
  );
}
