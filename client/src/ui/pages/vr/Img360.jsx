import React, { useContext, useState } from 'react'
import { VrContext } from '../../../context/VrState'
import { useEffect } from 'react';


export default function Img360() {
    const { room, roomsData } = useContext(VrContext);
    const [iframeSrc, setIframeSrc] = useState('');


    useEffect(() => {

        if (roomsData.length !== 0) {
            const result = roomsData.filter((roomData) => roomData.id === room);
            // console.log(result[0].iframe)
            setIframeSrc(result[0].iframe);
        }
    }, [roomsData, iframeSrc, room])

    // console.log(room);
    // console.log(iframeSrc)

    return (
        <div className='absolute w-full h-full z-10' >
            <iframe width="100%" height="100%" frameBorder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowFullScreen scrolling="no" src={iframeSrc}></iframe>
        </div>
    )
}
