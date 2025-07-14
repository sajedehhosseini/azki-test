export default function UserHeaderProfile() {
    return false ? (
        <div className={"flex items-center"}>
            <img
                src="/svg/user.svg"
                alt="user"
                width={20}
                height={20}
            />
            <span className={"ms-2"}>s.hosseini</span>
        </div>
    ) : <span className={"font-bold"}>ثبت نام</span>
}