import type { Locale } from "../i18n";
import { pickLocalized } from "../i18n";
import data from "../content/contact.json";

export const PHONE_DISPLAY = data.phoneDisplay;
export const PHONE_HREF = data.phoneHref;
export const EMAIL = data.email;

type GeoJsonPoint = { type: "Point"; coordinates: [number, number] };
type ContactData = typeof data & {
  locationGeo?: string | GeoJsonPoint;
  locationLat?: number;
  locationLng?: number;
  formSubjectEn?: string;
  locationTitleEn?: string;
  locationNoteEn?: string;
};

const contact = data as ContactData;

export function getFormSubject(locale: Locale): string {
  return pickLocalized(locale, contact.formSubject, contact.formSubjectEn);
}

export const FORM_ACTION = `https://formsubmit.co/${EMAIL}`;

export function parseLocationGeo(
  geo: string | GeoJsonPoint | undefined,
  legacy?: { lat?: number; lng?: number },
) {
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

export function getLocation(locale: Locale): LocationInfo {
  return {
    enabled: contact.locationEnabled ?? false,
    title: pickLocalized(
      locale,
      contact.locationTitle ?? "Hol találkozhatsz velünk",
      contact.locationTitleEn,
    ),
    address: contact.locationAddress ?? "",
    lat: coords?.lat ?? 0,
    lng: coords?.lng ?? 0,
    note: pickLocalized(locale, contact.locationNote ?? "", contact.locationNoteEn),
  };
}

export const LOCATION = getLocation("hu");

export function hasValidLocation(locale: Locale = "hu"): boolean {
  const loc = getLocation(locale);
  return loc.enabled && loc.address.trim().length > 0 && coords !== null;
}

export type ParsedPostalAddress = {
  postalCode?: string;
  streetAddress?: string;
  addressLocality?: string;
};

export function parsePostalAddress(full: string): ParsedPostalAddress {
  const trimmed = full.trim();
  const match = trimmed.match(/^(\d{4})\s+([^,]+),\s*(.+?)\.?$/u);
  if (match) {
    return {
      postalCode: match[1],
      addressLocality: match[2].trim(),
      streetAddress: match[3].trim(),
    };
  }
  return { streetAddress: trimmed };
}
