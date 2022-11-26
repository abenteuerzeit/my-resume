import './App.css';
import Main from '../components/Main/Main';
import CV_DATA from './data';
import { Routes, Route, Link } from 'react-router-dom';
import Bio from '../components/Bio/Bio';
import Portrait from '../components/Portrait/Portrait';
import Nav from '../components/Nav/Nav';

function App() {
  
  return (
    <main>
      <h1>Curriculum Vitae</h1>
      <Routes>
        <Route path="/" element={<Portrait />} />
        <Route path="/Bio" element={<Bio />} />
      </Routes>
      <Nav />
    </main>
  );
}

export default App;