import buttonStyles from "@/styles/Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button(props) {
  return (
    <button
      className={buttonStyles.button}
      aria-label={props.ariaLabel}
      onClick={props.onClick}
    >
      {props.icon && (
        <FontAwesomeIcon className={buttonStyles.icon} icon={props.icon} />
      )}
      {props.children}
    </button>
  );
}
