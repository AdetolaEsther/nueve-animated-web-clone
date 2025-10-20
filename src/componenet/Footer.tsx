"use client";
import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { Icon } from "@iconify/react";
import localFont from "next/font/local";
import Link from "next/link";

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
                    <h2 className="text-[12px] md:text-[14px] text-gray-600  mt-18">
                        mail
                    </h2>

                    <ul className="text-white text-[16px] md:text-[18px]">
                        <li>adetolaesther5@gmail.com</li>
                    </ul>
                    <h2 className="text-[12px] md:text-[14px] text-gray-600 mt-2">
                        phone
                    </h2>
                    <ul className="text-white text-[16px] md:text-[18px]">
                        <li>(+234) 8130252751</li>
                    </ul>
                    <h2 className="text-[12px] md:text-[14px] md:text-xl text-gray-600 mt-4">
                        social
                    </h2>
                    <ul className="text-white text-[16px] md:text-[18px]">
                        <li>instagram</li>
                        <li>facebook</li>
                    </ul>
                </div>

                {/* Residences */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-[12px] md:text-[14px] text-gray-600  mt-16">
                        residence
                    </h2>

                    {["classic", "mini", "village"].map((type) => (
                        <Link key={type} href={`/${type}`}>
                            <button
                                className="px-6 py-2 rounded-3xl border-2 border-gray-400 
                   hover:bg-black hover:text-white transition-all duration-300
                   shadow-md hover:shadow-lg font-medium text-[16px] md:text-[18px]"
                            >
                                {type}.
                            </button>
                        </Link>
                    ))}
                </div>

                {/* Links */}
                <div>
                    <ul className="text-white text-[16px] md:text-[18px] mt-18">
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
                    animate={{ x: ["-100%", "100%"] }}
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
                <button className="px-4 py-2 bg-black text-white rounded-4xl border-2 border-white font-melodrama">
                    <Icon
                        icon="fluent-emoji-high-contrast:light-blue-heart"
                        className="inline-block mr-2"
                        width="20"
                        height="20"
                    />
                    MADE BY ADETOLA
                </button>
            </div>
        </motion.footer>
    );
};

export default Footer;
