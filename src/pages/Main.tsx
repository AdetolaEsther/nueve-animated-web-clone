import Image from "next/image";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import localFont from "next/font/local";


const melodrama = localFont({
    src: "../../public/font/Melodrama-Bold.ttf",
    weight: "700",
    style: "normal",
});

const melodramaLight = localFont({
    src: "../../public/font/Melodrama-Light.ttf",
    weight: "300",
    style: "normal",
});
const Main = () => {
    const ref = useRef(null);
    const { scrollYProgress: imageScroll } = useScroll({
        target: ref,
        offset: ["start 90%", "50% start"],
    });

    const rawWidth = useTransform(imageScroll, [0, 0.7], ["15vw", "100vw"]);
    const rawRadius = useTransform(imageScroll, [0.1, 0.7], ["1200px", "0px"]);
    const rawY = useTransform(imageScroll, [0, 0.8], ["100px", "-40px"]);
    const rawScale = useTransform(imageScroll, [0.7, 1], [1, 1.2]);

    const scale = useSpring(rawScale, { stiffness: 90, damping: 20 });
    const width = useSpring(rawWidth, { stiffness: 90, damping: 20 });
    const radius = useSpring(rawRadius, { stiffness: 90, damping: 20 });
    const y = useSpring(rawY, { stiffness: 90, damping: 20 });

    const { scrollYProgress: pageScroll } = useScroll();

    const background = useTransform(
        pageScroll,
        [0, 0.3, 0.6, 1],
        ["#e9e4d9", "#e9e4d9", "#000", "#000"]
    );

    const textColor = useTransform(
        pageScroll,
        [0, 0.3, 0.6, 1],
        ["#000", "#000", "#fff", "#fff"]
    );

    const [logo, setLogo] = useState("/logo-2.png");

    useMotionValueEvent(pageScroll, "change", (latest) => {
        setLogo(latest > 0.3 ? "/logo-white.png" : "/logo-2.png");
    });

    const [activeTab, setActiveTab] = useState<"classic" | "mini" | "village">(
        "classic"
    );
    const images = {
        classic: [
            "/Nueve-list-1.png",
            "/Nueve-list-2.png",
            "/Nueve-list-3.png",
            "/Nueve-list-4.png",
            "/Nueve-list-5.png",
            "/Nueve-list-6.png",
        ],
        mini: [
            "/Nueve-Home-Mini-1.png",
            "/Nueve-Home-Mini-2.png",
            "/Nueve-Home-Mini-3.png",
            "/Nueve-Home-Mini-4.png",
            "/Nueve-Home-Mini-5.png",
            "/Nueve-Home-Mini-6.png",
        ],
        village: [
            "/Nueve-Village-Gallery-1.png",
            "/Nueve-Village-Gallery-2.png",
            "/Nueve-Village-Gallery-3.png",
            "/Nueve-Village-Gallery-4.png",
            "/Nueve-Village-Gallery-5.png",
            "/Nueve-Village-Gallery-6.png",
        ],
    };
    const amenities = [
        { title: "Internet access", icon: "material-symbols-light:wifi-sharp" },
        {
            title: "Air conditioning",
            icon: "streamline:interface-weather-snow-flake-winter-freeze-snow-freezing-ice-cold-weather-snowflake",
        },
        { title: "Heating", icon: "ph:thermometer-thin" },
        { title: "Kitchen", icon: "mdi:silverware" },
        { title: "Flat TV", icon: "f7:tv" },
        { title: "Balcony", icon: "iconoir:balcony" },
        {
            title: "Beach access",
            icon: "streamline:travel-places-beach-island-waves-outdoor-recreation-tree-beach-palm-wave-water",
        },
        { title: "Washing machine", icon: "ph:washing-machine-light" },
    ];

    return (
        <div>
            <div className="relative z-[1] overflow-x-hidden overflow-y-hidden">
                <motion.div
                    style={{ backgroundColor: background, color: textColor }}
                    className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4"
                >
                    <Image
                        src={
                            pageScroll.get() > 0.3
                                ? "/logo-white.png"
                                : "/logo-2.png"
                        }
                        alt="nueve-logo"
                        width={220}
                        height={120}
                    />
                    <div className="flex items-center gap-4">
                        <h3 className="m-0">EN</h3>
                        <h3 className="m-0">EL</h3>
                        <Icon
                            icon="mdi-light:menu"
                            className="cursor-pointer"
                            width="40"
                            height="40"
                        />
                    </div>
                </motion.div>
                
                <div>
                    <div className="bg-[#e9e4d9] h-screen flex justify-center items-center z-20">
                        <h1 className="text-black text-8xl font-bold leading-tight text-center">
                            there is no place like <br />
                            <span className="block font-extralight">home.</span>
                        </h1>
                    </div>
                    <section
                        ref={ref}
                        className="relative h-[100vh] flex justify-center overflow-hidden -mt-[30vh] z-30"
                    >
                        <motion.div
                            style={{
                                width: width,
                                height: "100vh",
                                y,
                                scale,
                                borderTopLeftRadius: radius,
                                borderTopRightRadius: radius,
                                backgroundImage: "url('/Nueve-Image-127.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                left: 0,
                                right: 0,
                                margin: "0 auto",
                                position: "absolute",
                            }}
                            className="h-screen"
                        />
                    </section>
                </div>

                <div className="bg-[#e9e4d9] min-h-screen px-8 md:px-14 py-16 z-30">
                    <h2
                        className="text-9xl font-bold text-black mb-12"
                        style={{
                            fontSize: "15rem",
                            fontFamily: melodrama.style.fontFamily,
                        }}
                    >
                        decthe.
                    </h2>
                    <div className="px-24 grid grid-cols-1 md:grid-cols-2 gap-18">
                        <div className="p-6 flex flex-col gap-6">
                            <p className="text-gray-600 font-light text-2xl leading-10">
                                Our collection of select accommodations,
                                designed with an emphasis on comfort, style, and
                                functionality, offers you a unique stay.
                            </p>
                            <p className="text-gray-600 font-light text-2xl leading-10">
                                Whether you prefer the spaciousness of the
                                Classic or the compact luxury of the Mini in
                                Patras, or the serenity of the Village Family
                                Home in Vartholomio, each choice guarantees an
                                unforgettable stay.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl flex flex-col gap-6">
                            <p className="text-gray-600 font-light text-2xl leading-10 leading-10">
                                With modern decor, earthy tones, and all the
                                amenities you need, our properties are ideal for
                                families, couples, or groups of friends. Relax,
                                enjoy your space, and discover the area at your
                                own pace.
                            </p>

                            <div className="flex gap-6">
                                <button
                                    className="px-6 py-4 bg-[url('/Nueve-list-4.png')] font-normal text-[#e9e4d9] text-2xl rounded-full"
                                    style={{
                                        fontSize: "2rem",
                                        fontFamily:
                                            melodramaLight.style.fontFamily,
                                    }}
                                >
                                    classic{" "}
                                </button>
                                <button
                                    className="px-4 py-2 bg-[url('/Nueve-Home-Mini-6.png')] text-[#e9e4d9] text-2xl rounded-full"
                                    style={{
                                        fontSize: "2rem",
                                        fontFamily:
                                            melodramaLight.style.fontFamily,
                                    }}
                                >
                                    mini{" "}
                                </button>
                                <button
                                    className="px-4 py-2 bg-[url('/Nueve-Home-Mini-2.png')]  text-[#e9e4d9] text-2xl rounded-full"
                                    style={{
                                        fontSize: "2rem",
                                        fontFamily:
                                            melodramaLight.style.fontFamily,
                                    }}
                                >
                                    village{" "}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-black min-h-screen px-8 md:px-14 py-16 z-30">
                    <h2
                        className="text-9xl font-bold text-white mb-12 text-right"
                        style={{
                            fontSize: "15rem",
                            fontFamily: melodrama.style.fontFamily,
                        }}
                    >
                        gallery.
                    </h2>

                    <div className="flex gap-12 text-3xl text-white mb-12">
                        {["classic", "mini", "village"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() =>
                                    setActiveTab(tab as typeof activeTab)
                                }
                                className={`pb-1 border-b-2 ${
                                    activeTab === tab
                                        ? "border-white"
                                        : "border-transparent"
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images[activeTab].map((src, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl overflow-hidden"
                            >
                                <img
                                    src={src}
                                    alt={`${activeTab} ${i + 1}`}
                                    className="w-full h-full object-cover rounded-xl

"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-[#e9e4d9] min-h-screen flex flex-col items-center justify-center px-8 md:px-14 py-16 relative z-20">
                    <h2
                        className="text-9xl font-bold text-black mb-12 font-melodrama"
                        style={{
                            fontSize: "15rem",
                            fontFamily: melodrama.style.fontFamily,
                        }}
                    >
                        amenities.
                    </h2>
                    <h2 className="text-gray-600 font-light text-2xl">
                        Each accommodation offers a distinct experience.
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-8xl">
                        {amenities.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-15 border-b border-r border-gray-700 last:border-r-0"
                            >
                                <Icon
                                    icon={item.icon}
                                    className="text-4xl mb-2 text-black"
                                />
                                <p className="text-black text-lg">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button className="px-8 py-4 bg-black text-white rounded-4xl mt-12 ">
                        Book Now
                    </button>
                </div>
            </div>

            <motion.div
                style={{
                    clipPath: useTransform(
                        pageScroll,
                        [0.8, 1],
                        ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
                    ),
                }}
                className=" bottom-0 left-0 w-full h-screen bg-black flex flex-col px-8 md:px-14 py-16 -z-50"
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

                    <div>
                        <h2 className="text-lg md:text-xl text-gray-400 mb-4">
                            {" "}
                        </h2>
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
                            style={{
                                fontFamily: melodramaLight.style.fontFamily,
                            }}
                        >
                            residence.
                        </span>{"  "}
                        nueve
                        <span
                            className="font-extralight"
                            style={{
                                fontFamily: melodramaLight.style.fontFamily,
                            }}
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
            </motion.div>
        </div>
    );
};

export default Main;
