'use client';

import ReactDOM from 'react-dom';
import React from 'react';
import Button from "@/components/UI/Button";

type TModalProps = {
    show: boolean;
    onHide: () => void;
    children: React.ReactNode;
};

export default function Modal({show, onHide, title, children}: TModalProps) {
    if (!show) return null;

    const modalRoot = typeof window !== 'undefined' && document.getElementById('modal-root');
    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black opacity-30"
                onClick={onHide}
            />
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-xs md:max-w-md p-6 z-10">
                <h2 className="text-xl font-bold mb-4 text-[var(--primary-color)]">{title}</h2>
                <div>
                    {children}
                </div>
                <div className="flex justify-end mt-5">
                    <Button onClick={onHide}>
                        بستن
                    </Button>
                </div>
            </div>
        </div>,
        modalRoot
    );
}
