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
import Footer from "@/componenet/Footer";
import { useRouter } from "next/navigation";
import { Modal, IconButton, Box } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos, Close } from "@mui/icons-material";

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
    const router = useRouter();

    const { scrollYProgress: imageScroll } = useScroll({
        target: ref,
        offset: ["start 90%", "50% start"],
    });

    const rawWidth = useTransform(imageScroll, [0, 0.7], ["4vw", "100vw"]);
    const rawRadius = useTransform(imageScroll, [0.1, 0.7], ["1200px", "0px"]);
    const rawY = useTransform(imageScroll, [0, 0.8], ["100px", "-40px"]);
    const rawScale = useTransform(imageScroll, [0.7, 1], [1, 1.2]);

    const scale = useSpring(rawScale, { stiffness: 90, damping: 20 });
    const width = useSpring(rawWidth, { stiffness: 90, damping: 20 });
    const radius = useSpring(rawRadius, { stiffness: 90, damping: 20 });
    const y = useSpring(rawY, { stiffness: 90, damping: 20 });

    const { scrollYProgress: pageScroll } = useScroll();
    const galleryRef = useRef(null);
    const { scrollYProgress: galleryScroll } = useScroll({
        target: galleryRef,
        offset: ["start end", "end start"],
    });

    const galleryBg = useTransform(
        galleryScroll,
        [0, 0.3, 0.4, 1],
        ["#e9e4d9", "#e9e4d9", "#000000", "#000000"]
    );

    const galleryText = useTransform(
        galleryScroll,
        [0, 0.3, 0.4, 1],
        ["#000000", "#000000", "#ffffff", "#ffffff"]
    );

    const textColor = useTransform(
        pageScroll,
        [0, 0.3, 0.6, 1],
        ["#000", "#000", "#fff", "#fff"]
    );


const amenityRef = useRef(null);
const { scrollYProgress: amenityScroll } = useScroll({
    target: amenityRef,
    offset: ["start end", "end start"],
});

const amenityBg = useTransform(
    amenityScroll,
    [0, 0.3, 0.3, 1],
    ["#000000", "#000000", "#e9e4d9", "#e9e4d9"]
);

