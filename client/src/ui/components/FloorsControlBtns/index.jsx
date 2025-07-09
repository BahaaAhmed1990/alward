
import GroundBtn from './GroundBtn'
import FirstBtn from './FirstBtn'
import SecondBtn from './SecondBtn'
import { useContext } from 'react';
import { VrContext } from '../../../context/VrState';

export default function FloorsControlBtns({ floor, setFloor }) {
    const { type } = useContext(VrContext)
    console.log('type', type)
    return (
        <div id='floorsBtns-container' className='w-fit grow-[4] pt-3 flex flex-col gap-2 items-start pointer-events-auto'>
            <GroundBtn floor={floor} setFloor={setFloor} />
            <FirstBtn floor={floor} setFloor={setFloor} />
            {
                type === 'twin-house' ? null :
                    <SecondBtn floor={floor} setFloor={setFloor} />
            }
        </div>
    )
}
