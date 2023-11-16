import ShowEffectProvider from "@/app/providers/ShowEffectProvider";
import Link from "next/link";
import React from "react";

const NavbarDesc = () => {
  const framerVariant = {
    hidden: { y: -50, opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <ShowEffectProvider variant={framerVariant}>
      <nav className="nav-desc">
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>

          <li>
            <Link href={"/about"}>About Us</Link>
          </li>

          <li>
            <Link href={"/blogs"}>Blogs</Link>
          </li>

          <li>
            <Link href={"/products"}>Cosmetics Info</Link>
          </li>

          <li>
            <Link href={"/contact"}>Contact </Link>
          </li>
        </ul>
      </nav>
    </ShowEffectProvider>
  );
};

export default NavbarDesc;
