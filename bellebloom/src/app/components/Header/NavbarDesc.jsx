import Link from "next/link";
import React from "react";

const NavbarDesc= () => {
  return (
    <nav className='nav-desc'>
      <ul>
        <li>
            <Link href={"/"}>Home</Link>
        </li>

        <li>
        <Link href={"about"}>About Us</Link>
        </li>

        <li>
        <Link href={"blogs"}>Blogs</Link>
        </li>

        <li>
            <Link href={"products"}>Cosmetics Info</Link>

        </li>

        <li>
            <Link href={"contact"}>Contact </Link>
              </li>
      </ul>
    </nav>
  );
};

export default NavbarDesc;
