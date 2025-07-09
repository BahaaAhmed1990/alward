import { useTranslation } from 'react-i18next'
import Warn from "../warn/Warn";

export default function Footer({ lang }) {
  const { t } = useTranslation();

  return (
    <div id='footer-container' className={` relative grow flex items-end pb-2 px-2`} dir={lang === 'AR' ? 'rtl' : null}>
      <div className={`hidden text-slate-500 text-[9px] text-xs md:block md:absolute 
        ${lang === 'AR' ? 'md:left-0' : 'md:right-0'} `}>
        {t('copyRight')}
      </div>
      <Warn lang={lang} />
    </div>
  )
}
