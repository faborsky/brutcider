function pushEvent(event: DataLayerEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function trackViewItem(item: {
  name: string;
  id: string;
  category: string;
}) {
  pushEvent({
    event: "view_item",
    item_name: item.name,
    item_id: item.id,
    item_category: item.category,
  });
}

export function trackCtaClick(ctaText: string, ctaLocation: string) {
  pushEvent({
    event: "cta_click",
    cta_text: ctaText,
    cta_location: ctaLocation,
  });
}

export function trackAgeGate(verified: boolean) {
  pushEvent({
    event: "age_gate",
    age_verified: verified,
  });
}

export function trackLanguageSwitch(from: string, to: string) {
  pushEvent({
    event: "language_switch",
    language_from: from,
    language_to: to,
  });
}
