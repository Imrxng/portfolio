import MY_SKILLS from "../skills/MySkills_en";
import MY_WORK from "../projects/MyWork_en";
import MY_SERVICES from "../services/MyServices_en";
import CONTACT_ME from "../ContactMe_en";
import INTRO_EN from "../Intro_en";
import ABOUT_ME_EN from "../AboutMe_en";


const MAIN_EN = () => {


    return (
        <main>
            <INTRO_EN/>
            <ABOUT_ME_EN/>
            <MY_SERVICES/>
            <MY_SKILLS/>
            <MY_WORK/>
            <CONTACT_ME/>
        </main>
    );
};

export default MAIN_EN;