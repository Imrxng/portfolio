import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import SERVICES_DIVS from "./ServicesDivs";


const MY_SERVICES = () => {

    const { LANGUAGE } = useContext(DataContext);

    return (
        <div id="myservices">
            <div>
                {
                    LANGUAGE === 'nl' 
                    ?
                    <h1>Mijn <span>Diensten</span></h1>
                    :
                    <h1>My <span>Services</span></h1>
                }
            </div>
            <SERVICES_DIVS/>
        </div>
    );
};

export default MY_SERVICES;