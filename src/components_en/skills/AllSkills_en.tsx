import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import ONE_SKILL from "./OneSkill_en";


const ALL_SKILLS = () => {
    
    const { SKILLS } = useContext(DataContext);

    return (
        <div id="allSkills">
            {SKILLS.map((skill, index) => <ONE_SKILL key={index} skill={skill} />)}
        </div>
    );
};

export default ALL_SKILLS;