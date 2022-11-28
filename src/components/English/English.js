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
                <h2>English Mentor</h2>
           </header>
           <main>
                <section id="work-experience" className="cv-section">
                    <h3>Work Experience</h3>
                    <div>
                        <h4>Certifications</h4>
                        <ul>
                            <li>2020: professional certification in teaching English online (CTEO), the 170h online teaching specialization course by ITTT (International TEFL and TESOL Training) was completed.</li>
                        </ul>
                    </div>
                    <div>
                        <h4>English as a Second Language Teacher</h4>
                        <div>
                            <div>Period: 01-10-2019 &ndash; 30.06-2022</div>
                            <div>
                                <div>Employer: "Mały Rynek" Foreign Language School</div>
                                <div>Location: Kraków, Poland and remotely</div>
                                <div>Reference: Dorota Daszkiewicz </div>
                                <div>Description: lorem ipsum dolor sit amet, consectetur adipis occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="education" className="cv-section">
                    <h3>Education</h3>
                </section>
                <section id="skills" className="cv-section">
                    <h3>Skills</h3>
                </section>
           </main>
        </>
    );
}

export default English;