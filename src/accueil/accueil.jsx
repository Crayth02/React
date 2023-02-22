import './accueil.css'
import data from '../../infoUser.json'

const Accueil = () => {
    return (
        <main id="app">
    <section className="home">
        <div className="home__image">
            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Jon SIMPSON" />
        </div>
        <h3>{data.firstname} {data.lastname}</h3>
        <p>{data.description}</p>
        <article>{data.title}</article>
    </section>
</main>
    )
}

export default Accueil;