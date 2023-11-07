import React from 'react'
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
        <div className="shell">
            <div className="header__inner">
                <div className="logo">
                    <p>BelleBloom</p>
                </div>

                <Navbar/>
            </div>
        </div>
    </header>
  )
}

export default Header