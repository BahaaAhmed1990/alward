
export default function MenuList({ children, lang }) {
    return (
        <ul
            className={`flex flex-col justify-between gap-2 items-center md:flex-row md:gap-1`}
            dir={`${lang === 'AR' ? 'rtl' : ''}`}
        >
            {children}
        </ul>
    )
}
