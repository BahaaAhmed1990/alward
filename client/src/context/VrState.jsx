import { createContext, useEffect, useState } from "react";
import { twinData } from '../assets/data/twin'
import { townData } from '../assets/data/town'
import { useHref } from "react-router-dom";

export const VrContext = createContext();

export default function VrState({ children }) {
    const href = useHref();
    console.log('href', href)
    const [type, setType] = useState('twin-house')

    const [floor, setFloor] = useState('ground');
    const [room, setRoom] = useState('entry');
    const [typeData, setTypeData] = useState({});
    const [roomsData, setRoomsData] = useState([]);
    const [planOpen, setPlanOpen] = useState(false);

    useEffect(() => {
        if (href.includes('twin-house')) {
            setType('twin-house')
        } else {
            setType('town-house')
        }
        switch (type) {
            case 'twin-house':
                setTypeData(twinData)
                break;

            case 'town-house':
                setTypeData(townData)
                break;

            default:
                setTypeData(twinData)
                break;

        }
        if (Object.keys(typeData).length !== 0) {

            const { groundData, firstData, secondData } = typeData;
            // console.log(firstData)
            switch (floor) {
                case 'ground':
                    setRoomsData(groundData)
                    setRoom('entry');
                    break;
                case 'first':
                    setRoomsData(firstData)
                    setRoom('entry');
                    break;
                case 'second':
                    setRoomsData(secondData)
                    setRoom('entry');
                    break;
                default:
                    setRoomsData(groundData)
                    setRoom('entry');
                    break;
            }
        }


    }, [type, floor, typeData, href])

    return (
        <VrContext.Provider value={{
            type,
            setType,
            floor,
            setFloor,
            room,
            setRoom,
            roomsData,
            setRoomsData,
            planOpen,
            setPlanOpen
        }}>
            {children}
        </VrContext.Provider>
    )
}