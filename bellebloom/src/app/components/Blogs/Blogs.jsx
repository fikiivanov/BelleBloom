import React from 'react'
import style from "./style.scss"

const Blogs = () => {
  return (
    <section className="section-blogs">
        <div className="shell">
            <div className="section__inner">
                <h2>Blogs</h2>

                <ul className="blogs">
                    <li className='blog'>
                        <img src="./images/Blogs/acne.png" alt="" />

                       <div className="card__text">
                           <h3>Acne</h3>    

                            <a href="">More</a> 
                        </div>                   
                    </li>
                  
                    <li className='blog'>
                        <img src="./images/Blogs/freckles.png" alt="" />

                       <div className="card__text">
                           <h3>Freckles</h3>    

                            <a href="">More</a> 
                        </div>                   
                    </li>

                    <li className='blog'>
                        <img src="./images/Blogs/clay-mask.png" alt="" />

                       <div className="card__text">
                           <h3>Clay mask</h3>    

                            <a href="">More</a> 
                        </div>                   
                    </li>
                </ul>

                <a href="" className="btn btn--reverse ">
                     <span>More </span>
                </a>
            </div>

            <hr  className='line'/>
        </div>

      </section>
  )
}

export default Blogs