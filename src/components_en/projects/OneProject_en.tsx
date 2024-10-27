import { Project } from "../../types";

interface ONE_PROJECTS_PROPS {
    project: Project,
    index: number
}

const ONE_PROJECT = ({ project, index } : ONE_PROJECTS_PROPS) => {

    return (
        <a href={project.link} target="_blank">
            <figure className={`myworkfigure myworkfigure${index + 1}`}>
                <figcaption>{project.caption}</figcaption>
            </figure>
        </a>
    );
};

export default ONE_PROJECT;