import globeStyles from "@/styles/illustrations/globe.module.css";

export default function Globe() {
  return (
    <div className={globeStyles.globe}>
      <div className={globeStyles.globe__land}></div>
      <div className={globeStyles.globe__face}></div>
    </div>
  );
}
