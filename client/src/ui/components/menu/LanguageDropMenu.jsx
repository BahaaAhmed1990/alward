import React, { useRef, useState } from 'react'
import useOutsideClickHook from "../../../hooks/useOutsideClickHook";
import Language from './Language';
import Arabic from './Arabic';
import English from './English';

export default function LanguageDropMenu() {
    const [showLangList, setShowLangList] = useState(false);

    const langRef = useRef();

    useOutsideClickHook(langRef, () => setShowLangList(false));

    function handleLangClick() {
        // console.log(showLangList)
        setShowLangList(!showLangList)
    }
    return (
        <div className="relative w-4/5 md:w-auto group" onClick={handleLangClick}>
            <Language />
            <ul className={`${showLangList ? 'flex' : 'hidden'} bg-brand_100 py-1 px-2 -mt-1 rounded-b-md gap-1 justify-evenly md:bg-brand md:absolute md:-bottom-full md:left-1/2 md:z-[52] md:w-fit md:rounded-lg md:flex-col md:translate-y-14 md:-translate-x-1/2 md:py-2`} ref={langRef}>
                <Arabic />
                <English />
            </ul>
        </div>
    )
}
