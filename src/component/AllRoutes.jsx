import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/HomePage/Home'
import { ErrorPage } from '../pages/ErrorPage'
import { SingalProductPage } from '../pages/SingalProductPage'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>

{/* singal product viev route */}
      <Route path='/view-product/:id' element={<SingalProductPage/>}/>

      <Route path="*" element={<ErrorPage />} />
      </Routes>
  )
}
