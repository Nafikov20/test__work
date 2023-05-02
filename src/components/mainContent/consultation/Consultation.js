import "./Consultation.css"
export const Consultation = () => {
    return (
        <div className="consultation__content">
            <div className="consultation__content-title">
                <p>
                    Вместе с <span>БЕСПЛАТНОЙ <br/>КОНСУЛЬТАЦИЕЙ</span> мы дарим:
                </p>
            </div>
            <div className="consultation__list">
                <div className="consultation__item">
                    <div></div>
                    <span>ВИДЖЕТЫ</span>
                    <p>30 готовых <br/>решений</p>
                </div>
                <div className="consultation__item">
                    <div></div>
                    <span>DASHBOARD</span>
                    <p>с показателями<br/>вашего бизнеса</p>
                </div>
                <div className="consultation__item">
                    <div></div>
                    <span>SKYPE АУДИТ</span>
                    <p>отдела продаж<br/> и CRM системы</p>
                </div>
                <div className="consultation__item">
                    <div></div>
                    <span>35 ДНЕЙ</span>
                    <p>использования <br/>CRM</p>
                </div>
            </div>
            <button>Получить консультацию</button>
        </div>
    );
};