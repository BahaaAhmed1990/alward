import { Button } from "../../primitives/Button";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";


export default function FullScreenIcon() {
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
                intent="navBtn"
                icon={fullScreen ? <BsFullscreenExit /> : <BsFullscreen />}
                active={fullScreen ? true : false}
                handleClick={() => handleClick()}
            />
        </div>
    );
}