import React from 'react'
import style from "./style.scss"
import Contact from './Contact'
import Location from './Location'


const Footer = () => {
  return (
  <footer className="footer">
        <div className="shell">
            <div className="footer__inner">
                <div className="footer__content">
                    <div className="footer__nav">
                        <ul>
                            <li><h4><a href="">Company</a></h4></li>
    
                            <li><a href="">Information</a></li>
    
                            <li><a href="">Contact</a></li>
    
                            <li><a href="">About</a></li>
    
                            <li><a href="">News</a></li>
                        </ul>
                    </div>

                     <hr />
                     
                    <Location/>

                    <hr/>

                    <Contact/>
                </div>
    
                <div className="footer__bar">
                    <h3 className="logo">BelleBloom</h3>
    
                    <div className="copyright">
                        2021@Bellebloom. All Rights Reserved.
                    </div>
                </div>
    
            </div>
        </div>
    </footer>
  )
}

export default Footer