import { useContext, useRef, useState } from 'react'
import useOutsideClickHook from "../../../hooks/useOutsideClickHook";
import { useTranslation } from 'react-i18next';
import NavLink from '../../primitives/NavLink';
import { FaHouse } from 'react-icons/fa6';
import { Button } from '../../primitives/Button';
import { VrContext } from '../../../context/VrState';
import { Navigate, useNavigate } from 'react-router-dom';

export default function TypeMenu() {
    const [showTypeList, setShowTypeList] = useState(false);

    const typeRef = useRef();

    useOutsideClickHook(typeRef, () => setShowTypeList(false));

    // console.log(langRef)
    // console.log(moodRef)

    function handleTypeClick() {
        // console.log(showMoodList)
        setShowTypeList(!showTypeList)
    }

    return (
        <div className="relative w-4/5 md:w-auto group" onClick={handleTypeClick} >
            <TypeIcon />
            <ul className={` ${showTypeList ? 'flex' : 'hidden'} bg-brand_100 py-1 px-2 -mt-1 rounded-b-md gap-1 md:bg-brand  md:absolute md:-bottom-full md:z-[52]  md:rounded-lg md:flex-col md:translate-y-14 md:py-2`} ref={typeRef}>
                <Twin />
                <Town />
            </ul>
        </div>
    )
}

function TypeIcon() {
    const { t } = useTranslation()

    return (
        <NavLink
            intent="iconLink"
            label={t('type')}
            icon={<FaHouse />}
        />
    );
}

function Twin() {
    const { t } = useTranslation();
    // const { setType } = useContext(VrContext);/
    const navigate = useNavigate()
    function handleClick() {
        console.log("twin clicked");
        // setType('twin-house')
        navigate('/twin-house')
    }

    return (
        <Button
            label={t('twin') + ' ' + t('A')}
            intent="primary"
            handleClick={() => handleClick()}
        //   active={theme === "light" ? true : false}
        />
    );
}

function Town() {
    const { t } = useTranslation();
    // const { setType } = useContext(VrContext)
    const navigate = useNavigate();
    function handleClick() {
        console.log("town clicked");
        navigate('/town-house')
    }

    return (
        <Button
            label={t('town') + ' ' + t('A2')}
            intent="primary"
            handleClick={() => handleClick()}
        //   active={theme === "light" ? true : false}
        />
    );
}