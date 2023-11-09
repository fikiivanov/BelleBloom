"use client";
import { React, useState } from "react";
import NavbarDesc from "./NavbarDesc";
import style from "./style.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavbarMob from "./NavbarMob";
import { motion } from "framer-motion";

const Header = ({ caller }) => {
  const [open, setOpen] = useState(false);

  const headerClassName = caller === "hero" ? "header-hero" : "header";

  return (
    <header className={headerClassName}>
      <div className="shell">
        <div className="header__inner">
          <div className="logo">
            <p>BelleBloom</p>
          </div>

          <NavbarDesc />

          <NavbarMob isOpen={open} />

          <motion.div
            animate={{ rotate: open ? 0 : 360 }}
            transition={{ type: "spring", stiffness: 40 }}
            initial={{ pathLength: 0 }}
            className="header__menu"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <AiOutlineClose className="icon" />
            ) : (
              <AiOutlineMenu className="icon" />
            )}
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
