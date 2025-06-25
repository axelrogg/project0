"use client";

import { createContext, useState } from "react";

interface MapLocation {
    lat: number;
    lng: number;
}

interface MapContextType {
    location: MapLocation | null;
    setLocation: (location: MapLocation | null) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const MapContext = createContext<MapContextType | null>(null);

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
    const [location, setLocation] = useState<MapLocation | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const providerValue = { location, setLocation, searchQuery, setSearchQuery };

    return <MapContext.Provider value={providerValue}>{children}</MapContext.Provider>;
};