const amenityText = useTransform(
    amenityScroll,
    [0, 0.3, 0.6, 1],
    ["#ffffff", "#ffffff", "#000000", "#000000"]
);

    const [logo, setLogo] = useState("/logo-2.png");
    const [menuOpen, setMenuOpen] = useState(false);

    const buttons = [
        {
            label: "CLASSIC.",
            href: "/classic",
            bg: "url('/Nueve-list-4.png')",
        },
        {
            label: "mini.",
            href: "/mini",
            bg: "url('/Nueve-Home-Mini-6.png')",
        },
        {
            label: "VILLAGE",
            href: "/village",
            bg: "url('/Nueve-Home-Mini-2.png')",
        },
    ];
    useMotionValueEvent(pageScroll, "change", (latest) => {
        setLogo(latest > 0.3 ? "/logo-white.png" : "/logo-2.png");
    });

    const [activeTab, setActiveTab] = useState<"CLASSIC" | "mini" | "VILLAGE">(
        "CLASSIC"
    );
    const images = {
        CLASSIC: [
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
        VILLAGE: [
            "/Nueve-Village-Gallery-1.png",
            "/Nueve-Village-Gallery-2.png",
            "/Nueve-Village-Gallery-3.png",
            "/Nueve-Village-Gallery-4.png",
            "/Nueve-Village-Gallery-5.png",
            "/Nueve-Village-Gallery-6.png",
        ],
    };
    const allImages = [...images.CLASSIC, ...images.mini, ...images.VILLAGE];

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
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const handleOpen = (index: number) => {
        setSelectedIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedIndex(null);
    };

    const handleNext = () => {
        if (selectedIndex !== null)
            setSelectedIndex((selectedIndex + 1) % images[activeTab].length);
    };

    const handlePrev = () => {
        if (selectedIndex !== null)
            setSelectedIndex(
                (selectedIndex - 1 + images[activeTab].length) %
                    images[activeTab].length
            );
    };
    return (
        <div>
            <div className="relative z-[1] overflow-x-hidden overflow-y-hidden">
                <motion.div
                    style={{
                        color: menuOpen ? "#fff" : textColor,
                    }}
                    className="fixed top-0 left-0 w-full z-[101] flex justify-between items-center px-8 py-4 transition-colors duration-500"
                >
                    <Image
                        src={
                            menuOpen
                                ? "/logo-white.png"
                                : pageScroll.get() > 0.3
                                ? "/logo-white.png"
                                : "/logo-2.png"
                        }
                        alt="nueve-logo"
                        width={220}
                        height={120}
                    />

                    <div className="flex items-center gap-4">
                        <h3
                            className="m-0 w-10 h-10 font-bold flex items-center justify-center rounded-full backdrop-blur-md"
                            style={{
                                color: menuOpen ? "#fff" : textColor.get(),
                                backgroundColor: "rgba(255, 255, 255, 0.15)",
                            }}
                        >
                            EN
                        </h3>

                        <h3
                            className="m-0"
                            style={{
                                color: menuOpen ? "#fff" : textColor.get(),
                            }}
                        >
                            EL
                        </h3>

                        <Icon
                            icon={menuOpen ? "mdi-light:close" : "codicon:menu"}
                            className="cursor-pointer"
                            style={{
                                color: menuOpen ? "#fff" : textColor.get(),
                                zIndex: 101,
                            }}
                            width="40"
                            height="40"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />
                    </div>
                </motion.div>

                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black text-white flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-1/4 p-6 md:p-8 flex flex-col justify-start h-full pt-20 md:pt-38">
                            <div
                                className="flex flex-col text-5xl sm:text-6xl md:text-8xl space-y-4 md:space-y-8"
                                style={{
                                    fontFamily: melodramaLight.style.fontFamily,
                                }}
                            >
                                {[
                                    "Home",
                                    "Residence",
                                    "Experience",
                                    "Contacts",
                                ].map((item, idx) => (
                                    <motion.span
                                        key={idx}
                                        className="cursor-pointer"
                                        whileHover={{
                                            y: [-9, 8, -8],
                                            transition: {
                                                repeat: Infinity,
                                                duration: 9,
                                            },
                                        }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="text-xs sm:text-sm mt-auto pt-6 md:pt-0">
                                © 2025 All rights reserved
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden relative my-6 md:my-0">
                            <motion.div
                                className="flex flex-col gap-6 sm:gap-8"
                                animate={{ y: ["0%", "-50%"] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 60,
                                    ease: "linear",
                                }}
                            >
                                {[...allImages, ...allImages].map(
                                    (img, index) => (
                                        <div
                                            key={index}
                                            className="rounded-3xl overflow-hidden w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 flex-shrink-0 mx-auto"
                                        >
                                            <Image
                                                src={img}
                                                alt={`image-${index}`}
                                                width={270}
                                                height={270}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    )
                                )}
                            </motion.div>
                        </div>

                        <div className="w-full md:w-1/4 p-6 md:p-10 flex flex-col justify-center gap-4 text-center md:text-left">
                            <div>
                                <h4 className="text-lg font-semibold">Mail</h4>
                                <p className="text-sm">info@example.com</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Phone</h4>
                                <p className="text-sm">+1234567890</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">
                                    Social Media
                                </h4>
                                <p className="text-sm">@nueve</p>
                            </div>

                            <p className="text-white text-5xl sm:text-6xl md:text-7xl mt-8 md:ml-auto">
                                ( 9 )
                            </p>

                            <div className="mt-8 space-y-2">
                                <p>book now</p>
                                <p>Privacy policy</p>
                                <p>cookies</p>
                            </div>
                        </div>
                    </motion.div>
                )}

                <div>
                    <div className="bg-[#e9e4d9] h-screen flex justify-center items-center z-20">
                        <h1 className="text-black text-8xl font-extrabold leading-tight text-center">
                            there is no place like <br />
                            <span
                                className="font-extralight"
                                style={{
                                    fontSize: "10rem",
                                    fontStyle: "italic",
                                }}
                            >
                                home.
                            </span>
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
                                backgroundColor: "#e9e4d9",
                                left: 0,
                                right: 0,
                                margin: "0 auto",
                                position: "absolute",
                            }}
                            className="h-screen"
                        />
                    </section>
                </div>

                <div className="bg-[#e9e4d9] min-h-screen px-6 md:px-14 py-12 md:py-16 z-30">
                    <h2
                        className="text-6xl sm:text-9xl lg:text-[15rem] font-bold text-black mb-8 md:mb-12 leading-none text-center md:text-left"
                        style={{
                            fontFamily: melodrama.style.fontFamily,
                        }}
                    >
                        deco.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-18 px-0 md:px-24">
                        <div className="p-4 md:p-6 flex flex-col gap-4 md:gap-6">
                            <p className="text-gray-600 font-light text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-10">
                                Our collection of select accommodations,
                                designed with an emphasis on comfort, style, and
                                functionality, offers you a unique stay.
                            </p>
                            <p className="text-gray-600 font-light text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-10">
                                Whether you prefer the spaciousness of the
                                Classic or the compact luxury of the Mini in
                                Patras, or the serenity of the Village Family
                                Home in Vartholomio, each choice guarantees an
                                unforgettable stay.
                            </p>
                        </div>

                        <div className="p-4 md:p-8 rounded-2xl flex flex-col gap-4 md:gap-6">
                            <p className="text-gray-600 font-light text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-10">
                                With modern decor, earthy tones, and all the
                                amenities you need, our properties are ideal for
                                families, couples, or groups of friends. Relax,
                                enjoy your space, and discover the area at your
                                own pace.
                            </p>

                            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
                                {buttons.map((btn, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => router.push(btn.href)}
                                        className="relative px-6 py-3 md:py-4 font-normal text-[#e9e4d9] text-xl md:text-2xl rounded-full overflow-hidden"
                                        style={{
                                            backgroundImage: btn.bg,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            fontFamily:
                                                melodramaLight.style.fontFamily,
                                        }}
                                        whileHover={{
                                            y: -6,
                                            scale: 1.1,
                                            rotate: -5,
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        drag
                                        dragConstraints={{
                                            top: -10,
                                            bottom: 10,
                                            left: -10,
                                            right: 10,
                                        }}
                                        dragElastic={0.3}
                                    >
                                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

                                        <span className="relative z-10">
                                            {btn.label}
                                        </span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <section ref={galleryRef}>
                    <motion.div
                        style={{
                            backgroundColor: galleryBg,
                            transition: "background-color 0.2s ease",
                        }}
                        className="min-h-screen px-8 md:px-14 py-16 z-30"
                    >
                        <motion.h2
                            className="font-bold mb-8 md:mb-12 leading-none text-center md:text-right text-6xl sm:text-9xl lg:text-[15rem]"
                            style={{
                                fontFamily: melodrama.style.fontFamily,
                                color: galleryText,
                            }}
                        >
                            gallery.
                        </motion.h2>

                        <motion.div
                            className="flex gap-12 text-3xl md:text-5xl mb-12"
                            style={{ color: galleryText }}
                        >
                            {["CLASSIC", "mini", "VILLAGE"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() =>
                                        setActiveTab(tab as typeof activeTab)
                                    }
                                    className={`pb-1 border-b-2 ${
                                        activeTab === tab
                                            ? "border-current"
                                            : "border-transparent"
                                    }`}
                                    style={{
                                        fontFamily: melodrama.style.fontFamily,
                                        fontStyle: "italic",
                                    }}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {images[activeTab].map((src, i) => (
                                <div
                                    key={i}
                                    className="p-8 rounded-2xl overflow-hidden"
                                >
                                    <img
                                        src={src}
                                        alt={`${activeTab} ${i + 1}`}
                                        onClick={() => handleOpen(i)}
                                        className="w-full h-full object-cover rounded-xl

"
                                    />
                                </div>
                            ))}
                        </div>
                        <Modal open={open} onClose={handleClose}>
                            <Box
                                sx={{
                                    position: "fixed",
                                    inset: 0,
                                    bgcolor: "rgba(0,0,0,0.7)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    zIndex: 1000,
                                }}
                            >
                                <IconButton
                                    onClick={handleClose}
                                    sx={{
                                        position: "absolute",
                                        top: 20,
                                        right: 20,
                                        color: "white",
                                    }}
                                >
                                    <Close fontSize="large" />
                                </IconButton>

                                <IconButton
                                    onClick={handlePrev}
                                    sx={{
                                        position: "absolute",
                                        left: 20,
                                        color: "white",
                                    }}
                                >
                                    <ArrowBackIosNew fontSize="large" />
                                </IconButton>

                                {selectedIndex !== null && (
                                    <Image
                                        src={images[activeTab][selectedIndex]}
                                        alt={`modal-${selectedIndex}`}
                                        width={1000}
                                        height={800}
                                        className="max-w-[90vw] max-h-[100vh] object-contain rounded-xl"
                                    />
                                )}

                                <IconButton
                                    onClick={handleNext}
                                    sx={{
                                        position: "absolute",
                                        right: 20,
                                        color: "white",
                                    }}
                                >
                                    <ArrowForwardIos fontSize="large" />
                                </IconButton>
                            </Box>
                        </Modal>
                    </motion.div>
                </section>

                <section ref={amenityRef}>
                    <motion.div
                        style={{
                            backgroundColor: amenityBg,
                            color: amenityText,
                            transition:
                                "background-color 0.2s ease, color 0.3s ease",
                        }}
                        className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-14 py-12 md:py-16"
                    >
                        {" "}
                        <h2
                            className="font-bold leading-none text-center text-5xl sm:text-7xl md:text-[200px] lg:text-[240px]"
                            style={{
                                fontFamily: melodrama.style.fontFamily,
                            }}
                        >
                            amenities.
                        </h2>
                        <h2 className="font-light text-base sm:text-lg md:text-2xl text-center max-w-2xl mx-auto mb-8 md:mb-12">
                            Each accommodation offers a distinct experience.
                        </h2>
                        <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 border border-gray-400 border-opacity-50">
                            {amenities.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center aspect-square border-gray-400 border-opacity-50 border-r border-b last:border-r-0"
                                >
                                    <Icon
                                        icon={item.icon}
                                        className="text-3xl md:text-4xl mb-3 text-black"
                                    />
                                    <p className="text-black text-sm sm:text-base font-light tracking-wide">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full mt-10 md:mt-12 text-sm sm:text-base md:text-lg">
                            Book Now
                        </button>
                    </motion.div>
                </section>
                <div className="bg-[#e9e4d9] mt-40 min-h-screen flex flex-col items-center justify-center px-8 md:px-14 py-16 relative z-20">
                    {" "}
                </div>
            </div>

            <Footer scrollYProgress={pageScroll} />
        </div>
    );
};

export default Main;
