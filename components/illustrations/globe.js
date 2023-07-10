import globeStyles from "@/styles/illustrations/globe.module.css";

export default function Globe(props) {
  return (
    <div
      className={
        props.animated
          ? `${globeStyles["globe--animated"]} ${globeStyles.globe}`
          : globeStyles.globe
      }
    >
      <div className={globeStyles.globe__land}></div>
      {props.animated && <div className={globeStyles.globe__face}></div>}
    </div>
  );
}
