import {PhoneNum} from "../../../contacts/phoneNum/PhoneNum";
import {Tg} from "../../../resources/images/Tg";
import {Bell} from "../../../resources/images/Bell";
import {WhatsApp} from "../../../resources/images/WhatsApp";
import "./FooterNavigationContacts.css"
export const FooterNavigationContacts = () => {
    return (
        <div className="footer__nav-cont">
            <span>Контакты</span>
            <div className="footer__nav-cont-list">
                <PhoneNum/>
                <div className="footer__nav-cont-social">
                    <a href="#">
                        <Tg />
                    </a>
                    <a href="#">
                        <Bell />
                    </a>
                    <a href="#">
                        <WhatsApp />
                    </a>
                </div>
                <div className="footer__nav-cont-address">
                    <span>Москва, Путевой проезд 3с1, к 902</span>
                </div>
            </div>
        </div>
    );
};