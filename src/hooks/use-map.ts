import { useContext } from "react";
import { MapContext } from "@components/map/map-context";

export const useMap = () => {
    const context = useContext(MapContext);
    if (!context) {
        throw new Error("useMap must be used within MapProvider");
    }
    return context;
};
