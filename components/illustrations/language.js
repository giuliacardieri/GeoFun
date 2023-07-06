import languageStyles from "@/styles/illustrations/language.module.css";

export default function Language() {
  return (
    <div className={languageStyles.language}>
      <span className={languageStyles.language__bubble}>Hello!</span>
      <span className={languageStyles.language__bubble}>Oi!</span>
      <span className={languageStyles.language__bubble}>Hola!</span>
      <span className={languageStyles.language__bubble}>Ciao!</span>
      <span className={languageStyles.language__bubble}>Hallo!</span>
    </div>
  );
}
