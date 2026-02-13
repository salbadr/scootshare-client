import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'

import Home from '@/pages/Home'
import About from '@/pages/AboutUs'
import Scooters from '@/pages/Scooter/Scooters'
import { ScooterDetails } from '@/pages/Scooter/ScooterDetails'
import { Dashboard } from '@/pages/Host/Dashboard'
import { Income } from '@/pages/Host/Income'
import { Reviews } from '@/pages/Host/Reviews'


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

            <Route path='/host' element={<Dashboard />} />
            <Route path='/host/income' element={<Income />} />
            <Route path='/host/reviews' element={<Reviews />} />

          </Route>

        </Routes>

      </BrowserRouter>
    </QueryClientProvider>



  )
}

export default App
