import React, { useState } from "react";
import { IDataContext } from "../types";
import { PROJECTS, PROJECTS_EN, SERVICEBOXES, SERVICEBOXES_EN, SKILLS } from "./Constants";




export const DataContext = React.createContext<IDataContext>({SERVICEBOXES: {classnames: [], boxes: []}, SKILLS: [], PROJECTS: [], LANGUAGE: "", SETLANGUAGE: () => {}});

export const DataProvider = ({ children }: {children : React.ReactNode}) => {
    const [LANGUAGE, SETLANGUAGE] = useState<string>("nl"); 

    return (
        <DataContext.Provider value={{SERVICEBOXES: LANGUAGE === "nl" ? SERVICEBOXES : SERVICEBOXES_EN, SKILLS: SKILLS, PROJECTS: LANGUAGE === "nl" ? PROJECTS : PROJECTS_EN, LANGUAGE: LANGUAGE, SETLANGUAGE: SETLANGUAGE}}>
            {children}
        </DataContext.Provider>
    )
};