import { Iboxes } from "../../types";

interface SERVICE_BOX_PROPS {
    boxes: Iboxes,
    className: string
}

const SERVICE_BOX = ({ boxes, className} : SERVICE_BOX_PROPS) => {


    return (
        <div className="servicesBox">
            <i className={className}></i>
            <h2>{boxes.title}</h2>
            <ul>
                {boxes.listItems.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};

export default SERVICE_BOX;