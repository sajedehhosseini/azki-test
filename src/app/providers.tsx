'use client';

import React, {useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ReduxProvider from "@/store/ReduxProvider";

export default function Providers({children}: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <ReduxProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ReduxProvider>
    );
}
