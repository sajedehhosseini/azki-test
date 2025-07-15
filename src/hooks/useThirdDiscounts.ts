import { useQuery } from '@tanstack/react-query';

const fetchThirdDiscounts = async (): Promise<string[]> => {
    const res = await fetch('/api/azki-proxy/api/product/third/third-discounts',{
        next: { revalidate: 3600 },
        cache: "force-cache"
    });
    if (!res.ok) throw new Error('Failed to fetchCompanies');
    return res.json();
};

export const useThirdDiscounts = () => useQuery({
    queryKey: ['third-discounts'],
    queryFn: fetchThirdDiscounts
});