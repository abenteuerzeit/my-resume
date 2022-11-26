import './Bio.css';
import { Link } from 'react-router-dom';

const Bio = (props) => {

    return (
        <>
            <article>
                <h2>Biography</h2>
                <p>
                    Lorem ipsum dolor sit amet, consect
                    etur adipiscing elit. Sed euismod 
                    nunc non nunc aliquet, nec aliquet
                    risus aliquam. Nulla facilisi.
                </p>
                <Link to='/'><button>Hide</button></Link>
            </article>
        </>
    )
}

export default Bio;