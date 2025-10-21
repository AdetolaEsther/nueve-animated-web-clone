import { useEffect, useState } from "react";
import Main from "./Main";
import localFont from "next/font/local";

const melodrama = localFont({
    src: "../../public/font/Melodrama-Bold.ttf",
    weight: "700",
    style: "italic",
});

export default function Home() {
    const [progress, setProgress] = useState(0);
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        if (showSplash) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setTimeout(() => setShowSplash(false), 400);
                        return 100;
                    }
                    return prev + 1;
                });
            }, 20);
            return () => clearInterval(interval);
        }
    }, [showSplash]);

    return (
        <>
            {showSplash ? (
                <div
                    style={{
                        position: "relative",
                        height: "100vh",
                        width: "100vw",
                        backgroundColor: "#e9e4d9",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                            backgroundColor: "black",
                            transform: `translateX(${progress}%)`,
                            transition: "transform 0.02s linear",
                            display: "flex",
                            alignItems: "flex-end", 
                            justifyContent: "flex-start", 
                        }}
                    >
                        <span
                            style={{
                                fontSize: "16rem",
                                fontWeight: "bold",
                                color: "#e9e4d9",
                                fontFamily: melodrama.style.fontFamily,
                            }}
                        >
                            {progress}
                        </span>
                    </div>
                </div>
            ) : (
                <Main />
            )}
        </>
    );
}
