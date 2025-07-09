import { useContext, useRef } from "react"
import useOutsideClick from "../../../hooks/useOutsideClickHook"
import { useSearchParams } from "react-router-dom";
import { VrContext } from "../../../context/VrState";

import TwonGround from "./Twon/TwonGround";
import TwonSecond from "./Twon/TwonSecond";
import TwinGround from "./Twin/TwinGround";
import TwinFirst from "./Twin/TwinFirst";
import TownFirst from "./Twon/TwonFirst";


export default function Plan() {
    const { planOpen, setPlanOpen } = useContext(VrContext)
    const planRef = useRef();

    useOutsideClick(planRef, () => setPlanOpen(false))

    if (!planOpen) {
        return null
    }
    return (
        <div className='fixed flex w-full h-full bg-zinc-600 z-[51] bg-opacity-65 items-center justify-center px-1'>
            <div id="contact-form" className='flex justify-center items-center  rounded-lg shadow-lg overflow-hidden w-full h-[550px] md:w-[350px]' ref={planRef}>
                <PlanImg />
            </div>
        </div>
    )
}

function PlanImg() {
    const [params] = useSearchParams();
    const type = params.get('type')
    const { floor, room, setRoom } = useContext(VrContext)
    if (type === 'town-house') {
        switch (floor) {
            case 'ground':
                return <TwonGround />
            case 'first':
                return <TownFirst />
            case 'second':
                return <TwonSecond />

            default:
                return <TwonGround />

        }

    } else {
        switch (floor) {
            case 'ground':
                return <TwinGround />
            case 'first':
                return <TwinFirst />

            default:
                return <TwinGround />

        }

    }
}
