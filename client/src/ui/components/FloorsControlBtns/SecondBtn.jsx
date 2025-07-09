
import { Button } from '../../primitives/Button';
import { useTranslation } from 'react-i18next';


export default function SecondBtn({ floor, setFloor }) {
  const { t } = useTranslation()
  function handleClickSecondFloor() {
    // console.log('second')
    setFloor('second');
  }
  return (
    <Button label={t('secondBtn')} intent={'primary'} handleClick={handleClickSecondFloor} active={floor === 'second' ? true : false} />
  )
}
