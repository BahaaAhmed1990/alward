
import { useTranslation } from 'react-i18next';
import { Button } from '../../primitives/Button';

export default function FirstBtn({ floor, setFloor }) {
    const { t } = useTranslation()
    function handleClickFirstFloor() {
        console.log('first')
        setFloor('first');
    }
    return (
        <Button label={t('firstBtn')} intent={'primary'} handleClick={handleClickFirstFloor} active={floor === 'first' ? true : false} />
    )
}
