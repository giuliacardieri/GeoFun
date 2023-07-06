import capitalCityStyles from "@/styles/illustrations/capitalcity.module.css";

export default function CapitalCity() {
  return (
    <div className={capitalCityStyles.city}>
      <div className={capitalCityStyles.building}>
        <div className={capitalCityStyles.building__line1}></div>
        <div className={capitalCityStyles.building__line2}></div>
      </div>
      <div className={capitalCityStyles.building2}>
        <div className={capitalCityStyles.building2__line1}></div>
        <div className={capitalCityStyles.building2__line2}></div>
        <div className={capitalCityStyles.building2__line3}></div>
        <div className={capitalCityStyles.building2__line4}></div>
      </div>
      <div className={capitalCityStyles.building3}>
        <div className={capitalCityStyles.building3__line1}></div>
        <div className={capitalCityStyles.building3__line2}></div>
        <div className={capitalCityStyles.building3__line3}></div>
        <div className={capitalCityStyles.building3__line4}></div>
        <div className={capitalCityStyles.building3__line5}></div>
        <div className={capitalCityStyles.building3__line6}></div>
      </div>
    </div>
  );
}
