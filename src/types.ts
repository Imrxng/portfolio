export interface IServicesBoxes {
    classnames: IClassNames[];
    boxes: Iboxes[];
};

interface IClassNames {
    name: string;
};

export interface Iboxes {
    title: string,
    listItems: string[];
};

export interface Project {
    link: string,
    caption: string;
};

export interface IDataContext {
    SERVICEBOXES: IServicesBoxes;
    SKILLS: string[];
    PROJECTS: Project[];
    LANGUAGE: string;
    SETLANGUAGE: React.Dispatch<React.SetStateAction<string>>;
};