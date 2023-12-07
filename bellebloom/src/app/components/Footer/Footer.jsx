import React from 'react'
import style from "./style.scss"
import Contact from './Contact'
import Location from './Location'
import Link from 'next/link'


const Footer = () => {
  return (
  <footer className="footer">
        <div className="shell">
            <div className="footer__inner">
                <div className="footer__content">
                    <div className="footer__nav">
                        <ul>
                            <li><h4><Link href="/">Company</Link></h4></li>
    
                            <li><Link href="/products">Information</Link></li>
    
                            <li><Link href="/contact">Contact</Link></li>
    
                            <li><Link href="/about">About</Link></li>
    
                            <li><Link href="/blogs">News</Link></li>
                        </ul>
                    </div>

                     <hr />
                     
                    <Location/>

                    <hr/>

                    <Contact/>
                </div>
    
                <div className="footer__bar">
                    <h3 className="logo"><Link href={"./"}>BelleBloom</Link></h3>
    
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