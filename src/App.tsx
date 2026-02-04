import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import About from '@/pages/AboutUs'
import Scooters from '@/pages/Scooters'
import { ScooterDetails } from './pages/ScooterDetails'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/scooters' element={<Scooters />} />
            <Route path='/scooters/:id' element={<ScooterDetails />} />

          </Routes>
        </main>
        <Footer />

      </BrowserRouter>
    </QueryClientProvider>



  )
}

export default App
