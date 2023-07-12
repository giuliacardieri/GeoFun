import selectStyles from "@/styles/form/Select.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Select(props) {
  return (
    <div className={selectStyles.select}>
      <select
        className={
          props.value.length
            ? `${selectStyles["select__select--active"]} ${selectStyles.select__select}`
            : selectStyles.select__select
        }
        id={props.name}
        onChange={props.onChange}
        value={props.value}
      >
        {props?.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <label className={selectStyles.select__label} htmlFor={props.name}>
        {props.icon && (
          <FontAwesomeIcon
            className={selectStyles.select__icon}
            icon={props.icon}
          />
        )}
        <span className={selectStyles.select__text}>{props.children}</span>
        <FontAwesomeIcon
          className={selectStyles.select__iconDown}
          icon={faChevronDown}
        />
      </label>
    </div>
  );
}
