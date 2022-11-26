import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import CareerCard from './components/CareerCard/CareerCard';

// This application presents my resume as a single page application.
// The user can display a resume that displays data based on the selected career choice.
// For each industry choice the user can see my relevant work experience, education, and skills.
// The user can also see my contact information and a link to my LinkedIn profile.
// The user can also see a link to my GitHub profile.
// The user can also see a link to my resume in PDF format.
// The user can also see a link to my resume in Word format.
// The user can also see a link to my resume in HTML format.
// The user can also see a link to my resume in JSON format.
// The SPA is built using React and is hosted on Netlify.
// The user can also see a link to the source code for this application on GitHub.
// The website is responsive and works on mobile devices.
// The website is responsive and works on tablets.
// The website is responsive and works on desktops.
// The website is responsive and works on widescreen monitors.
// The components' state changes are animated.
// The website is dynamic and the content transition with animations.
function App() {
  
  return (
    <>
      <Header />
      <Nav />
      <CareerCard  />
    </>
  );
}

export default App;
