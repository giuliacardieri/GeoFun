import clockStyles from "@/styles/illustrations/clock.module.css";

export default function Clock() {
  return (
    <div className={clockStyles.clock}>
      <div className={clockStyles.clock__hoursTop}></div>
      <div className={clockStyles.clock__hoursBottom}></div>
      <div className={clockStyles.clock__hoursLeft}></div>
      <div className={clockStyles.clock__hoursRight}></div>
    </div>
  );
}
