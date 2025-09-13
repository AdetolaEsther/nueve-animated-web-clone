import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const SmoothFollower = dynamic(() => import("@/componenet/SmoothFollower"), {
    ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <SmoothFollower />
        </>
    );
}
