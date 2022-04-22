import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ContextProvider from './context/Context';
import Unknown from './webpages/404';
import LoginReportRegister from './webpages/Chosen';
import Home from './webpages/Home';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>

          {/* Home  */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />

          {/* For login, Register or Contact */}
          <Route exact path="/chosen=:id" element={<LoginReportRegister />} />


          {/* 404 page  */}
          <Route exact path='*' element={<Unknown />} />
          <Route exact path='/404-Not-Found' element={<Unknown />} />

        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App;
