import soccerStyles from "@/styles/illustrations/soccer.module.css";

export default function Soccer() {
  return (
    <div className={soccerStyles.ball}>
      <div className={soccerStyles.ball__pentagon}></div>
      <div className={soccerStyles.ball__pentagonTop}></div>
      <div className={soccerStyles.ball__pentagonLeft}></div>
      <div className={soccerStyles.ball__pentagonRight}></div>
      <div className={soccerStyles.ball__pentagonBottomLeft}></div>
      <div className={soccerStyles.ball__pentagonBottomRight}></div>
    </div>
  );
}
