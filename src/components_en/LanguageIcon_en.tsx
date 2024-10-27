import { useContext } from "react";
import { DataContext } from "../context/DataContext";

interface LanguageIconProps {
    language: string
};

const LANGUAGE_ICON = ({ language } : LanguageIconProps) => {

    const { LANGUAGE, SETLANGUAGE} = useContext(DataContext);
        console.log(language);
        console.log(LANGUAGE);
    const HandleClick: React.MouseEventHandler<HTMLImageElement> = () => {
        
        
        
        if (LANGUAGE === "nl" && language === "en") {
            SETLANGUAGE("en");
        }  if (LANGUAGE === "en" && language === "nl") {
            SETLANGUAGE("nl");
        }
    };

    return (
        <img id="language-icon" onClick={HandleClick} src={`./assets/icons/${language === "nl" ? "dutch" : "english" }.webp`} alt={`${language === "nl" ? "dutch" : "english" }flag`}/>
    );
};

export default LANGUAGE_ICON;