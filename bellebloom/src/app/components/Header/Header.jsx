"use client";
import { React, useState } from "react";
import NavbarDesc from "./NavbarDesc";
import style from "./style.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavbarMob from "./NavbarMob";
import { motion } from "framer-motion";
import ShowEffectProvider from "@/app/providers/ShowEffectProvider";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const Header = ({ caller }) => {
    const [open, setOpen] = useState(false);
    const router = useRouter()

    const headerClassName = caller === "hero" ? "header-hero" : "header";

    const framerVariant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: .2,
            }
        },
    };
    return (
        <ShowEffectProvider variant={framerVariant}>
            <header className={headerClassName}>
                <div className="shell">
                    <div className="header__inner">
                        <h3 className="logo"
                            onClick={() => router.push('/')}>BelleBloom</h3>

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
        </ShowEffectProvider>
    );
};

export default Header;
