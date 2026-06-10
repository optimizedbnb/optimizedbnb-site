const BASE_URL = process.env.HOSPITABLE_BASE_URL || "https://api.hospitable.com/v1";
const API_KEY = process.env.HOSPITABLE_API_KEY || "";

async function hospitableGet(path: string) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Hospitable API error: ${res.status}`);
  return res.json();
}

export async function getProperties() {
  return hospitableGet("/properties?include=details&per_page=100");
}

export async function getPropertyCalendar(propertyId: string, startDate: string, endDate: string) {
  return hospitableGet(`/calendar?property_id=${propertyId}&start_date=${startDate}&end_date=${endDate}`);
}

export async function getReviews() {
  return hospitableGet("/reviews?per_page=100");
}

export async function getPropertyImages(propertyId: string) {
  return hospitableGet(`/properties/${propertyId}/images`);
}
