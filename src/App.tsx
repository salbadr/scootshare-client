import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/AboutUs'
import Nav from '@/components/Nav'


function App() {

  return (



    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <footer className='bg-zinc-800 p-20 text-zinc-400 '>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-zinc-400 pb-10 mb-10'>
          <div className='flex flex-col gap-4'>
            <h2 className="text-2xl text-white font-semibold">ScootShare</h2>
            <p className="w-3xs">Making cities more accessible, one ride at a time</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className="text-lg text-white font-semibold">Company</h3>
            <Link to="/about" className='hover:text-white'>About Us</Link>
            <Link to="/contact" className='hover:text-white'>Contact</Link>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className="text-lg text-white font-semibold">Scooters</h3>
            <Link to="/about" className='hover:text-white'>Browse Scooters</Link>
            <Link to="/contact" className='hover:text-white'>How it Works</Link>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className="text-lg text-white font-semibold">Support</h3>
            <Link to="/about" className='hover:text-white'>FAQ</Link>
            <Link to="/contact" className='hover:text-white'>Safety</Link>
          </div>

        </div>
        <span className='text-sm'>&copy; 2025 ScootShare. All rights reserved.</span>

      </footer>
    </BrowserRouter>


  )
}

export default App
