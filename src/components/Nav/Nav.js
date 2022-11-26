import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="/English">English Teacher</Link>
                </li>
                <li>
                    <Link to="/Philosopher">Philosopher</Link>
                </li>
                <li>
                    <Link to="/Musician">Musician</Link>
                </li>
                <li>
                    <Link to="/FullStackDev">Developer</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
