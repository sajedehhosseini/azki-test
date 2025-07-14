import React from "react";
import type {Metadata} from "next";
import "@/styles/index.scss";

export const metadata: Metadata = {
    title: "سامانه مقایسه و خرید آنلاین بیمه",
    description: "سامانه مقایسه و خرید آنلاین بیمه",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
