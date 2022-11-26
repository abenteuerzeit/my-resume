import './English.css';

const pdfIcon = {
    'color': 'var(--primary-color)'
};

const English = (props) => {



    return (
        <>
           <header>
                <nav>
                    <ul>
                        <li>
                            <a href="#work-experience">Work Experience</a>
                        </li>
                        <li>
                            <a href="#education">Education</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="./"><i class="fa fa-file-pdf-o" style={pdfIcon}></i></a>
                        </li>
                    </ul>
                </nav>
                <h2>English Teacher</h2>
           </header>
           <main>
                <section id="work-experience" className="cv-section">
                    <h3>Professional History</h3>
                    <p>
                        Job Details
                    </p>

                </section>
            
           </main>
        </>
    );
}

export default English;