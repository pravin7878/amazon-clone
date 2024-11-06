import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/HomePage/Home'
import { ErrorPage } from '../pages/ErrorPage'
import { SingalProductPage } from '../pages/SingalProductPage'
import { Cart } from '../pages/Cart'
import CheckoutPage from '../pages/ChackOutPage'
import PaymentSuccess from '../pages/PaymentSuccess'
import PaymentFailure from '../pages/PaymentFailed'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* singal product viev route */}
      <Route path='/view-product/:id' element={<SingalProductPage />} />
      {/* cart page route */}
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<CheckoutPage/>}/>
      <Route path='/payment-success' element={<PaymentSuccess/>}/>
      <Route path='/payment-failure' element={<PaymentFailure/>}/>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
