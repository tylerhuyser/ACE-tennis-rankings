export function getMostRecentMonday(isoDateString) {

  const date = new Date(isoDateString);

  const day = date.getUTCDay();

  const diff = (day === 1 ? 0 : (day === 0 ? 6 : day - 1));

  const monday = new Date(date);
  monday.setUTCDate(date.getUTCDate() - diff);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthName = months[monday.getUTCMonth()];
  const dayOfMonth = monday.getUTCDate();
  const year = monday.getUTCFullYear();

  return `${monthName} ${dayOfMonth}, ${year}`;
}