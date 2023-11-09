"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const NavbarMob = ({ isOpen }) => {
  return (
    <motion.nav
      animate={{ x: isOpen ? 0 : -350 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="nav-mob"
    >
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <hr />

        <li>
          <Link href={"about"}>About Us</Link>
        </li>
        <hr />

        <li>
          <Link href={"blogs"}>Blogs</Link>
        </li>
        <hr />

        <li>
          <Link href={"products"}>Cosmetics Info</Link>
        </li>
        <hr />

        <li>
          <Link href={"contact"}>Contact </Link>
        </li>
        <hr />
      </ul>
    </motion.nav>
  );
};

export default NavbarMob;
