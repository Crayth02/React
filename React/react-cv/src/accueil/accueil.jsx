import './accueil.css'

const Accueil = () => {
    return (
        <main id="app">
    <section className="home">
        <div className="home__image">
            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Jon SIMPSON" />
        </div>
        <h3>Jon SIMPSON</h3>
        <p>Développeur et chef de projet informatique</p>
        <article>
            Je suis un développeur et chef de projet informatique ayant plus de 5 ans d'expérience. Mon expérience
            comprend la gestion de projets et le développement Web. Je suis passionné par la conception et
            l'architecture informatiques, et je suis spécialisé en développement de bases de données.
            J'ai une solide compréhension des outils de gestion de projet et des processus qui sont nécessaires pour
            réussir. Je suis convaincu que je peux apporter une valeur ajoutée à votre entreprise et que je serai un
            atout précieux pour votre équipe.
            Je suis impatient de collaborer avec vous et de relever des défis passionnants. Merci de m'avoir considéré
            et je me tiens à votre entière disposition pour toute question.
        </article>
    </section>
</main>
    )
}

export default Accueil;