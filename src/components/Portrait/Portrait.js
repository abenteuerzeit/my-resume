import {Link} from 'react-router-dom';
import portrait from './portrait.jpg';
import './Portrait.css';

const Portrait = () => {
    return (
        <figure>
            <Link to={`/Bio`}>
                <img src={portrait} alt="Portrait" />
            </Link>
            <figcaption>Adrian Mróz, Ph.D.</figcaption>
        </figure>
    )
};

export default Portrait;