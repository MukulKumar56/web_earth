import React from 'react'
import './postCard.css'

import { Link } from "react-router-dom";



const PostCard = () => {
  return (
    <>
   
 
<h1 className='heading'>
  <span>Browse: </span>
  <div class="message">
    <div class="word1">articles</div>
    <div class="word2">posts</div>
    <div class="word3">tips</div>
  </div>
</h1>
  

<div className='flex-r'>

  
<div className=" box">
        <div className='hwra post1 '>

        </div>


        {/* <img src= 'https://cdn.pixabay.com/photo/2017/01/17/19/29/earth-1987763_960_720.jpg' alt='Yhi' className='mer'> </img>
                    */}
        <div className="post-content">
          <h1>Why should we Save Earth </h1>

          <p>Our Earth is the only planet with the continuity of life so it becomes more and more important to generate a sense of urgency of saving our mother earth from all sorts of planet harming activities. Our mother earth needs to be saved as our survival depends completely on this planet. It is our responsibility to raise awareness about saving our mother earth.
</p>
        </div>
       <Link to="post1"><button className="glow-on-hover m-0">Read more </button></Link>
      </div>

      <div className=" box">
        <div className='hwra post2 '>

        </div>


        {/* <img src= 'https://cdn.pixabay.com/photo/2017/01/17/19/29/earth-1987763_960_720.jpg' alt='Yhi' className='mer'> </img>
                    */}
        <div className="post-content">
          <h1>Tips to save earth</h1>

          <p>
Invest in reusable shopping bags :

Plastic is a non-biodegradable substance that can harm flora and fauna for decades, which is why it is now slowly being replaced and banned. A small change you can make is to use reusable bags instead of plastic bags, which can be cost-effective, durable and most importantly, harmless to the environment.
</p>
        </div>
        <Link to="post2"><button className="glow-on-hover m-0">Read more </button></Link>
      </div>



      <div className=" box">
        <div className='hwra post3 '>

        </div>


        {/* <img src= 'https://cdn.pixabay.com/photo/2017/01/17/19/29/earth-1987763_960_720.jpg' alt='Yhi' className='mer'> </img>
                    */}
        <div className="post-content">
          <h1>Human as demon for earth</h1>

          <p>The Environment has suffered for thousands of years due to Human Activities. Since as Homo sapiens we first walked the earth, there have been several modifications on the planet and around us through the development of infrastructure, travel, and the incorporation of urbanization and other commercial</p>
        </div>
        <Link to="post3"><button className="glow-on-hover m-0">Read more </button></Link>

      </div>

 

      
</div>
{/* <hr color='black'></hr> */}
<h1 className='heading ' style={{'margin-bottom ' : '20px'}} >
  <span>Browse: </span>
  <div class="message">
    <div class="word1">Videos</div>
    <div class="word2">Quiz</div>
    <div class="word3">Projects</div>
  </div>
</h1>
  
<div className='flex-r bg-r '>

  
<div className=" box">
        <div className='hwra post4 '>

        </div>


        {/* <img src= 'https://cdn.pixabay.com/photo/2017/01/17/19/29/earth-1987763_960_720.jpg' alt='Yhi' className='mer'> </img>
                    */}
        <div className="post-content">
          <h1 className='typewriter' style={{'font-family': 'sans-serif'}}>Projects  </h1>

          <p>People around the world should understand the need of a greener & cleaner planet. We all need to fulfill our responsibilities & make ample efforts to protect our mother earth from planet harming activities.</p>
        </div>
        <a href='https://www.google.com/search?q=project+on+save+earth' target ="_blank"><button className="btn2 m-0">veiw Projects </button></a>
      </div>

      <div className=" box">
        <div className='hwra post5 '>

        </div>


        {/* <img src= 'https://cdn.pixabay.com/photo/2017/01/17/19/29/earth-1987763_960_720.jpg' alt='Yhi' className='mer'> </img>
                    */}
        <div className="post-content">
          <h1 className='typewriter' style={{'font-family': 'sans-serif'}}>Quizzes  </h1>

          <p>Play quizzes and extend your knowledge .. People around the world should understand the need of a greener & cleaner planet. We all need to fulfill our responsibilities & make ample efforts to protect our mother earth from planet harming activities.</p>
        </div>
        <a href="https://kids.nationalgeographic.com/games/quizzes" target ="_blank"><button className="btn2 m-0">PLay Quizzes </button></a>
      </div>



      <div className=" box">
        <div className='hwra post6 '>

        </div>


        {/* <img src= 'https://cdn.pixabay.com/photo/2017/01/17/19/29/earth-1987763_960_720.jpg' alt='Yhi' className='mer'> </img>
                    */}
        <div className="post-content">
          <h1  className='typewriter' style={{'font-family': 'sans-serif'}}>Watch Videos  </h1>

          <p> Learn by watching youtube videos People around the world should understand the need of a greener & cleaner planet. We all need to fulfill our responsibilities & make ample efforts to protect our mother earth from planet harming activities.
          </p>
        </div>
        <a href="https://www.youtube.com/results?search_query=Save++earth"><button className="btn2 m-0" target ="_blank">Play Videos</button></a>
      </div>



      
</div>
    </>
  )
}

export default PostCard