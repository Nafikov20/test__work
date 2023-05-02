import "./FooterNavigationCompany.css"
export const FooterNavigationCompany = () => {
    return (
        <div className="footer__nav-comp">
            <span>О компании</span>
            <div className="footer__nav-comp-list">
                <div className="footer__nav-comp-item">
                    <a href="#">Партнёрская программа</a>
                </div>
                <div className="footer__nav-comp-item">
                    <a href="#">Вакансии</a>
                </div>
            </div>
        </div>
    );
};