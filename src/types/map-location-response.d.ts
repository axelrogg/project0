interface MapLocationSearchResponseAddress {
    city?: string;
    state_district?: string;
    state?: string;
    "ISO3166-2-lvl4"?: string;
    postcode?: string;
    country?: string;
    country_code?: string;
    // Add other possible address fields as needed
}

interface MapLocationSearchResponseExtratags {
    capital?: string;
    website?: string;
    wikidata?: string;
    wikipedia?: string;
    population?: string;
    // Add other possible extratags as needed
}

interface MapLocationSearchResponse {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: string;
    boundingbox: [string, string, string, string]; // [minlat, maxlat, minlon, maxlon]
    lat: string;
    lon: string;
    display_name: string;
    class: string;
    type: string;
    importance: number;
    icon?: string;
    address: MapLocationSearchResponseAddress;
    extratags?: MapLocationSearchResponseExtratags;
}
