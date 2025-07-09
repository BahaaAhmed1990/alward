
import { useTranslation } from 'react-i18next';
import { Button } from '../../primitives/Button'

export default function GroundBtn({ floor, setFloor }) {
  const { t } = useTranslation()
  function handleClickGroundFloor() {
    console.log('ground')
    setFloor('ground');
  }
  return (
    <Button label={t('groundBtn')} intent={'primary'} handleClick={handleClickGroundFloor} active={floor === 'ground' ? true : false} />
  )
}

