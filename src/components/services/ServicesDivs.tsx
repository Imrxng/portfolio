import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import SERVICE_BOX from "./ServiceBox";


const SERVICES_DIVS = () => {

    const { SERVICEBOXES } = useContext(DataContext);
    
    return (
        <div id="myservicesdivs">
            {SERVICEBOXES.boxes.map((item, index ) => <SERVICE_BOX key={index} boxes={item} className={SERVICEBOXES.classnames[index].name} />)}
        </div>
    );
};

export default SERVICES_DIVS;