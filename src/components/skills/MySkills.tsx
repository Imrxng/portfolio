import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import ALL_SKILLS from "./AllSkills";


const MY_SKILLS = () => {

    const { LANGUAGE } = useContext(DataContext);

    return (
        <div id="myskills">
            <img src="./assets/images/deco2.webp" alt="deco2" />
            <div>
                {LANGUAGE === 'nl' ?
                        <h1>Mijn <span>Skills</span></h1>
                    :
                    <>
                        <h1>My <span>Skills</span></h1>
                    </>
                }
                <ALL_SKILLS />
            </div>
        </div>
    );
};

export default MY_SKILLS;