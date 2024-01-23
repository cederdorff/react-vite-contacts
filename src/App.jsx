import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        async function fetchContacts() {
            const response = await fetch("http://localhost:3000/contacts");
            const data = await response.json();
            setContacts(data);
        }
        fetchContacts();
    }, []);

    return (
        <>
            <h1>Contacts</h1>
            <section className="contacts">
                {contacts.map(contact => (
                    <article key={contact.id}>
                        <h2>
                            {contact.first} {contact.last}
                        </h2>
                        <img src={contact.avatar} alt="" />
                    </article>
                ))}
            </section>
        </>
    );
}

export default App;
