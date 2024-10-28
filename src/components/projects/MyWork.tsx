import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import ONE_PROJECT from "./OneProject";


const MY_WORK = () => {

    const { PROJECTS, LANGUAGE } = useContext(DataContext);


    return (
        <>
            <div id="mywork">
                {LANGUAGE === 'nl' ?
                    <h1>Mijn <span>Projecten</span></h1>
                    :
                    <h1>My <span>Projects</span></h1>
                }
                <div id="allProjects">
                    {PROJECTS.map((project, index) => <ONE_PROJECT project={project} index={index} key={index} />)}
                </div>
            </div>
            {LANGUAGE === 'nl' ?
                <p style={{ padding: "10px", fontSize: "small" }}><span>* </span>Er kan een vertraging plaatsvinden bij bezoek website.</p>
                :
                <p style={{ padding: "10px", fontSize: "small" }}><span>* </span>There may be a delay when visiting the website.</p>
            }
        </>

    );
};

export default MY_WORK;