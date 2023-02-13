import account_circle from './assets/account_circle.svg';
import api from './assets/api.svg'
import adress from './assets/address.svg';
import quiz from './assets/quiz.svg';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header>
            <div>
                <a href="http://localhost:5173/"><img src={api} alt="index"/></a>
            </div>
            <ul>
                <li>
                    <Link to={"/Random-App"}>
                    <img src={account_circle} alt=""/>
                    </Link>
                </li>
                <li>
                    <Link to={"/Adresse"}>
                    <img src={adress} alt=""/>
                    </Link>
                </li>
                <li>
                    <Link to={"/Quiz"}>
                    <img src={quiz} alt=""/>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;