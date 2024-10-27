
const CONTACT = () => {
    return (
        <>
            <main id="maincontact">
                <h1>Contacteer <span>Me</span></h1>
                <section id="formAndMap">
                    <form action="/" method="post" id="contactForm">
                        <label htmlFor="name">Naam:</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            defaultValue="<% if (post) { %><%= post.name %><% } %>" 
                        />
                        <label htmlFor="mail">Mail:</label>
                        <input 
                            type="text" 
                            name="mail" 
                            id="mail" 
                            defaultValue="<% if (post) { %><%= post.mail %><% } %>" 
                        />
                        <label htmlFor="text">Vraag:</label>
                        <textarea name="text" id="text" cols={30} rows={10}></textarea><br />
                        <button className="Button" id="submitButton" type="submit">
                            Verzenden <i className="fa-regular fa-paper-plane" id="submitIcon"></i>
                        </button>
                    </form>
                    <div id="map"></div>
                </section>
                {/* 
                    Uncomment the following code to display a message if present.
                    <% if (message) { %>
                        <p id="message" <% if (message === "Your message has been successfully sent." || message === "Uw bericht is succesvol verzonden.") { %> style="color: #dcf763" <% } %>><%= message %></p>
                    <% }; %> 
                */}
                <section id="contactmeContactPage">
                    <div className="contactemoj">
                        <i className="fa-regular fa-envelope"></i>
                        <a href="mailto:imran.ghaddoura@student.ap.be">imran.ghaddoura@student.ap.be</a>
                    </div>
                    <div className="contactemoj">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>België - Antwerpen</p>
                    </div>
                    <div className="contactemoj">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        <a href="tel:+32489699900">+32489699900</a>
                    </div>
                </section>
            </main>
        </>
    );
};

export default CONTACT;
