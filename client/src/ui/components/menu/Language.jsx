
import { GrLanguage } from "react-icons/gr";
import NavLink from "../../primitives/NavLink";
import { useTranslation } from "react-i18next";

export default function Language() {
  const { t } = useTranslation();

  return (
    <NavLink
      intent="iconLink"
      label={t('lang')}
      icon={<GrLanguage />}
    />
  );
}
