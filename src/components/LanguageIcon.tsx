
interface LanguageIconProps {
    language: string
};

const LANGUAGE_ICON = ({ language } : LanguageIconProps) => {


    return (
        <a href=""
            ><img src={`./assets/icons/${language === "nl" ? "dutch" : "english" }.webp`} alt={`${language === "nl" ? "dutch" : "english" }flag`}
            />
        </a>
    );
};

export default LANGUAGE_ICON;