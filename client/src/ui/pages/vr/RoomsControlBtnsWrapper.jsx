import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { VrContext } from '../../../context/VrState'
import { useTranslation } from 'react-i18next'

export default function RoomsControlBtnsWrapper() {
    const { setRoom, roomsData } = useContext(VrContext);
    const { t } = useTranslation();

    function handleClickRoomBtn(e) {
        e.preventDefault();
        e.stopPropagation()
        let elem = e.target;
        let room = elem.getAttribute('data-name');

        setRoom(room)
    }
    return (
        <div className='fixed h-12 bottom-[10%] left-1/2 -translate-x-1/2 w-[95%] transition-all overflow-x-scroll z-[32] pointer-events-auto md:overflow-y-hidden  md:w-full  md:static md:translate-x-0 lg:overflow-y-hidden lg:overflow-x-auto'>
            <ul className='flex justify-start gap-2 list-none h-fit pointer-events-auto pl-20 md:justify-center'>
                {
                    roomsData && roomsData.length ? roomsData.map((dataItem, index) => (
                        <li key={dataItem.id} data-name={dataItem.name}>
                            <Link onClick={handleClickRoomBtn} data-name={dataItem.id} className='whitespace-nowrap h-full block bg-brand_100 text-black rounded-lg px-2 py-1 capitalize'>{t(dataItem.name)}</Link>
                        </li>
                    )) : null
                }
            </ul>
        </div>
    )
}
