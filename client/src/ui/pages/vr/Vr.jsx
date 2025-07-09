import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalState';
// import ContactFormWrapper from '../../components/contact-form/ContactFormWrapper';
import Interface from '../../components/interface';
import Header from '../../components/interface/Header';
import ImgView from '../../primitives/ImgView';
// import Location from '../../components/route/Location';
import Menu from './Menu';
import Body from '../../components/interface/Body';
import Footer from '../../components/interface/Footer';
import ContentWrapper from '../../components/content/ContentWrapper';
import logo from "/orablack.svg";
import VrState from '../../../context/VrState';
import FloorsControlBtnsWrapper from './FloorsControlBtnsWrapper';
import BodyWrapper from './BodyWrapper';
import RoomsControlBtnsWrapper from './RoomsControlBtnsWrapper';
import Img360 from './Img360';
import PlansBtn from './PlansBtn';
import Plan from './Plan';

export default function Vr() {
    const { lang, theme } = useContext(GlobalContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <VrState>
            <div className={`${theme === "dark" ? "theme-dark" : ''} ${lang === 'AR' ? 'font-Arabic' : ''}`}>
                <Plan />
                <Interface>
                    <Header>
                        {/* logo */}
                        <div id='logo-cont' className={` flex items-center grow justify-start gap-1 ${lang === 'AR' ? 'flex-row-reverse' : ''} md:grow-0 md:justify-center`}>
                            <ImgView src={logo} intent="logo" lang={lang} />
                        </div>

                        {/* menu */}
                        <div id='menu-cont' className="flex justify-center items-center grow-0 w-10 md:grow-0 md:w-auto">
                            <Menu
                                menuOpen={menuOpen} lang={lang} setMenuOpen={setMenuOpen}
                            />
                        </div>
                    </Header>


                    {/* body */}
                    <Body>
                        <BodyWrapper>
                            <FloorsControlBtnsWrapper />
                            <PlansBtn />
                            <RoomsControlBtnsWrapper />
                        </BodyWrapper>
                    </Body>
                    <Footer lang={lang} />
                </Interface>
                <ContentWrapper>
                    <Img360 />
                </ContentWrapper>
            </div>
        </VrState >
    )
}
