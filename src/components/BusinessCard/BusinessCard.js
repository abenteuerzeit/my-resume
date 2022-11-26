import './BusinessCard.css';
import { Link } from 'react-router-dom';

const BusinessCard = (props) => {

    return (
        <>
            <article>
                <address>
                    <dl>
                        <dt>Tel.: </dt>
                        <dd>
                            <a href="tel:+48535322909">+48 535-322-909</a>
                        </dd>
                        <dt>E-mail: </dt>
                        <dd>
                            <a href="mailto:amroz.muzyka@gmail.com">amroz.muzyka@gmail.com</a>
                        </dd>
                        <dt>GitHub: </dt>
                        <dd>
                            {/* github icon */}
                            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" height='10px' className='icon'/>
                            <a href="https://github.com/abenteuerzeit" target="_blank" rel="noreferrer">abenteuerzeit</a>
                        </dd>
                    </dl>
                </address>

            </article>
            <Link to='/'><button>Hide</button></Link>
        </>
    )
}

export default BusinessCard;