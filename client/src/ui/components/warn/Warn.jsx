import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Warn({ lang }) {
    const { t } = useTranslation();
    return (
        <p className={`absolute ${lang === 'AR' ? 'md:right-0' : 'md:left-0'} left-0 bottom-0 w-[408px] text-[9px] text-slate-500`}>{t('warn')}</p>
    )
}
