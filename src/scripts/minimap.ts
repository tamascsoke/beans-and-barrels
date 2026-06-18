import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MINIMAP_TILES, MINIMAP_ZOOM, type MapCoords } from "../lib/maps";

function createMarkerIcon(): L.DivIcon {
  return L.divIcon({
    className: "minimap-marker",
    html: '<span class="minimap-marker__ring" aria-hidden="true"><span class="minimap-marker__dot"></span></span>',
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });
}

function readCoords(el: HTMLElement): MapCoords | null {
  const lat = Number(el.dataset.lat);
  const lng = Number(el.dataset.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  return { lat, lng };
}

function initMap(el: HTMLElement): void {
  if (el.dataset.mapInit === "1") return;

  const coords = readCoords(el);
  if (!coords) return;

  el.dataset.mapInit = "1";
  const variant = el.dataset.variant === "compact" ? "compact" : "default";
  const zoom = MINIMAP_ZOOM[variant];

  const map = L.map(el, {
    center: [coords.lat, coords.lng],
    zoom,
    scrollWheelZoom: false,
    dragging: false,
    zoomControl: false,
    doubleClickZoom: false,
    touchZoom: false,
    keyboard: false,
    boxZoom: false,
    attributionControl: true,
  });

  L.tileLayer(MINIMAP_TILES.url, {
    attribution: MINIMAP_TILES.attribution,
    subdomains: MINIMAP_TILES.subdomains,
    maxZoom: MINIMAP_TILES.maxZoom,
  }).addTo(map);

  L.marker([coords.lat, coords.lng], {
    icon: createMarkerIcon(),
    interactive: false,
    keyboard: false,
  }).addTo(map);

  requestAnimationFrame(() => map.invalidateSize());
}

export function initMiniMaps(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>(".minimap__map").forEach(initMap);
}
