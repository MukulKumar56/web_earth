import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import{BsFacebook} from 'react-icons/bs'
import{BsYoutube} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Navbar = () => {

  return (
    <>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand"  to="/web_earth">Web Earth</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className='nav-link' aria-current="page" to="/web_earth">Home</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/web_earth/post2">Tips</Link>
              </li>
              <li className="nav-item">
                <a className='nav-link' href='https://www.youtube.com/results?search_query=Save++earth'>Videos</a>
              </li>
              <li className="nav-item">
                <a className='nav-link' href="https://kids.nationalgeographic.com/games/quizzes">Quizzes</a>
              </li>
              <li className="nav-item">
                <Link className='nav-link'  to="/web_earth/terms">Terms& conditions</Link>
              </li>


            </ul>
            <form className="d-flex">
              <a className='social-icon' id='fb'> <BsFacebook/></a>
              <a className='social-icon' id='yt'>   <BsYoutube/></a>

              <a className='social-icon' id='Insta'>  <BsInstagram/></a>
              <a className='social-icon' id='Git'>  <BsGithub/></a>


            
          
           
          
        
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
