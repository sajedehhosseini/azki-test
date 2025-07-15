import React, {createContext, useContext, useState} from "react";
type TDropdownContextType = {
    open: boolean;
    setOpen: (open: boolean) => void;
};
const DropdownContext = createContext<TDropdownContextType>({
    open: false,
    setOpen: () => {},
});

export default function Dropdown({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <DropdownContext.Provider value={{ open, setOpen }}>
            <div className="relative inline-block text-left">{children}</div>
        </DropdownContext.Provider>
    );
}

Dropdown.Button = function DropdownButton({ children }: { children: React.ReactNode }) {
    const { open, setOpen } = useContext(DropdownContext);

    return (
        <button
            onClick={() => setOpen(!open)}
            className="flex p-2 rounded-md"
        >
            {children}
        </button>
    );
};
Dropdown.Content = function DropdownContent({ children }: { children: React.ReactNode }) {
    const { open } = useContext(DropdownContext);

    if (!open) return null;

    return (
        <div className="absolute z-10 w-35 mt-2 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
            {children}
        </div>
    );
};