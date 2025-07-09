import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { IoOptionsOutline } from "react-icons/io5";
import { Button } from '../../primitives/Button';

export default function Options({ setOptionsOpen }) {
    const { t } = useTranslation();

    function handleClick() {
        // console.log("optins clicked");
        setOptionsOpen(true)
    }
    return (
        <div className="w-4/5 md:w-auto">
            <Button
                label={t("options")}
                intent="navBtn"
                icon={<IoOptionsOutline />}
                handleClick={() => handleClick()}
            />
        </div>
    );
}
