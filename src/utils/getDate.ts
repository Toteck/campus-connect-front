export default function getDate(createdAt: string) {
  const getDate = new Date(createdAt).getDate().toString().padStart(2, "0");
  const getMonth = (new Date(createdAt).getMonth() + 1)
    .toString()
    .padStart(2, "0");
  const getYear = new Date(createdAt).getFullYear().toString();

  return `${getDate}/${getMonth}/${getYear}`;
}
