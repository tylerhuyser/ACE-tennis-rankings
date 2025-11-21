export function getMostRecentMonday(isoDateString) {
  const date = new Date(isoDateString);

  const day = date.getUTCDay();

  const diff = (day === 1 ? 0 : (day === 0 ? 6 : day - 1));

  const monday = new Date(date);
  monday.setUTCDate(date.getUTCDate() - diff);

  return monday.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}