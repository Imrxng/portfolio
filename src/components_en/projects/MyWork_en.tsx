import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import ONE_PROJECT from "./OneProject_en";


const MY_WORK = () => {

    const { PROJECTS } = useContext(DataContext);
    
    
    return (
        <>
            <div id="mywork">
                <h1>My <span>Projects</span></h1>
                <div id="allProjects">
                    {PROJECTS.map((project, index) => <ONE_PROJECT project={project} index={index} key={index}/>)}
                </div>
            </div>
            <p style={{padding: "10px", fontSize: "small"}}><span>* </span>There may be a delay when visiting the website.</p>
        </>
            
    );
};

export default MY_WORK;