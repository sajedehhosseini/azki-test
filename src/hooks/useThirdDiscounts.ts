import { useQuery } from '@tanstack/react-query';
import {IThirdDiscounts} from "@/lib/types/third-discounts";

const fetchThirdDiscounts = async (): Promise<IThirdDiscounts[]> => {
    try {
        const res = await fetch('/api/azki-proxy/api/product/third/third-discounts',{
            next: { revalidate: 3600 },
            cache: "force-cache"
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch third discounts: ${res.status} ${res.statusText}`);
        }
        const data: IThirdDiscounts[] = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const useThirdDiscounts = () => useQuery({
    queryKey: ['third-discounts'],
    queryFn: fetchThirdDiscounts
});