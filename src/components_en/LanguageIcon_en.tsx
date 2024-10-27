import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { circleMarker } from "leaflet";

interface LanguageIconProps {
    language: string
};

const LANGUAGE_ICON = ({ language } : LanguageIconProps) => {

    const { LANGUAGE, SETLANGUAGE} = useContext(DataContext);

    const HandleClick: React.MouseEventHandler<HTMLImageElement> = () => {
        if (LANGUAGE === "nl" && language != "dutch") {
            SETLANGUAGE("en");
        } else if (LANGUAGE === "en" && language != "english") {
            SETLANGUAGE("nl");
        }
    };

    return (
        <img id="language-icon" onClick={HandleClick} src={`./assets/icons/${language === "nl" ? "dutch" : "english" }.webp`} alt={`${language === "nl" ? "dutch" : "english" }flag`}/>
    );
};

export default LANGUAGE_ICON;