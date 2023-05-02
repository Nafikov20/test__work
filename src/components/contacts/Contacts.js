
import "./HeaderContacts.css"
import {PhoneNum} from "./phoneNum/PhoneNum";
import {Tg} from "../resources/images/Tg";
import {Bell} from "../resources/images/Bell";
import {WhatsApp} from "../resources/images/WhatsApp";

export const Contacts = () => {
    return (
        <div className="header__contacts">
                <PhoneNum />
            <div className="header__contacts-logo">
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
        </div>
    );
};