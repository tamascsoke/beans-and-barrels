import data from "../content/contact.json";

export const PHONE_DISPLAY = data.phoneDisplay;
export const PHONE_HREF = data.phoneHref;
export const EMAIL = data.email;
export const FORM_SUBJECT = data.formSubject;
export const FORM_ACTION = `https://formsubmit.co/${EMAIL}`;

type GeoJsonPoint = { type: "Point"; coordinates: [number, number] };
type ContactData = typeof data & {
  locationGeo?: string | GeoJsonPoint;
  locationLat?: number;
  locationLng?: number;
};

const contact = data as ContactData;

export type LocationCoords = { lat: number; lng: number };

export function parseLocationGeo(
  geo: string | GeoJsonPoint | undefined,
  legacy?: { lat?: number; lng?: number },
): LocationCoords | null {
  if (geo) {
    try {
      const parsed: unknown = typeof geo === "string" ? JSON.parse(geo) : geo;
      if (
        parsed &&
        typeof parsed === "object" &&
        "type" in parsed &&
        parsed.type === "Point" &&
        "coordinates" in parsed &&
        Array.isArray(parsed.coordinates) &&
        parsed.coordinates.length >= 2
      ) {
        const lng = Number(parsed.coordinates[0]);
        const lat = Number(parsed.coordinates[1]);
        if (Number.isFinite(lat) && Number.isFinite(lng) && lat !== 0 && lng !== 0) {
          return { lat, lng };
        }
      }
    } catch {
      /* invalid GeoJSON */
    }
  }

  const lat = legacy?.lat;
  const lng = legacy?.lng;
  if (
    lat !== undefined &&
    lng !== undefined &&
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat !== 0 &&
    lng !== 0
  ) {
    return { lat, lng };
  }

  return null;
}

export type LocationInfo = {
  enabled: boolean;
  title: string;
  address: string;
  lat: number;
  lng: number;
  note: string;
};

const coords = parseLocationGeo(contact.locationGeo, {
  lat: contact.locationLat,
  lng: contact.locationLng,
});

export const LOCATION: LocationInfo = {
  enabled: contact.locationEnabled ?? false,
  title: contact.locationTitle ?? "Hol találkozhatsz velünk",
  address: contact.locationAddress ?? "",
  lat: coords?.lat ?? 0,
  lng: coords?.lng ?? 0,
  note: contact.locationNote ?? "",
};

export function hasValidLocation(): boolean {
  return (
    LOCATION.enabled &&
    LOCATION.address.trim().length > 0 &&
    coords !== null
  );
}
