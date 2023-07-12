import carsideStyles from "@/styles/illustrations/carside.module.css";

export default function CarSide(props) {
  return (
    <div className={carsideStyles.carside}>
      {props.isLeft ? (
        <div className={carsideStyles.carside__arrowDown}></div>
      ) : (
        <div className={carsideStyles.carside__arrowUp}></div>
      )}
    </div>
  );
}
