import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/AboutUs'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
