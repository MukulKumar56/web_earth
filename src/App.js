import React from 'react'
import Navbar from './components/navbar'
// import About from './components/about'
import Home from './components/Home'
// import Hero from './components/hero'
// import PostCard from './components/postCard'
import Footer from './components/footer'
import Post1 from './components/posts/post1'
import Post2 from './components/posts/post2'
import Post3 from './components/posts/post3'
import Terms from './components/terms'



import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = () => {
  return (<>

    <Router>
      <Navbar />
     
     

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/post1' element={<Post1 />} />
        <Route path='/post2' element={<Post2 />} />
        <Route path='/post3' element={<Post3 />} />
        <Route path='/terms' element={<Terms />} />




        
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/post' element={<Post />} /> */}
        {/* <Route path='/about' element={<About />} /> */}

      </Routes>
    </Router>
        <Footer />

  </>  

  )
}

export default App;