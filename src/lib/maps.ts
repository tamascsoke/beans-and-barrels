export type MapCoords = { lat: number; lng: number };

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

export function buildGoogleMapsUrl(coords: MapCoords, address: string): string {
  const query = address.trim() || `${coords.lat},${coords.lng}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
