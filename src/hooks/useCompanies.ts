import { useQuery } from '@tanstack/react-query';
import {IThirdCompanies} from "@/lib/types/third-companies";


const fetchCompanies = async (): Promise<IThirdCompanies[]> => {
    try {
        const res = await fetch('/api/azki-proxy/api/product/third/companies',{
            next: { revalidate: 3600 },
            cache: "force-cache"
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch third companies: ${res.status} ${res.statusText}`);
        }
        const data: IThirdCompanies[] = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const useCompanies = () => useQuery({
    queryKey: ['campanies'],
    queryFn: fetchCompanies
});