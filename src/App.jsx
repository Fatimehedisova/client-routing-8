import './App.css';

import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Examples from './pages/Examples';
import Contact from './pages/Contact';
function App() {
  return (
    <>
      <div className='pages-name'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/examples'>Examples</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/examples' element={<Examples />} />
      </Routes>
    </>
  )

}
export default App;
