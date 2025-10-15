"use client";
import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { Icon } from "@iconify/react";
import localFont from "next/font/local";

const melodramaLight = localFont({
    src: "../../public/font/Melodrama-Light.ttf",
    weight: "300",
    style: "normal",
});

const Footer = ({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) => {
    const clipPath = useTransform(
        scrollYProgress,
        [0.8, 1],
        ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
    );

    return (
        <motion.footer
            style={{ clipPath }}
            className="fixed bottom-0 left-0 w-full h-screen bg-black flex flex-col px-8 md:px-14 py-16 z-[60]"
        >
            <div className="flex gap-16 items-start mt-auto">
                <div>
                    <h2 className="text-lg md:text-xl text-gray-400 mb-4">
                        mail
                    </h2>
                    <ul className="text-white">
                        <li>adetolaesther5@gmail.com</li>
                    </ul>
                    <h2 className="text-lg md:text-xl text-gray-400 mt-4">
                        phone
                    </h2>
                    <ul className="text-white">
                        <li>+2348130252751</li>
                    </ul>
                    <h2 className="text-lg md:text-xl text-gray-400 mt-4">
                        social
                    </h2>
                    <ul className="text-white">
                        <li>instagram</li>
                        <li>facebook</li>
                    </ul>
                </div>

                {/* Residences */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg md:text-xl text-gray-400">
                        residence
                    </h2>
                    <button className="px-8 py-4 bg-black text-white rounded-3xl border-2 border-white">
                        classic.
                    </button>
                    <button className="px-8 py-4 bg-black text-white rounded-3xl border-2 border-white">
                        mini.
                    </button>
                    <button className="px-8 py-4 bg-black text-white rounded-3xl border-2 border-white">
                        village.
                    </button>
                </div>

                {/* Links */}
                <div>
                    <ul className="text-white">
                        <li>experiences</li>
                        <li>book now</li>
                        <li>contact</li>
                        <li>privacy</li>
                        <li>cookies</li>
                    </ul>
                </div>

                <p className="text-white text-2xl ml-auto">( 9 )</p>
            </div>

            <div className="overflow-hidden whitespace-nowrap">
                <motion.h1
                    className="text-white text-9xl md:text-9xl font-extra-bold mt-auto text-center my-12 inline-block"
                    style={{ fontSize: "18rem" }}
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 60,
                        ease: "linear",
                    }}
                >
                    nueve{" "}
                    <span
                        className="font-extralight"
                        style={{ fontFamily: melodramaLight.style.fontFamily }}
                    >
                        residence.
                    </span>
                    {"  "}
                    nueve
                    <span
                        className="font-extralight"
                        style={{ fontFamily: melodramaLight.style.fontFamily }}
                    >
                        residence.
                    </span>
                </motion.h1>
            </div>

            <div className="mt-auto flex justify-between items-center">
                <p className="text-white">© 2025 All rights reserved.</p>
                <button className="px-8 py-4 bg-black text-white rounded-4xl border-2 border-white font-melodrama">
                    <Icon
                        icon="fluent-emoji-high-contrast:light-blue-heart"
                        className="inline-block mr-2"
                        width="24"
                        height="24"
                    />
                    MADE BY ADETOLA
                </button>
            </div>
        </motion.footer>
    );
};

export default Footer;
