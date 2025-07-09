import React, { useContext, useRef, useState } from 'react'
import useOutsideClickHook from "../../../hooks/useOutsideClickHook";
import MenuBtn from './MenuBtn';
import SocialIcons from '../MenuListDropDown/SocialIcons';
import { GlobalContext } from '../../../context/GlobalState';


export default function MenuDropDown() {
    const { lang } = useContext(GlobalContext);
    const [showMenuList, setShowMenuList] = useState(false);

    const langRef = useRef();

    useOutsideClickHook(langRef, () => setShowMenuList(false));

    function handleMenuClick() {
        // console.log(showLangList)
        setShowMenuList(!showMenuList)
    }
    return (
        <div className="relative w-4/5 md:w-auto group" onClick={handleMenuClick}>
            <MenuBtn />
            <div className={`${showMenuList ? 'block' : 'hidden'} bg-brand_100 py-1 px-2 -mt-1 rounded-b-md gap-1 justify-evenly md:bg-brand md:absolute ${lang === 'AR' ? 'md:left-0' : 'md:right-0'} md:-bottom-[150px] md:z-[52] md:w-fit md:rounded-lg md:flex-col md:py-2`} ref={langRef}>
                <SocialIcons />
            </div>
        </div>
    )
}