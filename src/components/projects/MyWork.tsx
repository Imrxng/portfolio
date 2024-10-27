import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import ONE_PROJECT from "./OneProject";


const MY_WORK = () => {

    const { PROJECTS } = useContext(DataContext);
    
    
    return (
        <>
            <div id="mywork">
                <h1>Mijn <span>Projecten</span></h1>
                <div id="allProjects">
                    {PROJECTS.map((project, index) => <ONE_PROJECT project={project} index={index} key={index}/>)}
                </div>
            </div>
            <p style={{padding: "10px", fontSize: "small"}}><span>* </span>Er kan een vertraging plaatsvinden bij bezoek website.</p>
        </>
            
    );
};

export default MY_WORK;