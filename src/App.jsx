import React from 'react'
import Page1 from '../components/Page1.jsx'
import Page2 from '../components/Page2.jsx'
import MovieCard from '../components/MovieCard.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Bookings from '../components/Bookings.jsx'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/show/:id" element={<Page2 />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>

  )
}
