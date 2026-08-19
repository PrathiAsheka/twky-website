type DataLayerEvent = Record<string, unknown>;

function pushToDataLayer(data: DataLayerEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>,
) {
  pushToDataLayer({ event: eventName, ...eventParams });
}

export function trackLead(serviceInterest?: string) {
  trackEvent("generate_lead", { service: serviceInterest });
}

export function trackCtaClick(buttonName: string, destinationUrl?: string) {
  trackEvent("cta_click", { cta_name: buttonName, url: destinationUrl });
}
