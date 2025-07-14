import Link from "next/link";
import Logo from "@/components/atoms/Logo";
import UserHeaderProfile from "@/components/molecule/UserHeaderProfile";

export default function Header() {
    return (
        <header className={"flex justify-between"}>
            <Link href="/" >
                <Logo/>
            </Link>

            <div className={"hidden sm:block font-bold"}>
                سامانه مقایسه و خرید آنلاین بیمه
            </div>

            <UserHeaderProfile/>
        </header>
    )
}