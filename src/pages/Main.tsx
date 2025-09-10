import Image from "next/image";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "framer-motion";

const Main = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 50%", "end 50%"],
    });

    const width = useTransform(scrollYProgress, [0, 1], ["20%", "120%"]);
    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const borderTopLeftRadius = useTransform(
        scrollYProgress,
        [0, 1],
        ["50%", "0%"]
    );
    const borderTopRightRadius = useTransform(
        scrollYProgress,
        [0, 1],
        ["50%", "0%"]
    );
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
    return (
        <div className="overflow-x-hidden">
            <div className="fixed top-0 left-0 w-full z-50 bg-[#e9e4d9] flex justify-between items-center px-8 py-4">
                <Image
                    src="/logo-2.png"
                    alt="nueve-logo"
                    width={220}
                    height={120}
                />
                <div className="flex items-center gap-4">
                    <h3 className="m-0 text-black">EN</h3>
                    <h3 className="m-0 text-black">EL</h3>
                    <Icon
                        icon="mdi-light:menu"
                        className="text-gray-600 cursor-pointer"
                        width="40"
                        height="40"
                    />
                </div>
            </div>

            <div className="bg-[#e9e4d9] h-screen flex justify-center items-center">
                <h1 className="text-black text-8xl font-bold leading-tight text-center">
                    there is no place like <br />
                    <span className="block font-extralight">home.</span>
                </h1>
            </div>
            <div
                ref={ref}
                className="bg-[#e9e4d9] min-h-screen flex justify-center items-center"
            >
                <motion.div
                    style={{
                        width,
                        height,
                        borderTopLeftRadius,
                        borderTopRightRadius,
                    }}
                    className="relative overflow-hidden"
                >
                    <Image
                        src="/Nueve-Image-127.webp"
                        alt="animated-image"
                        width={1200}
                        height={800}
                        className="object-cover w-full h-full"
                    />
                </motion.div>
            </div>
            <div className="bg-[#e9e4d9] min-h-screen px-8 md:px-14 py-16">
                <h2 className="text-9xl font-bold text-black mb-12">deco.</h2>
                <div className="px-24 grid grid-cols-1 md:grid-cols-2 gap-18">
                    <div className="p-8 rounded-2xl flex flex-col gap-6">
                        <p className="text-gray-700 text-2xl">
                            Our collection of select accommodations, designed{" "}
                            <br />
                            with an emphasis on comfort, style, and
                            functionality, offers <br />
                            you a unique stay.
                        </p>
                        <p className="text-gray-700 text-2xl">
                            Whether you prefer the spaciousness of the Classic
                            or <br />
                            the compact luxury of the Mini in Patras, or the
                            serenity <br />
                            of the Village Family Home in Vartholomio, each
                            choice <br />
                            guarantees an unforgettable stay.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl flex flex-col gap-6">
                        <p className="text-gray-700 text-2xl">
                            With modern decor, earthy tones, and all the
                            amenities <br />
                            you need, our properties are ideal for families,
                            couples, or <br />
                            groups of friends. Relax, enjoy your space, and
                            discover <br />
                            the area at your own pace.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-4 py-2 bg-[url('/Nueve-list-4.png')] text-white rounded-3xl">
                                classic{" "}
                            </button>
                            <button className="px-4 py-2 bg-[url('/Nueve-Home-Mini-6.png')] text-white rounded-3xl">
                                mini{" "}
                            </button>
                            <button className="px-4 py-2 bg-[url('/Nueve-Home-Mini-2.png')] text-white rounded-3xl">
                                village{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black min-h-screen px-8 md:px-14 py-16">
                <h2 className="text-9xl font-bold text-white mb-12 text-right">
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
        </div>
    );
};

export default Main;
