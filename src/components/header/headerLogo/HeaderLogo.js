import {Logo} from "../../resources/images/Logo";
import "./HeaderLogo.css"

export const HeaderLogo = () => {
    return (
        <div className="header__logo">
            <Logo />
            <div className="header__logo-title">крупный интегратор CRM <br/> в Росcии и ещё 8 странах</div>
        </div>
    );
};