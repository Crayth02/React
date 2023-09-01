import './accueil.css'
import data from '../../infoUser.json'

const Accueil = () => {
    return (
        <main id="app">
    <section className="home">
        <div className="home__image">
            <img src="images/photo.jpg" alt="Melvin LENGLET" />
        </div>
    <article className="user">
        <h2>{data.firstname} {data.lastname}</h2>
        <h3>{data.title}</h3>
        <p style={{ whiteSpace: 'pre-line', lineHeight: '2' }}>{data.description}</p>
    </article>
    </section>
</main>
    )
}

export default Accueil;