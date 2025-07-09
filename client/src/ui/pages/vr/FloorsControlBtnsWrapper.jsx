
import { useContext } from 'react';
import FloorsControlBtns from '../../components/FloorsControlBtns';
import { VrContext } from '../../../context/VrState';

export default function FloorsControlBtnsWrapper() {
    const { setFloor } = useContext(VrContext);
    return (
        <FloorsControlBtns setFloor={setFloor} />
    )
}
