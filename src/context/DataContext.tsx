import React from "react";
import { IDataContext } from "../types";
import { PROJECTS, SERVICEBOXES, SKILLS } from "./Constants";




export const DataContext = React.createContext<IDataContext>({SERVICEBOXES: {classnames: [], boxes: []}, SKILLS: [], PROJECTS: []});

export const DataProvider = ({ children }: {children : React.ReactNode}) => {

    return (
        <DataContext.Provider value={{SERVICEBOXES: SERVICEBOXES, SKILLS: SKILLS, PROJECTS: PROJECTS}}>
            {children}
        </DataContext.Provider>
    )
};