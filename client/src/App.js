import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Unknown from './webpages/404';
import Home from './webpages/Home';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        {/* Home  */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />

              {/* 404 page  */}
              <Route exact path='*' element={<Unknown />} />
              <Route exact path='/404-Not-Found' element={<Unknown />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
