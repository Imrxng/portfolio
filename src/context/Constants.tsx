import { IServicesBoxes, Project } from "../types";

export const SKILLS: string[] = [
    "javascript",
    "typescript",
    "html",
    "css",
    "icon-react",
    "react-native",
    "next.js",
    "mongo",
    "csharp",
    "icon-api",
    "sql",
    "s3",
    "cy",
    "testing"
]

export const SERVICEBOXES: IServicesBoxes = {
    classnames: [
        {
            name: 'fa-solid fa-code bigicons'
        },
        {
            name: 'fa-solid fa-database bigicons'
        },
        {
            name: 'fa-solid fa-screwdriver-wrench bigicons'
        }
    ],
    boxes: [
        {
            title: 'Interactive frontend development',
            listItems: ['Creëren van responsieve websites.', 'HTML, CSS & JavaScript.', 'Websiteprestaties en toegankelijkheidsprestaties.']            
        },
        {
            title: 'Backend-ontwikkeling',
            listItems: ['Ontwikkeling van schaalbare en robuuste server-side applicaties.', 'Ervaring met Node.js (express).', 'Databasebeheer en optimalisatie (SQL, MongoDB).', 'Beveiliging en gegevensbescherming.']            
        },
        {
            title: 'Onderhoud en technische support',
            listItems: ['Regelmatige website-updates.', 'Bijhouden van websiteprestaties.', '24/7 ondersteuning.', 'Oplossen van technische problemen en bugfixes.']            
        }
    ]
};


export const PROJECTS: Project[] = [
    {
        link: 'https://adminui-jk6j.onrender.com/login',
        caption: 'Admin UI (Express)'
    },
    {
        link: 'https://imrxng.github.io/fitimproving/',
        caption: 'Webshop (HTML & CSS)'
    },
    {
        link: 'https://github.com/Imrxng/librarycsharp',
        caption: 'Bibliotheek (C#)'
    },
    {
        link: 'https://wpl-project.onrender.com/projects',
        caption: 'Kaart spel (Express)'
    },
    {
        link: 'https://github.com/Imrxng/project_api_ontwikkeling',
        caption: 'Project API (ASP.NET)'
    },
    {
        link: 'https://drive.google.com/file/d/1vHg0Tu6Bp_BmW0OEjPGKmzarJten00ks/view?usp=sharing',
        caption: 'Avatar (React Native)'
    },
    {
        link: 'Teach-Me',
        caption: 'Teach-Me (Grote project)'
    },
    {
        link: 'https://rijschool.vercel.app/',
        caption: 'Rijschool (Next.js)'
    }
]


export const SERVICEBOXES_EN: IServicesBoxes = {
    classnames: [
        {
            name: 'fa-solid fa-code bigicons'
        },
        {
            name: 'fa-solid fa-database bigicons'
        },
        {
            name: 'fa-solid fa-screwdriver-wrench bigicons'
        }
    ],
    boxes: [
        {
            title: 'Interactive frontend development',
            listItems: ['Creating responsive websites.', 'HTML, CSS & JavaScript.', 'Website performance and accessibility.']            
        },
        {
            title: 'Backend development',
            listItems: ['Development of scalable and robust server-side applications.', 'Experience with Node.js (express).', 'Database management and optimization (SQL, MongoDB).', 'Security and data protection.']            
        },
        {
            title: 'Maintenance and technical support',
            listItems: ['Regular website updates.', 'Monitoring website performance.', '24/7 support.', 'Resolution of technical issues and bug fixes.']            
        }
    ]
};


export const PROJECTS_EN: Project[] = [
    {
        link: 'https://adminui-jk6j.onrender.com/login',
        caption: 'Admin UI (Express)'
    },
    {
        link: 'https://imrxng.github.io/fitimproving/',
        caption: 'Webshop (HTML & CSS)'
    },
    {
        link: 'https://github.com/Imrxng/librarycsharp',
        caption: 'Library (C#)'
    },
    {
        link: 'https://wpl-project.onrender.com/projects',
        caption: 'Card Game (Express)'
    },
    {
        link: 'https://github.com/Imrxng/project_api_ontwikkeling',
        caption: 'Project API (ASP.NET)'
    },
    {
        link: 'https://drive.google.com/file/d/1vHg0Tu6Bp_BmW0OEjPGKmzarJten00ks/view?usp=sharing',
        caption: 'Avatar (React Native)'
    },
    {
        link: 'Teach-Me',
        caption: 'Teach-Me (Big project)'
    },
    {
        link: 'https://rijschool.vercel.app/',
        caption: 'Driving School (Next.js)'
    }
]
