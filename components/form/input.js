import inputStyles from "@/styles/form/Input.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Input(props) {
  return (
    <div className={inputStyles.input}>
      <input
        type="text"
        className={
          props.value.length
            ? `${inputStyles["input__input--active"]} ${inputStyles.input__input}`
            : inputStyles.input__input
        }
        id={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      <label className={inputStyles.input__label} for={props.name}>
        {props.icon && (
          <FontAwesomeIcon
            className={inputStyles.input__icon}
            icon={props.icon}
          />
        )}
        <span className={inputStyles.input__text}>{props.children}</span>
      </label>
    </div>
  );
}
