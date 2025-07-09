
import { useTranslation } from "react-i18next";
import NavLink from "../../primitives/NavLink";
import { IoInvertModeSharp } from "react-icons/io5";

export default function Mode() {
  const { t } = useTranslation()

  return (
    <NavLink
      intent="iconLink"
      label={t('mode')}
      icon={<IoInvertModeSharp />}
    />
  );
}
