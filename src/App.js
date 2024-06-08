import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';


function App() {
  return (
    <>
    <NoteState>
    <Router>
     <Navbar/>
      <Routes>
            {/* here we are using the key parameter for forcibyly remounitng the componennt */}
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/home" element={<Home/>} />
       </Routes>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
