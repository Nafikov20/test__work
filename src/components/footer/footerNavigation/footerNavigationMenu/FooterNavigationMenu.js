import "./FooterNavigationMenu.css"
export const FooterNavigationMenu = () => {
    return (
        <div className="footer__nav-menu">
        <span>Меню</span>
            <div className="footer__nav-menu-list">
                <div className="footer__nav-menu-item">
                    <a href="">Расчёт стоимости</a>
                </div>
                <div className="footer__nav-menu-item">
                    <a href="">Услуги</a>
                </div>
                <div className="footer__nav-menu-item">
                    <a href="">Виджеты</a>
                </div>
                <div className="footer__nav-menu-item">
                    <a href="">Интеграции</a>
                </div>
                <div className="footer__nav-menu-item">
                    <a href="">Наши клиенты</a>
                </div>
                <div className="footer__nav-menu-item">
                    <a href="">Кейсы</a>
                </div>
                <div className="footer__nav-menu-item">
                    <a href="">Благодарственные письма</a>
                </div>
                <div className="footer__nav-menu-item">
                    <a href="">Сертификаты</a>
                </div>
                <div className="footer__nav-menu-item">
                    <a href="">Блог на Youtube</a>
                </div>
                <div className="footer__nav-menu-item">
                    <a href="">Вопрос / Ответ</a>
                </div>
            </div>
        </div>
    );
};