import React, { createContext, useState, ReactNode, useMemo } from 'react';

interface PerformanceMetric {
    id: string;
    name: string;
    value: number;
}

interface PerformanceMetricContextType {
    metrics: PerformanceMetric[];
    setMetrics: React.Dispatch<React.SetStateAction<PerformanceMetric[]>>;
}

const PerformanceMetricContext = createContext<PerformanceMetricContextType>({
    metrics: [],
    setMetrics: () => {},
});

export const PerformanceMetricProvider = ({ children }: { children: ReactNode }) => {
    const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);

    const value = useMemo(() => ({ metrics, setMetrics }), [metrics, setMetrics]);

    return (
        <PerformanceMetricContext.Provider value={value}>
            {children}
        </PerformanceMetricContext.Provider>
    );
}