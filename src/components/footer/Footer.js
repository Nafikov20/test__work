import {FooterNavigationCompany} from "./footerNavigation/footerNavigationCompany/FooterNavigationCompany";
import {FooterNavigationMenu} from "./footerNavigation/footerNavigationMenu/FooterNavigationMenu";
import {FooterNavigationContacts} from "./footerNavigation/footerNavigationContacts/FooterNavigationContacts";
import "./Footer.css"



export const Footer = () => {
    return (
        <div className="footer">
            <footer className="footer__component">
                <FooterNavigationCompany />
                <FooterNavigationMenu />
                <FooterNavigationContacts/>
            </footer>
            <div className="personal__data">
                <div className="personal__data-item">©WELBEX 2022. Все права защищены.</div>
                <a href="#">
                    <div className="personal__data-item">Политика конфиденциальности</div>
                </a>
            </div>
        </div>
    );
};