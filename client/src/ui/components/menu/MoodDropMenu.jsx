import React, { useRef, useState } from 'react'
import Mode from './Mode';
import Light from './Light';
import Dark from './Dark';
import useOutsideClickHook from "../../../hooks/useOutsideClickHook";

export default function MoodDropMenu() {
    const [showMoodList, setShowMoodList] = useState(false);

    const moodRef = useRef();

    useOutsideClickHook(moodRef, () => setShowMoodList(false));

    // console.log(langRef)
    // console.log(moodRef)

    function handleMoodClick() {
        // console.log(showMoodList)
        setShowMoodList(!showMoodList)
    }

    return (
        <div className="relative w-4/5 md:w-auto group" onClick={handleMoodClick} >
            <Mode />
            <ul className={` ${showMoodList ? 'flex' : 'hidden'} bg-brand_100 py-1 px-2 -mt-1 rounded-b-md gap-1 md:bg-brand  md:absolute md:-bottom-full md:z-[52] md:w-full md:rounded-lg md:flex-col md:translate-y-14 md:py-2`} ref={moodRef}>
                <Light />
                <Dark />
            </ul>
        </div>
    )
}
