import ContactoHero from "../components/ContactoHero";
import ContactoInfo from "../components/ContactoInfo";

export default function ContactoPage() {
    return (
        <main>
            <ContactoHero />
            <div className="container" style={{ padding: '4rem 0' }}>
                <ContactoInfo />
            </div>
        </main>
    )
}