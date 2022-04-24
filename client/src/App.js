import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ContextProvider from './context/Context';
import Unknown from './webpages/404';
import About from './webpages/About';
import LoginReportRegister from './webpages/Chosen';
import Home from './webpages/Home';
import MyThings from './webpages/MyThings';
import Profile from './webpages/Profile';
import Services from './webpages/Services';

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

          {/* For jobs and internship pages */}
          <Route exact path="/type=:id&filter=&city=:city&category=:category" element={<Services />} />

          {/* Profile  */}
          <Route exact path="/profile" element={<Profile />} />


          {/* My Requirements and my Applications comes here  */}
          <Route exact path="/:id" element={<MyThings />} />

          {/* About Page  */}
          <Route exact path="/about" element={<About />} />

          {/* 404 page  */}
          <Route exact path='*' element={<Unknown />} />
          <Route exact path='/404-Not-Found' element={<Unknown />} />

        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App;
