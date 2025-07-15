import { useQuery } from '@tanstack/react-query';

const fetchCompanies = async (): Promise<string[]> => {
    const res = await fetch('/api/azki-proxy/api/product/third/companies',{
        next: { revalidate: 3600 },
        cache: "force-cache"
    });
    if (!res.ok) throw new Error('Failed to fetchCompanies');
    return res.json();
};

export const useCompanies = () => useQuery({
    queryKey: ['campanies'],
    queryFn: fetchCompanies
});