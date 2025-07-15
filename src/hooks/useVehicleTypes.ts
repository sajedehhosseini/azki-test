import { useQuery } from '@tanstack/react-query';

const fetchVehicleTypes = async (): Promise<string[]> => {
    const res = await fetch('/api/azki-proxy/api/product/vehicle/types',{
        next: { revalidate: 3600 },
        cache: "force-cache"
    });
    if (!res.ok) throw new Error('Failed to fetchVehicleTypes');
    return res.json();
};

export const useVehicleTypes = () => useQuery({
    queryKey: ['vehicle-types'],
    queryFn: fetchVehicleTypes
});