import './App.css';
import Main from '../components/Main/Main';
import CV_DATA from './data';
import { Routes, Route, Link } from 'react-router-dom';
import BusinessCard from '../components/BusinessCard/BusinessCard';
import Portrait from '../components/Portrait/Portrait';
import Nav from '../components/Nav/Nav';
import English from '../components/English/English';

function App() {
  
  return (
    <main>
      <h1>Curriculum Vitae</h1>
      <Routes>
        <Route path="/" element={<Portrait />} />
        <Route path="/Bio" element={<BusinessCard />} />
        <Route path="/EnglishTeacher" element={<English />} />
      </Routes>
      <Nav />
    </main>
  );
}

export default App;