import './CareerCard.css';
import Education from '../Education/Education';
import CV_DATA from '../../data/data';

const CareerCard = (props) => {

    

    return (
        <>
        <header>
            <h2>Guitar Teacher</h2>
            <nav>
                <ul>
                <li><button>PDF</button></li>
                <li><button>Word</button></li>
                <li><button>HTML</button></li>
                <li><button>JSON</button></li>
                </ul>
            </nav>
        </header>
        <div className="CareerCard">

            <article className="career-card">
            {/* <Education data={CV_DATA.Universities} /> */}
            <h3>Work Experience</h3>
            <h3>Skills</h3>
            </article>

            <div>
                <h3>University</h3>
                <p>University of Warsaw</p>
            </div>
        
        </div>
        </>
    )
}

export default CareerCard;