import {HeaderLogo} from "./headerLogo/HeaderLogo";
import {HeaderNavigation} from "./headerNavigation/HeaderNavigation";
import {Contacts} from "../contacts/Contacts";
import "./Header.css"

export const Header = () => {
    return (
        <header className="header">
            <HeaderLogo />
            <HeaderNavigation/>
            <Contacts />
        </header>
    );
};