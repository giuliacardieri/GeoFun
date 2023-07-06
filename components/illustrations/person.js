import personStyles from "@/styles/illustrations/person.module.css";

export default function Person() {
  return (
    <div className={personStyles.person}>
      <div className={personStyles.head}>
        <div className={personStyles.eyes}></div>
        <div className={personStyles.mouth}></div>
        <div className={personStyles.hair}>
          <div className={personStyles.hair__right}></div>
          <div className={personStyles.hair__left}></div>
        </div>
      </div>
    </div>
  );
}
