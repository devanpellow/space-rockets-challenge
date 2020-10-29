const { DateTime } = require("luxon");

export function formatDate(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
}

export function formatUserLocalDateTime(timestamp) {
  return new Intl.DateTimeFormat(navigator.language, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  }).format(new Date(timestamp));
}

export function formatUTCOffsetDateTime(timestamp) {
  const timestampFormatted = new Intl.DateTimeFormat(navigator.language, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC"
  }).format(new Date(timestamp));
  const timestampUTC = DateTime.fromISO(timestamp, { setZone: true })
  const offset = timestampUTC.zoneName
  return `${timestampFormatted} ${offset}`
}