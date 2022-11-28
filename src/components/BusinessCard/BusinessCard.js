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
                            <a href="tel:+48535322909">+48 535-322-909</a><br />
                            <a href="tel:+14432169316">+1 (443) 216-93-16</a>
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
                        <dt>LinkedIn: </dt>
                        <dd>
                            {/* linkedin icon */}
                            <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" height='10px' className='icon'/>
                            <a href="https://www.linkedin.com/in/abenteuerzeit" target="_blank" rel="noreferrer">Adrian Mróz</a>
                        </dd>
                        <dt>Facebook: </dt>
                        <dd>
                            {/* facebook icon */}
                            <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" height='10px' className='icon'/>
                            <a href="https://www.facebook.com/adrian.mroz/" target="_blank" rel="noreferrer">Adrian Mróz</a>
                        </dd>
                        <dt>Twitter</dt>
                        <dd>
                            {/* twitter icon */}
                            <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" height='10px' className='icon'/>
                            <a href="https://twitter.com/AdrianMroz" target="_blank" rel="noreferrer">@AdrianMroz</a>
                        </dd>
                        <dt>Google Scholar</dt>
                        <dd>
                            {/* google scholar icon */}
                            <img src="https://img.icons8.com/ios-filled/50/000000/google-scholar.png" alt="Google Scholar" height='10px' className='icon'/>
                            <a href="https://scholar.google.com/citations?user=Z8Z9ZqMAAAAJ&hl=en" target="_blank" rel="noreferrer">Adrian Mróz</a>
                        </dd>
                        

                    </dl>
                </address>

            </article>
            <Link to='/'><button>Hide</button></Link>
        </>
    )
}

export default BusinessCard;