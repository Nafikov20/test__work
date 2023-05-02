import "./HeaderNavigation.css"
export const HeaderNavigation = () => {
    return (
        <div className="header__navigation">
            <div className="header__navigation-link">
                <a href="src/components/header/headerNavigation" className="header__nav-link">Услуги</a>
            </div>
            <div className="header__navigation-link">
                <a href="src/components/header/headerNavigation" className="header__nav-link">Виджеты</a>
            </div>
            <div className="header__navigation-link">
                <a href="src/components/header/headerNavigation" className="header__nav-link">Интеграции</a>
            </div>
            <div className="header__navigation-link">
                <a href="src/components/header/headerNavigation" className="header__nav-link">Кейсы</a>
            </div>
            <div className="header__navigation-link certificates">
                <a href="src/components/header/headerNavigation" className="header__nav-link">Сертификаты</a>
            </div>
        </div>
    );
};