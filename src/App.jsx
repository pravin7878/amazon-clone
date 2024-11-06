import React from 'react'
import { Nevbar } from './component/Nevbar'
import { AllRoutes } from './component/AllRoutes'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (<>
  <ToastContainer />
  <div className='fixed top-0 z-30'>
    <Nevbar />
  </div>
  <div className='mt-[80px]'>
    <AllRoutes/>
  </div>
  </>
  )
}

export default App
