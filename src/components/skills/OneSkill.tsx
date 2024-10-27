

interface ONE_SKILL_PROPS {
    skill: string;
}

const ONE_SKILL = ({ skill } : ONE_SKILL_PROPS) => {


    return (
        <div className="skills">
            <img src={`./assets/icons/${skill}.webp`} alt={skill} className="skillsIcons skillsVierkant"/>
        </div>
    );
};

export default ONE_SKILL;