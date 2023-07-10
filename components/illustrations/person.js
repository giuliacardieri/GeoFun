import personStyles from "@/styles/illustrations/person.module.css";

export default function Person(props) {
  return (
    <div className={personStyles.person}>
      <div className={personStyles.head} style={props.style}>
        <div className={personStyles.eyes}></div>
        <div className={personStyles.mouth}></div>
      </div>
    </div>
  );
}
