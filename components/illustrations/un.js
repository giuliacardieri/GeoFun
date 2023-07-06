import unStyles from "@/styles/illustrations/un.module.css";

export default function UnitedNations() {
  return (
    <div className={unStyles.unitednations}>
      <div className={unStyles.unitednations__circle}></div>
      <div className={unStyles.unitednations__line}></div>
      <div className={unStyles.unitednations__continent1}></div>
      <div className={unStyles.unitednations__continent2}></div>
      <div className={unStyles.unitednations__continent3}></div>
      <div className={unStyles.unitednations__continent4}></div>
      <div className={unStyles.unitednations__crown}></div>
    </div>
  );
}
