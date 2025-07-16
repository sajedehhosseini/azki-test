import { useQuery } from '@tanstack/react-query';
import {IVehicleCategory} from "@/lib/types/vehicle-types";

const fetchVehicleTypes = async (): Promise<IVehicleCategory[]> => {
    try {
        const res = await fetch('/api/azki-proxy/api/product/vehicle/types',{
            next: { revalidate: 3600 },
            cache: "force-cache"
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch vehicle types: ${res.status} ${res.statusText}`);
        }
        const data: IVehicleCategory[] = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const useVehicleTypes = () => useQuery({
    queryKey: ['vehicle-types'],
    queryFn: fetchVehicleTypes
});