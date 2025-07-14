import React from "react";
import Header from "@/components/organism/Header";
import styles from '@/styles/MainLayout.module.scss';

export default function MainLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className={styles.layout}>
            <Header/>
            <main>
                {children}
            </main>
            <img
                className={styles.carGreen}
                src="/svg/car-green.svg"
                alt="car-green"
            />
        </div>
    )
}