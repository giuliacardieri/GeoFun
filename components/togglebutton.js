"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faListSquares,
} from "@fortawesome/free-solid-svg-icons";
import ToggleButtonStyles from "@/styles/ToggleButton.module.css";

export default function ToggleButton(props) {
  return (
    <button
      data-is-map={props.isMap ? true : false}
      className={ToggleButtonStyles.toggleButton}
      aria-label={`Change from ${props.isMap ? "map" : "list"} to ${
        props.isMap ? "list" : "map"
      }`}
      onClick={props.toggleMap}
    >
      <FontAwesomeIcon
        className={ToggleButtonStyles.toggleButton__icon}
        icon={props.isMap ? faGlobeAmericas : faListSquares}
      />
      <span className={ToggleButtonStyles.toggleButton__text}>
        {props.isMap ? "Map" : "List"}
      </span>
    </button>
  );
}
