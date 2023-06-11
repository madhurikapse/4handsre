import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Student from './Student';
import Contact from './Contact';


function App() {
  return(
    <>
    <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
  }

export default App;
