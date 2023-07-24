let eventGuid = 0;

const categories = [
  {
    name: "danger",
    value: "bg-danger-500",
  },
  {
    name: "success",
    value: "bg-success-500",
  },
  {
    name: "primary",
    value: "bg-primary-500",
  },
  {
    name: "info",
    value: "bg-info-500",
  },
  {
    name: "dark",
    value: "bg-slate-800",
  },
  {
    name: "warning",
    value: "bg-warning-500",
  },
];

const calendarEvents = [
  {
    id: 1,
    title: "All Day Event",
    start: new Date().setDate(new Date().getDate() + 2),
    className: "bg-warning-500 text-white",
  },
  {
    id: 2,
    title: "Long Event",
    start: new Date().setDate(new Date().getDate() - 5),
    end: new Date().setDate(new Date().getDate() - 3),
    className: "bg-success-500 text-white",
  },
  {
    id: 3,
    title: "Lunch",
    start: new Date().setDate(new Date().getDate() + 2),
    className: "bg-info-500 text-white",
  },
  {
    id: 4,
    title: "Birthday Party",
    start: new Date().setDate(new Date().getDate() + 4),
    className: "bg-primary-500 text-white",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
export { categories, calendarEvents };
