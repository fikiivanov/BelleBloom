import React from 'react'
import style from "./style.scss"


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
                     
                    <div className="location">
                        <h4>Location</h4>
    
                        <p>South Los Angeles</p>
    
                        <p>+1234567890</p>
    
                        <h4>We always ready speak with you!</h4>
                    </div>

                    <hr/>

                    <div className="contact">
                        <h4><a href="">Get in touch</a></h4>

                        <p><a href="">belleBloom-contact@gmail.com</a></p>
    
                        <p><a href="">Instagtam</a></p>
    
                        <p><a href="">Facebook</a></p>
    
                        <p><a href="">Twitter</a></p> 
                    </div>
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