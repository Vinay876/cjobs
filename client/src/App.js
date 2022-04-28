import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ContextProvider from './context/Context';
import Unknown from './webpages/404';
import About from './webpages/About';
import Application from './webpages/Application';
import LoginReportRegister from './webpages/Chosen';
import Description from './webpages/Description';
import Forms from './webpages/Forms';
import Home from './webpages/Home';
import MyThings from './webpages/MyThings';
import OtherProfiles from './webpages/Other';
import Profile from './webpages/Profile';
import Services from './webpages/Services';
import Trainings from './webpages/Trainings';

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

          {/* For viewing the profiles of others */}
          <Route exact path="/other=:type=:id" element={<OtherProfiles />} />

          {/* For description oj jobs and internships */}
          <Route exact path="/description-:type=:id&applied=:applied" element={<Description />} />

          {/* for applying for jobs and internships */}
          <Route exact path="/type=:id/apply=:typeId&employer=:employer" element={<Application />} />

          {/* for viewing other submitted forms  */}
          <Route exact path="/post=:post/user=:user/type=:type" element={<Forms />} />

          {/* For trainings */}
          <Route exact path="/trainings/:id" element={<Trainings />} />

          {/* Profile  */}
          <Route exact path="/profile=:profile" element={<Profile />} />


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
