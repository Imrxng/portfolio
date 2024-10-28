import { useContext } from "react";
import { DataContext } from "../context/DataContext";


const ABOUT_ME = () => {

    const { LANGUAGE } = useContext(DataContext);

    return (
        <div id="aboutme">
            <article id="aboutmetext">
                {
                    LANGUAGE === 'nl'
                    ?
                    <>
                        <h1>Over <span>Mij</span></h1>
                        <p>Ik ben een gedreven full-stack developer die graag nieuwe uitdagingen aangaat en altijd op zoek is naar manieren om mijn vaardigheden te verbeteren. Met uitgebreide ervaring in API-ontwikkeling, C#, object-georiënteerd programmeren (OOP), JavaScript, TypeScript, MySQL, MongoDB, Git en beveiliging, lever ik kwalitatieve oplossingen. Daarnaast werk ik met frameworks zoals React, Express, Next.js, en React Native. Zowel in een Scrum- of Agile-team als zelfstandig zorg ik ervoor dat het werk op tijd en naar tevredenheid van de klant wordt voltooid. U kunt op mij rekenen voor inzet, klantgerichtheid, en het leveren van hoogwaardige oplossingen! </p>
                    </>
                    :
                    <>
                        <h1>
                            About <span>Me</span>
                        </h1>
                        <p>
                            I am a driven full-stack developer who enjoys taking on new challenges
                            and is always looking for ways to improve my skills. With extensive
                            experience in API development, C#, object-oriented programming (OOP),
                            JavaScript, TypeScript, MySQL, MongoDB, Git, and security, I deliver
                            quality solutions. Additionally, I work with frameworks such as React,
                            Express, Next.js, and React Native. Whether in a Scrum or Agile team
                            or working independently, I ensure that the work is completed on time
                            and to the satisfaction of the client. You can count on me for
                            dedication, customer focus, and delivering high-quality solutions!
                        </p>
                    </>
                }

            </article>
            <article>
                <img src="./assets/images/deco1.webp" alt="deco_about_me" />
            </article>
        </div>
    );
};

export default ABOUT_ME;