export function formatPostDate(publishedAt) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${publishedAt}T00:00:00Z`));
}

export function formatPostDateLong(publishedAt) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${publishedAt}T00:00:00Z`));
}

export function formatPostDateShort(publishedAt) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  }).format(new Date(`${publishedAt}T00:00:00Z`)).toUpperCase();
}

export function getPostYear(publishedAt) {
  return publishedAt.slice(0, 4);
}
