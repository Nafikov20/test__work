import {Content} from "./content/Content";
import {Consultation} from "./consultation/Consultation";
import "./MainContent.css"

export const MainContent = () => {
    return (
        <div className="main__content">
            <Content />
            <Consultation />
        </div>
    );
};