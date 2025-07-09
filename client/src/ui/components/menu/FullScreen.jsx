import { Button } from "../../primitives/Button";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { useTranslation } from "react-i18next";

export default function FullScreen() {
  const { t } = useTranslation();
  const { fullScreen, setFullScreen } = useContext(GlobalContext);

  function handleClick() {
    // console.log("fullscreen clicked");
    fullScreen
      ? document.exitFullscreen()
      : document.documentElement.requestFullscreen();
    setFullScreen(!fullScreen);
  }
  return (
    <div className="w-4/5 md:w-auto">
      <Button
        label={fullScreen ? t("exitFullScreen") : t("fullScreen")}
        intent="navBtn"
        icon={fullScreen ? <BsFullscreenExit /> : <BsFullscreen />}
        active={fullScreen ? true : false}
        handleClick={() => handleClick()}
      />
    </div>
  );
}
