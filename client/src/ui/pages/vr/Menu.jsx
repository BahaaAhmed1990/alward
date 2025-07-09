
import { HiMenuAlt2 } from "react-icons/hi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useTranslation } from "react-i18next";
import MenuList from "../../components/menu/MenuList";
import FullScreen from "../../components/menu/FullScreen";
import LanguageDropMenu from "../../components/menu/LanguageDropMenu";
import TypeMenu from "../../components/menu/TypeMenu";


export default function Menu({ menuOpen, setMenuOpen, lang }) {

  const { t } = useTranslation();
  function handleClick() {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <div className='md:hidden'>
        {
          menuOpen ?
            <div className="flex flex-col  items-center justify-center text-slate-300">
              <MdKeyboardArrowUp size={20}
                onClick={handleClick} />
              <p className="text-xs">
                {t('menuHeader')}
              </p>

            </div>
            : <HiMenuAlt2
              size={32}
              className="text-slate-300 mr-1 block md:hidden"
              onClick={handleClick}
            />
        }

      </div>
      <div className={`${menuOpen ? "translate-x-0" : "translate-x-[700px]"} transition-all  absolute w-full top-16 left-0 z-[53] rounded-lg  bg-brand h-fit  text-slate-300 py-5 md:translate-x-0 md:static md:py-0`}>
        <h3 className="text-center mb-4r md:hidden">
          {t('menuHeader')}
        </h3>
        <MenuList lang={lang}>
          <TypeMenu />
          <LanguageDropMenu />
          <FullScreen />
          {/* <MoodDropMenu /> */}
          {/* <Sales setContactFormOpen={setContactFormOpen} /> */}
          {/* <MenuDropDown /> */}
        </MenuList>
        <p className="text-slate-300 text-[8px] mt-4 text-center md:hidden">{t('rootPara')}</p>
      </div>
    </>
  );
}
