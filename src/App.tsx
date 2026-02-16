import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'

import Home from '@/pages/Home'
import About from '@/pages/AboutUs'
import Scooters from '@/pages/Scooter/Scooters'
import { ScooterDetails } from '@/pages/Scooter/ScooterDetails'
import { AdminDashboard } from '@/pages/Admin/AdminDashboard'
import { AdminIncome } from '@/pages/Admin/AdminIncome'
import { AdminReviews } from '@/pages/Admin/AdminReviews'
import { AdminLayout } from '@/pages/Admin/AdminLayout'
import { AdminScooters } from '@/pages/Admin/AdminScooters'
import { AdminScooterDetails } from '@/pages/Admin/AdminScooterDetails'


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
          <Route path='/'  element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='scooters' element={<Scooters />} />
            <Route path='scooters/:id' element={<ScooterDetails />} />

            <Route path='/admin' element={<AdminLayout />} >
              <Route index element={<AdminDashboard />} />
              <Route path='income' element={<AdminIncome />} />
              <Route path='scooters' element={<AdminScooters />} />
              <Route path='scooters/:id' element={<AdminScooterDetails />} />

              <Route path='reviews' element={<AdminReviews />} />
            </Route>

          </Route>

        </Routes>

      </BrowserRouter>
    </QueryClientProvider>



  )
}

export default App
