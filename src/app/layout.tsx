import React from "react";
import type {Metadata} from "next";
import MainLayout from "@/components/template/MainLayout";
import "@/styles/index.scss";
import Providers from "@/app/providers";


export const metadata: Metadata = {
    title: "سامانه مقایسه و خرید آنلاین بیمه",
    description: "سامانه مقایسه و خرید آنلاین بیمه",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="fa">
        <body>
        <Providers>
            <MainLayout>
                {children}
            </MainLayout>
        </Providers>
        <div id="modal-root"/>
        </body>
        </html>
    );
}
