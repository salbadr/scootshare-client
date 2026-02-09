import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'

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
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/scooters' element={<Scooters />} />
            <Route path='/scooters/:id' element={<ScooterDetails />} />

          </Route>

        </Routes>

      </BrowserRouter>
    </QueryClientProvider>



  )
}

export default App
