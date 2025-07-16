import Link from "next/link";
import InsuranceItemButton from "@/components/insurance/InsuranceItemButton";

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
