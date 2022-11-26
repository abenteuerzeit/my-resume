import './BusinessCard.css';
import { Link } from 'react-router-dom';

const BusinessCard = (props) => {

    return (
        <>
            <article>
                <small>
                    Polish-American philosopher, musician, and IT professional.
                </small>
                <address>
                <ul>
                    <li><a href="mailto:amroz.muzyka@gmail.com">amroz.muzyka@gmail.com</a></li>
                    <li><a href="tel:+48-535-322-909">+48 535 322 909</a></li>
                </ul>
                </address>
                <dl>
                    <dt>From</dt>
                    <dd>Baltimore, MD, USA </dd>
                    <dt>Living in</dt>
                    <dd>Kraków, Poland</dd>
                </dl>

                <Link to='/'><button>Hide</button></Link>
            </article>
        </>
    )
}

export default BusinessCard;