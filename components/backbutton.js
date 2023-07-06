"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BackButtonStyles from "@/styles/BackButton.module.css";

export default function BackButton(props) {
  return (
    <button
      className={BackButtonStyles.button}
      aria-label="Go back to home page"
      onClick={props.navigateBack}
    >
      <FontAwesomeIcon className={BackButtonStyles.icon} icon={faArrowLeft} />
      Go back
    </button>
  );
}
