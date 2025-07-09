import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export default function Header({ children }) {
  const { lang } = useContext(GlobalContext);
  return (
    <div id="header-container" className={`gap-1 grow px-1 bg-brand rounded-lg flex justify-around items-center pointer-events-auto ${lang === 'AR' ? 'flex-row-reverse' : ''} max-h-[50px] md:max-h-[70px] md:justify-between`}>
      {children}
    </div>
  );
}
