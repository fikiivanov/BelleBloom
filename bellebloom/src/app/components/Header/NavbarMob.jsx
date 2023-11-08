import Link from "next/link";
import React from "react";

const NavbarMob= () => {
  return (
    <nav className="nav-mob">
      <ul>
        <li>
            <Link href={"/"}>Home</Link>
        </li>
        <hr/>

        <li>
            <Link href={"about"}>About Us</Link>
        </li>
        <hr/>

        <li>
            <Link href={"blogs"}>Blogs</Link>
        </li>
        <hr/>

        <li>
            <Link href={"products"}>Cosmetics Info</Link>

        </li>
        <hr/>

        <li>
            <Link href={"contact"}>Contact </Link>
        </li>
        <hr/>
      </ul>
    </nav>
  );
};

export default NavbarMob;
