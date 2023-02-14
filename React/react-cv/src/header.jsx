import './header.css'
import accueil from './assets/home.svg';
import experience from './assets/person.svg'
import portfolio from './assets/person.svg'
import contact from './assets/email.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <main id="app">
        <header>
        <div className="header">
            <div className="header__image">
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Jon SIMPSON" />
            </div>
            <h1 className="header__name">Jon SIMPSON</h1>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to={"/Accueil"}>
                    <img src={accueil} alt="accueil" />
                    <span className="link">Accueil</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/Experience"}>
                    <img src={experience} alt="experience" />
                    <span className="link">Experience</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/Portfolio"}>
                    <img src={portfolio} alt="portfolio" />
                    <span className="link">Portfolio</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/Contact"}>
                    <img src={contact} alt="contact" />
                    <span className="link">Contact</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    </main>
    )
}

export default Header;