import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Players from './components/Players';
import Footer from './components/Footer';
import News from './components/News';
import Detail from './components/Detail';
import Contact from './components/Contact';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Players/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/news' element={<News/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;