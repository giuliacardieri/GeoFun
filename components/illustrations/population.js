import populationStyles from "@/styles/illustrations/population.module.css";

export default function Population() {
  return (
    <div className={populationStyles.population}>
      <div className={populationStyles.person}>
        <div className={populationStyles.person__legs}></div>
      </div>
      <div className={populationStyles.person}>
        <div className={populationStyles.person__legs}></div>
      </div>
      <div className={populationStyles.person}>
        <div className={populationStyles.person__legs}></div>
      </div>
      <div className={populationStyles.person}>
        <div className={populationStyles.person__legs}></div>
      </div>
      <div className={populationStyles.person}>
        <div className={populationStyles.person__legs}></div>
      </div>
    </div>
  );
}
