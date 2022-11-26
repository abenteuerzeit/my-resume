import './Main.css';
// import portrait from './images/portrait.jpg';
import Nav from '../Nav/Nav';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Main = (props) => {
    const [data, setData] = useState(props.data);

    console.log(data);

    return (
        <>
        <header className="App-header">
        <h1 className="App-title">Curriculum Vitae</h1>
        <figure>
            {/* <Link to={`/Bio`}>
                <img src={portrait} alt="Portrait" />
            </Link> */}
            <figcaption>Adrian Mróz, Ph.D.</figcaption>
        </figure>
        <Nav />
        </header>

        </>
    )
}

export default Main;