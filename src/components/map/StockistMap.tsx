"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { stockists } from "@/data/stockists";
import "leaflet/dist/leaflet.css";

const limeIcon = new L.DivIcon({
  html: `<div style="width:12px;height:12px;background:#c8fd02;border:2px solid #1e1e1a;border-radius:0;"></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
  className: "",
});

const typeLabels: Record<string, string> = {
  bar: "Bar",
  restaurant: "Restaurant",
  shop: "Shop",
  "bottle-shop": "Bottle Shop",
};

export default function StockistMap() {
  return (
    <MapContainer
      center={[50.85, 4.35]}
      zoom={6}
      className="w-full h-[60vh] md:h-[70vh] z-0"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {stockists.map((s) => (
        <Marker key={`${s.name}-${s.lat}`} position={[s.lat, s.lng]} icon={limeIcon}>
          <Popup>
            <div className="font-sans">
              <strong className="text-sm">{s.name}</strong>
              <br />
              <span className="text-xs text-gray-500">
                {typeLabels[s.type]} — {s.city}, {s.country}
              </span>
              <br />
              <span className="text-xs">{s.address}</span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
