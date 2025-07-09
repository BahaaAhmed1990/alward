
import { FiMenu } from "react-icons/fi";
import NavLink from "../../primitives/NavLink";
import { useTranslation } from "react-i18next";

export default function MenuBtn() {
  const { t } = useTranslation();

  return (
    <NavLink
      intent="iconLink"
      label={t('menu')}
      icon={<FiMenu />}
    />
  );
}
