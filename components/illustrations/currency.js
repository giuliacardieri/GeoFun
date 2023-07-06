import currencyStyles from "@/styles/illustrations/currency.module.css";

export default function Currency() {
  return (
    <div className={currencyStyles.currency}>
      <div className={currencyStyles.currency__letter}>$</div>
    </div>
  );
}
