import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ContextProvider from './context/Context';
import Loading from './loader/Loading';

const Unknown = React.lazy(() => import('./webpages/404'))
const About = React.lazy(() => import('./webpages/About'))
const Application = React.lazy(() => import('./webpages/Application'))
const LoginReportRegister = React.lazy(() => import('./webpages/Chosen'))
const Description = React.lazy(() => import('./webpages/Description'))
const Forms = React.lazy(() => import('./webpages/Forms'))
const Home = React.lazy(() => import('./webpages/Home'))
const MyThings = React.lazy(() => import('./webpages/MyThings'))
const OtherProfiles = React.lazy(() => import('./webpages/Other'))
const Profile = React.lazy(() => import('./webpages/Profile'))
const Services = React.lazy(() => import('./webpages/Services'))
const Trainings = React.lazy(() => import('./webpages/Trainings'))

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Suspense fallback={<div><Loading /></div>}>
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
        </Suspense>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App;
