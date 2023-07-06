import calendarStyles from "@/styles/illustrations/calendar.module.css";

export default function Calendar() {
  return (
    <div className={calendarStyles.calendar}>
      <div className={calendarStyles.calendar__day}>Monday</div>
      <div className={calendarStyles.calendar__number}>1</div>
    </div>
  );
}
