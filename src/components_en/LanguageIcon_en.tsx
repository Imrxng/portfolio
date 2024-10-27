import { useContext } from "react";
import { DataContext } from "../context/DataContext";

interface LanguageIconProps {
    language: string
};

const LANGUAGE_ICON = ({ language } : LanguageIconProps) => {

    const { LANGUAGE, SETLANGUAGE} = useContext(DataContext);

    return (
        <img id="language-icon" onClick={() => LANGUAGE === "nl" ? SETLANGUAGE("en") : SETLANGUAGE("nl")} src={`./assets/icons/${language === "nl" ? "dutch" : "english" }.webp`} alt={`${language === "nl" ? "dutch" : "english" }flag`}/>
    );
};

export default LANGUAGE_ICON;