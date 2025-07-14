"use client"

import {useAppSelector} from "@/store/hooks";

export default function UserHeaderProfile() {
    const auth = useAppSelector(state => state.auth)
    return auth.firstName || auth.lastName ? (
        <div className={"flex items-center"}>
            <img
                src="/svg/user.svg"
                alt="user"
                width={20}
                height={20}
            />
            <span className={"ms-2"}>{`${auth.firstName} ${auth.lastName}`}</span>
        </div>
    ) : <span className={"font-bold"}>ثبت نام</span>
}