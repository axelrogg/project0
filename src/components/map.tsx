"use client";

import { MapContainer, TileLayer, GeoJSON, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const GEOJSON_URL = "/data/peru.geo.json";

export default function Map() {
    const [geoJsonData, setGeoJsonData] = useState<GeoJSON.FeatureCollection | null>(
        null
    );

    useEffect(() => {
        const fetchPeruMap = async () => {
            try {
                const mapResponse = await fetch(GEOJSON_URL);
                if (!mapResponse.ok) {
                    console.error("map wasnt fetched");
                    return;
                }
                setGeoJsonData(await mapResponse.json());
            } catch (error) {
                console.error(error);
            }
        };
        fetchPeruMap();
    }, []);

    function MapClickHandler() {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                console.log("Map clicked at:", lat, lng);
            },
        });
        return null;
    }

    return (
        <MapContainer
            center={[-9.2, -75]}
            zoom={5}
            className="absolute top-0 left-0 z-0 h-[100svh] w-screen"
            zoomControl={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            <MapClickHandler />
            {geoJsonData && <GeoJSON data={geoJsonData} />}
        </MapContainer>
    );
}
