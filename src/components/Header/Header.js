import './Header.css';
import portrait from './images/portrait.jpg';
import Nav from '../Nav/Nav';

const Header = (props) => {
    return (
        <header className="App-header">
        <h1 className="App-title">Curriculum Vitae</h1>
        <figure>
            <img src={portrait} alt="Portrait" />
            <figcaption>Adrian Mróz, Ph.D.</figcaption>
        </figure>
        <Nav />
        </header>
    )
}

export default Header;