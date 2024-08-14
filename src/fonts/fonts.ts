import localFont from "next/font/local";

export const geist_mono = localFont({
    src: [
        {
            path: "./reg.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./semibold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./med.woff2",
            weight: "500",
            style: "medium",
        },
        {
            path: "./bold.woff2",
            weight: "700",
            style: "italic",
        },
    ],
});
