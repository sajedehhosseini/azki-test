import Link from "next/link";
import Logo from "@/components/atoms/Logo";
import UserHeaderProfile from "@/components/molecule/UserHeaderProfile";
import Row from "@/components/atoms/Row";
import Col from "@/components/atoms/Col";

export default function Header() {
    return (
        <header className={"flex justify-between px-4 md:px-0"}>
            <Row>
                <Col xs={6} md={4}>
                    <Link href="/">
                        <Logo/>
                    </Link>
                </Col>
                <Col xs={4} className={"hidden md:block font-bold text-center"}>
                    سامانه مقایسه و خرید آنلاین بیمه
                </Col>
                <Col xs={6} md={4} className={"flex justify-end"}>
                    <UserHeaderProfile/>
                </Col>
            </Row>
        </header>
    )
}