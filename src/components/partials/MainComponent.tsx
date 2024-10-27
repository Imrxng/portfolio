import ABOUT_ME from "../AboutMe";
import INTRO from "../Intro";
import MY_SKILLS from "../skills/MySkills";
import MY_WORK from "../projects/MyWork";
import MY_SERVICES from "../services/MyServices";
import CONTACT_ME from "../ContactMe";


const MAIN = () => {


    return (
        <main>
            <INTRO/>
            <ABOUT_ME/>
            <MY_SERVICES/>
            <MY_SKILLS/>
            <MY_WORK/>
            <CONTACT_ME/>
        </main>
    );
};

export default MAIN;