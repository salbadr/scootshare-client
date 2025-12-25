import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/AboutUs'
import Nav from '@/components/Nav'


function App() {

  return (
    <main className='h-screen'>


      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </main>


  )
}

export default App
