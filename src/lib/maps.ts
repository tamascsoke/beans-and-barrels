export type MapCoords = { lat: number; lng: number };

export const MINIMAP_TILES = {
  url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: "abcd",
  maxZoom: 20,
} as const;

export const MINIMAP_ZOOM = {
  default: 16,
  compact: 15,
} as const;

/** @deprecated staticmap.openstreetmap.de is unreliable */
export function buildStaticMapUrl(
  { lat, lng }: MapCoords,
  size: { width: number; height: number },
): string {
  const { width, height } = size;
  const params = new URLSearchParams({
    center: `${lat},${lng}`,
    zoom: "15",
    size: `${width}x${height}`,
    markers: `${lat},${lng},orange`,
  });
  return `https://staticmap.openstreetmap.de/staticmap.php?${params}`;
}

/** @deprecated Prefer Leaflet mini map in MiniMap.astro */
export function buildOsmEmbedUrl({ lat, lng }: MapCoords): string {
  const pad = 0.012;
  const bbox = [lng - pad, lat - pad, lng + pad, lat + pad].join(",");
  const params = new URLSearchParams({
    bbox,
    layer: "mapnik",
    marker: `${lat},${lng}`,
  });
  return `https://www.openstreetmap.org/export/embed.html?${params}`;
}

export function buildGoogleMapsUrl(coords: MapCoords, address: string): string {
  const query = address.trim() || `${coords.lat},${coords.lng}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
