import InsuranceItemButton from "@/components/molecule/InsuranceItemButton";
import Link from "next/link";

export default function InsuranceList({data}) {
    return data.map(insuranceItem => {
            return insuranceItem.enabled ? (
                <Link href={insuranceItem.url} key={insuranceItem.id}>
                    <InsuranceItemButton data={insuranceItem}/>
                </Link>
            ) : (
                <InsuranceItemButton data={insuranceItem} key={insuranceItem.id}/>
            );
        }
    )
}
