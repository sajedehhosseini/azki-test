"use client"

import {usePathname, useRouter} from "next/navigation";
import {useAppSelector, useAppDispatch} from "@/store/hooks";
import Dropdown from "@/components/molecule/Dropdown";
import {logoutAction} from "@/lib/actions/auth.actions";
import {resetUserInfo} from "@/store/slices/authSlice";
import {resetTPIWizardInfo} from "@/store/slices/tpiWizardSlice";

export default function UserHeaderProfile() {
    const auth = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const pathname = usePathname();

    const logoutUser = async () => {
        const res = await logoutAction();
        if (res.redirectTo) {
            await router.push(res.redirectTo);
        }
        dispatch(resetUserInfo())
        dispatch(resetTPIWizardInfo())
    }

    return (auth.firstName || auth.lastName) && pathname !== "/register" ? (
        <Dropdown>
            <Dropdown.Button>
                <img
                    src="/svg/user.svg"
                    alt="user"
                    width={20}
                    height={20}
                />
                <span className={"ms-2"}>{`${auth.firstName} ${auth.lastName}`}</span>
            </Dropdown.Button>
            <Dropdown.Content>
                <div className={"p-3"} onClick={logoutUser}>خروج</div>
            </Dropdown.Content>
        </Dropdown>
    ) : <span className={"font-bold"}>ثبت نام</span>
}