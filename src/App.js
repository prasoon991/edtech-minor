import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/common/Layout"
import { Home } from "./pages/Home"
import { BlogSinglePage } from "./components/common/BlogSinglePage"
import { About } from "./pages/About"
import { Courses } from "./pages/Courses"
import { Blog } from "./pages/Blog"
import { Instructor } from "./pages/Instructor"
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { FaChrome } from "react-icons/fa"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path='/about'
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path='/courses'
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />
          <Route
            path='/instructor'
            element={
              <Layout>
                <Instructor />
              </Layout>
            }
          />
          <Route
            path='/blog'
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path='/single-blog'
            element={
              <Layout>
                <BlogSinglePage />
              </Layout>
            }
          />

<Route  path='/sign-up' element={<SignUp />}/>    
<Route  path='/sign-in' element={<SignIn />}/>    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
