import React from "react";
import type {Metadata} from "next";
import MainLayout from "@/components/template/MainLayout";
import "@/styles/index.scss";
import ReduxProvider from "@/store/ReduxProvider";


export const metadata: Metadata = {
    title: "سامانه مقایسه و خرید آنلاین بیمه",
    description: "سامانه مقایسه و خرید آنلاین بیمه",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <ReduxProvider>
            <MainLayout>
                {children}
            </MainLayout>
        </ReduxProvider>
        </body>
        </html>
    );
}
