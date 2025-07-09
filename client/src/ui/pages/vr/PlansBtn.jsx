import { useContext } from "react";
import { VrContext } from "../../../context/VrState";
import { Button } from "../../primitives/Button";
import { SiAffinitydesigner } from "react-icons/si";

export default function PlansBtn() {
    const { planOpen, setPlanOpen } = useContext(VrContext);

    function handlePlanOpen() {
        setPlanOpen(!planOpen)
    }
    console.log(planOpen)
    return (
        <div className="flex justify-end pointer-events-auto">
            <div className="w-11">
                <Button icon={<SiAffinitydesigner />} intent={'primary'} handleClick={handlePlanOpen} />
            </div>
        </div>
    )
}
