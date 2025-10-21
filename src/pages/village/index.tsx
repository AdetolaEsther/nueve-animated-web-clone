import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, useScroll } from "framer-motion";
import localFont from "next/font/local";
import Footer from "@/componenet/Footer";

const melodramaLight = localFont({
    src: "../../../public/font/Melodrama-Light.ttf",
    weight: "500",
    style: "normal",
});
const melodrama = localFont({
    src: "../../../public/font/Melodrama-Bold.ttf",
    weight: "700",
    style: "normal",
});

const Index = () => {
    const { scrollYProgress: pageScroll } = useScroll();

    const [showModal, setShowModal] = useState(false);

    const amenitiesByRoom = {
        Bathroom: [
            { name: "Hair dryer", icon: "mdi:hair-dryer-outline" },
            { name: "Cleaning products", icon: "mdi:spray-bottle" },
            { name: "Shampoo", icon: "mdi:bottle-tonic" },
            { name: "Body soap", icon: "mdi:shower" },
            { name: "Hot water", icon: "mdi:water-boiler" },
        ],
        "Bedroom & laundry": [
            { name: "Washing machine", icon: "mdi:washing-machine" },
            { name: "Essentials", icon: "mdi:tshirt-crew-outline" },
            { name: "Extra pillows & blankets", icon: "mdi:blanket" },
            { name: "Hangers", icon: "mdi:hanger" },
            { name: "Iron", icon: "mdi:iron" },
        ],
        Kitchen: [
            { name: "Refrigerator", icon: "mdi:fridge-outline" },
            { name: "Microwave", icon: "mdi:microwave" },
            { name: "Cooking basics", icon: "mdi:pot-steam-outline" },
            { name: "Dishes & silverware", icon: "mdi:silverware-fork-knife" },
            { name: "Coffee maker", icon: "mdi:coffee-maker-outline" },
        ],
    };
    
    return (
        <div className="bg-[#e9e4d9] min-h-screen flex flex-col items-center justify-start relative pt-40">
            <motion.div
                style={{ backgroundColor: "#e9e4d9", color: "#000" }}
                className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4"
            >
                <Image
                    src={"/logo-2.png"}
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

            <div className="w-full max-w-8xl px-4 flex flex-col items-center bg-[#e9e4d9]">
                <div className="w-[1px] mt-8 h-24 bg-gray-400"></div>

                <div className="relative flex items-center justify-center">
                    <img
                        src="/Nueve-list-1.png"
                        alt="centered"
                        className="w-48 h-48 rounded-full object-cover border border-gray-200"
                    />
                </div>

                <div className="text-center">
                    <h3
                        className="text-9xl font-bold text-black mb-10"
                        style={{ fontFamily: melodramaLight.style.fontFamily }}
                    >
                        the. {"{VILLAGE}"}
                    </h3>
                    <p className="text-gray-600 mt-4 font-light text-xl leading-6">
                        A bright single-family house in Vartholomio, just a few{" "}
                        <br />
                        minutes from Thinon beach, offers the ideal setting for
                        a
                        <br /> quiet summer vacation.
                    </p>
                </div>

                <div className="w-[1px] h-64 mt-2.5 bg-gray-400"></div>
                <div className="w-full max-w-7xl border border-gray-400 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-5 divide-x divide-gray-400">
                        {[
                            { label: "1", value: "visitors" },
                            { label: "1", value: "bedroom" },
                            { label: "1", value: "bed" },
                            { label: "2", value: "W.C" },
                            { label: "24", value: "mq" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center py-8 bg-[#e9e4d9]"
                            >
                                <p className="text-3xl font-semibold text-black">
                                    {item.label}
                                </p>
                                <p className="text-lg font-light text-black mt-1">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full mt-8">
                    <div className="shadow-md rounded-2xl overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2">
                            <Image
                                src="/Nueve-Village-Gallery-1.png"
                                alt="Classic main"
                                width={800}
                                height={600}
                                className="object-cover w-full h-full md:h-[600px] rounded-2xl shadow-lg"
                            />
                        </div>

                        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 p-1">
                            {[
                                "/Nueve-Village-Gallery-2.png",
                                "/Nueve-Village-Gallery-3.png",
                                "/Nueve-Village-Gallery-4.png",
                                "/Nueve-Village-Gallery-5.png",
                            ].map((src, index) => (
                                <div key={index} className="relative">
                                    <Image
                                        src={src}
                                        alt={"classic images"}
                                        width={500}
                                        height={400}
                                        className="w-full h-[290px] object-cover rounded-xl shadow-md border border-gray-200"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="px-8 mb-6">
                        <h2
                            className="text-9xl font-bold text-black mb-10"
                            style={{
                                fontSize: "5rem",
                                fontFamily: melodrama.style.fontFamily,
                            }}
                        >
                            retreat{" "}
                        </h2>
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-18">
                            <div className="flex flex-col gap-6">
                                <p className="text-gray-600 font-light text-2xl leading-10">
                                    A stylish and functional one-bedroom
                                    apartment, ideal for couples or solo
                                    travelers who want to be in the center of
                                    the action.
                                </p>
                                <p className="text-gray-600 font-light text-2xl leading-10">
                                    The earthy tones and contemporary design
                                    offer a sense of warmth, while the stylish
                                    space is equipped with all the amenities for
                                    a relaxing stay.
                                </p>
                            </div>

                            <div className=" rounded-2xl flex flex-col gap-6">
                                <p className="text-gray-600 font-light text-2xl  leading-10">
                                    With access to a beautiful terrace offering
                                    city views, Mini is the perfect choice for a
                                    warm and modern getaway in Patras.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" px-8 py-20 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                            <div className="flex flex-col gap-8">
                                <div className="border border-gray-300 rounded-2xl p-6 flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <Icon
                                            icon="mdi:laurel"
                                            className="text-3xl text-black"
                                        />
                                        <div>
                                            <p className="font-semibold text-lg text-black">
                                                Guest favorite
                                            </p>
                                            <p className="text-gray-700 text-sm">
                                                One of the most loved homes on
                                                Airbnb, according to guests
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-3xl font-bold text-black">
                                            4.97
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            stars
                                        </p>
                                    </div>
                                </div>

                                <div className="border border-gray-300 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-2 gap-y-8">
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            icon="mdi:wifi"
                                            className="text-2xl text-black"
                                        />
                                        <p className="text-lg text-black">
                                            Fast Wifi
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            icon="mdi:washing-machine"
                                            className="text-2xl text-black"
                                        />
                                        <p className="text-lg text-black">
                                            Washing machine
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            icon="mdi:snowflake"
                                            className="text-2xl text-black"
                                        />
                                        <p className="text-lg text-black">
                                            Air conditioning
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            icon="mdi:balcony"
                                            className="text-2xl text-black"
                                        />
                                        <p className="text-lg text-black">
                                            Balcony
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            icon="mdi:radiator"
                                            className="text-2xl text-black"
                                        />
                                        <p className="text-lg text-black">
                                            Heating
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            icon="mdi:television-classic"
                                            className="text-2xl text-black"
                                        />
                                        <p className="text-lg text-black">
                                            TV 58 with Netflix
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            icon="mdi:elevator"
                                            className="text-2xl text-black"
                                        />
                                        <p className="text-lg text-black">
                                            Elevator
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            icon="mdi:crib"
                                            className="text-2xl text-black"
                                        />
                                        <p className="text-lg text-black">
                                            Crib
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            icon="mdi:silverware-fork-knife"
                                            className="text-2xl text-black"
                                        />
                                        <p className="text-lg text-black">
                                            Cooking basics
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            icon="mdi:iron"
                                            className="text-2xl text-black"
                                        />
                                        <p className="text-lg text-black">
                                            Iron
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        className="w-full py-4 border border-gray-400 rounded-full text-lg text-black bg-[#d7d2c8] hover:bg-black hover:text-white"
                                        onClick={() => setShowModal(true)}
                                    >
                                        View all amenities
                                    </button>
                                </div>
                            </div>
                            {showModal && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                                    <div className="bg-[#f1ede6] rounded-2xl w-[90%] max-w-2xl p-10 shadow-xl relative">
                                        <button
                                            onClick={() => setShowModal(false)}
                                            className="absolute top-6 right-8 text-3xl text-gray-600 hover:text-black transition"
                                        >
                                            &times;
                                        </button>

                                        <div className="mb-8">
                                            <h2
                                                className="text-4xl text-black mb-1"
                                                style={{
                                                    fontFamily:
                                                        melodrama.style
                                                            .fontFamily,
                                                }}
                                            >
                                                Amenities
                                            </h2>
                                            <p className="text-gray-600 text-sm tracking-wide">
                                                Classic apartment amenities
                                            </p>
                                        </div>

                                        <div className="space-y-10 max-h-[50vh] overflow-y-auto pr-2">
                                            {Object.entries(
                                                amenitiesByRoom
                                            ).map(([room, items]) => (
                                                <div key={room}>
                                                    <h3 className="font-semibold bg-[#d7d2c8] px-4 py-1.5 rounded-full inline-block text-black mb-4 text-sm uppercase tracking-wide">
                                                        {room}
                                                    </h3>
                                                    <ul className="divide-y divide-gray-300 border-t border-gray-300">
                                                        {items.map(
                                                            (item, index) => (
                                                                <li
                                                                    key={index}
                                                                    className="flex items-center gap-3 py-4 text-[15px] text-black"
                                                                >
                                                                    <Icon
                                                                        icon={
                                                                            item.icon
                                                                        }
                                                                        width={
                                                                            20
                                                                        }
                                                                        height={
                                                                            20
                                                                        }
                                                                    />
                                                                    <span className="text-gray-800">
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </span>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="rounded-3xl overflow-hidden h-[500px] md:h-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.4032!2d21.734!3d38.244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e4b6c61a8d5e7%3A0x17a12f!2sPatras!5e0!3m2!1sen!2sgr!4v1633036800000!5m2!1sen!2sgr"
                                    className="w-full h-full grayscale-[20%] contrast-[90%]"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 mb-6">
                        <h2
                            className="text-9xl font-bold text-black mb-10"
                            style={{
                                fontSize: "5rem",
                                fontFamily: melodrama.style.fontFamily,
                            }}
                        >
                            comfort{" "}
                        </h2>
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-18">
                            <div className="flex flex-col gap-6">
                                <p className="text-gray-600 font-light text-2xl leading-10">
                                    A unique apartment in the center of Patras,
                                    which highlights the beauty of earthy colors
                                    and offers a warm, modern atmosphere.
                                </p>
                                <p className="text-gray-600 font-light text-2xl leading-10">
                                    With access to a balcony offering stunning
                                    views of the city center, the apartment
                                    creates a unique living experience, while
                                    offering the comfort and practicality that
                                    guests are looking for.
                                </p>
                            </div>

                            <div className=" rounded-2xl flex flex-col gap-6">
                                <p className="text-gray-600 font-light text-2xl  leading-10">
                                    The apartment is a real space of renewal in
                                    the heart of the city, with a harmonious
                                    composition of earthy tones that create a
                                    sense of calm and harmony.
                                </p>

                                <div className="flex gap-6">
                                    <p className="text-gray-600 font-light text-2xl leading-10">
                                        The spacious and bright areas of the
                                        apartment welcome you with comfortable
                                        furniture and decoration details that
                                        highlight the warmth of the house.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer scrollYProgress={pageScroll} />
        </div>
    );
};

export default Index;
