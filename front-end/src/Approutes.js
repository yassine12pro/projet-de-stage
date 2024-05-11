import React from 'react'
import { Routes,Route  } from 'react-router-dom'
import HomePage from './components/pages/home/homepage'
import Foodpage from './components/pages/food/foodpage'
import CartPage from './components/pages/cart/cart'
import ProfilePage from './components/pages/profile/profile'

export default function Approutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/search/:searchTerm" element={<HomePage/>}/>
        <Route path="/tag/:tag" element={<HomePage/>}/>
        <Route path="/food/:id" element={<Foodpage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
    </Routes>
    
  )
}
