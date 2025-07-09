import { useTranslation } from "react-i18next";
import { Button } from "../../primitives/Button";
import { GrNotes } from "react-icons/gr";


export default function Sales({ setContactFormOpen }) {
  const { t } = useTranslation();
  function handleClick() {
    // console.log("sales clicked");
    setContactFormOpen(true)
  }
  return (
    <div className="w-4/5 md:w-auto">
      <Button
        label={t('sales')}
        intent="navBtn"
        icon={<GrNotes />}
        handleClick={() => handleClick()}
      />
    </div>
  );
}
