
const Portfolio = () => {
    return (
        <>
            <header id="#top">
                <p id="bigName">Imran <span>Ghaddoura</span></p>
                <nav>
                <a href="#aboutme">Over</a>
                <a href="#myservices">Diensten</a>
                <a href="#myskills">Skills</a>
                <a href="#mywork">Projecten</a>
                <a href="">Contact</a>
                </nav>
                <section>
                <a href=""
                    ><img src="./assets/icons/english.webp" alt="englishflag"
                /></a>
                <a href=""
                    ><img src="./assets/icons/dutch.webp" alt="dutchflag"
                /></a>
                </section>
            </header>
                <main>
                <section id="intro">
                    <article>
                        <p id="intoTekst1">Hallo, mijn naam is</p>
                        <p className="infoTekst2">Imran <span>Ghaddoura</span>,</p>
                        <p className="infoTekst2">Ik ben een Full Stack Developer</p>
                        <div >
                            <a href="./download/CV_Imran_Ghaddoura.pdf" className="Button" download="CV_Imran_Ghaddoura.pdf">CV <i className="fa-solid fa-download"></i></a>
                            <a href="" id="talkButton">Stuur een bericht <i className="fa-regular fa-paper-plane"></i></a>
                        </div>
                    </article>
                    <article id="mezelf">
                        <img src="./assets/images/duim.webp" alt="imran"/>
                    </article>
                </section>
                <section id="aboutme">
                    <article id="aboutmetext">
                        <h1>Over <span>Mij</span></h1>
                        <p>Ik sta open voor alle werk en ben dus bereid om alles te doen. Ik wil veel nieuwe kennis opdoen en nieuwe mensen leren kennen. Ik ben een enthousiaste, leergierige hardwerkende persoon. Ik kan heel goed alleen en ook in teamverband werken. Met mijn academische basis ben ik vastberaden om mijn vaardigheden in C# (OOP en api-ontwikkeling), webontwikkeling, SQL, React, Next.js en express verder te ontwikkelen en te verfijnen in de praktijk. Op mij kunnen jullie rekenen! </p>
                    </article>
                    <article>
                        <img src="./assets/images/deco1.webp" alt=""/>
                    </article>
                </section>
                <section  id="myservices">
                    <article>
                        <h1>Mijn <span>Diensten</span></h1>
                    </article>
                    <article id="myservicesdivs">
                        <div className="servicesBox"> 
                            <i className="fa-solid fa-code bigicons"></i>
                            <h2>Interactive frontend development</h2>
                            <ul>
                                <li>Creëren van responsieve websites.</li>
                                <li>HTML, CSS & JavaScript.</li>
                                <li>Websiteprestaties en toegankelijkheidsprestaties.</li>
                            </ul>
                        </div>
                        <div className="servicesBox">
                            <i className="fa-solid fa-database bigicons"></i>
                            <h2>Backend-ontwikkeling</h2>
                            <ul>
                                <li>Ontwikkeling van schaalbare en robuuste server-side applicaties.</li>
                                <li>Ervaring met Node.js (express).</li>
                                <li>Databasebeheer en optimalisatie (SQL, MongoDB).</li>
                                <li>Beveiliging en gegevensbescherming.</li>
                            </ul>
                        </div>
                        <div className="servicesBox">
                            <i className="fa-solid fa-screwdriver-wrench bigicons"></i>
                            <h2>Onderhoud en technische support</h2>
                            <ul>
                                <li>Regelmatige website-updates.</li>
                                <li>Bijhouden van websiteprestaties.</li>
                                <li>24/7 ondersteuning.</li>
                                <li>Oplossen van technische problemen en bugfixes.</li>
                            </ul>
                        </div>
                    </article>
                </section>
                <section id="myskills">
                    <img src="./assets/images/deco2.webp" alt=""/>
                    <article>
                        <h1>Mijn <span>Skills</span></h1>
                        <div id="allSkills">
                            <div className="skills">
                                <img src="./assets/icons/javascript.webp" alt="javascript" className="skillsIcons skillsVierkant"/>
                            </div>
                            <div className="skills">
                                <img src="./assets/icons/typescript.webp" alt="typescript" className="skillsIcons skillsVierkant"/>
                            </div>
                            <div className="skills">
                                <img src="./assets/icons/html.webp" alt="html" className="skillsIcons"/>
                            </div>
                            <div className="skills"> 
                                <img src="./assets/icons/css.webp" alt="css" className="skillsIcons"/>
                            </div>
                            <div className="skills">
                                <img src="./assets/icons/icon-react.webp" alt="react" className="skillsIcons"/>
                            </div>
                            <div className="skills">
                                <img src="./assets/icons/react-native.webp" alt="react" className="skillsIcons"/>
                            </div>
                            <div className="skills">
                                <img src="./assets/icons/next.js.webp" alt="next" className="skillsIcons skillsBig"/>
                            </div>
                            <div className="skills">
                                <img src="./assets/icons/mongo.webp" alt="mongo" className="skillsIcons"/>
                            </div>
                            <div className="skills">
                                <img src="./assets/icons/csharp.webp" alt="csharp" className="skillsIcons"/>
                            </div>
                            <div className="skills">
                                <img src="./assets/icons/icon-api.webp" alt="api" className="skillsIcons skillsBig"/>
                            </div>
                            <div className="skills">
                                <img src="./assets/icons/sql.webp" alt="sql" className="skillsIcons"/>
                            </div>
                            
                        </div>
                    </article>
                </section>
                <section id="mywork">
                    <h1>Mijn <span>Projecten</span></h1>
                    <article>
                        <a href="https://adminui-jk6j.onrender.com/login" target="_blank">
                            <figure className="myworkfigure myworkfigure1">
                                <figcaption>Admin UI (Express)</figcaption>
                            </figure>
                        </a>
                        <a href="https://imrxng.github.io/fitimproving/" target="_blank">
                            <figure className="myworkfigure myworkfigure2">
                                <figcaption>Webshop (HTML & CSS)</figcaption>
                            </figure>
                        </a>
                        <a href="https://github.com/Imrxng/librarycsharp" target="_blank">
                            <figure className="myworkfigure myworkfigure3">
                                <figcaption>Bibliotheek (C#)</figcaption>
                            </figure>
                        </a>
                        <a href="https://wpl-project.onrender.com/projects" target="_blank">
                            <figure className="myworkfigure myworkfigure4">
                                <figcaption>Kaart spel (Express)</figcaption>
                            </figure>
                        </a>
                    </article>
                </section>
                <p style={{padding: "10px", fontSize: "small"}}><span>* </span>Er kan een vertraging plaatsvinden bij bezoek website.</p>
                <section id="contactme">
                    <h1>Contacteer <span>Mij</span></h1>
                    <article>
                        <div><i className="fa-regular fa-envelope"></i><a href="mailto:imran.ghaddoura@student.ap.be">imran.ghaddoura@student.ap.be</a></div>
                        <div><i className="fa-solid fa-location-dot"></i><p>België - Antwerpen</p></div>
                        <div><i className="fa-solid fa-mobile-screen-button"></i><a href="tel:+32485155865">+32485155865</a></div>
                    </article>
                </section>
            </main>
            <footer>
                <article id="socials">
                    <a href="https://github.com/Imrxng?tab=repositories" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/imran-ghaddoura-b1b778255/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </article>
                <article>
                    <p>&copy; 2024 Alle Rechten Voorbehouden.</p>
                    <p>Door <span>Imran Ghaddoura</span></p>
                </article>
                <article>
                    <a href="#top"><i className="fa-solid fa-angles-up"></i></a>
                </article>
            </footer>
        </>
    );
};

export default Portfolio;