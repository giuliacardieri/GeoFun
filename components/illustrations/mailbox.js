import mailboxStyles from "@/styles/illustrations/mailbox.module.css";

export default function Mailbox() {
  return (
    <div className={mailboxStyles.mailbox}>
      <div className={mailboxStyles.box}>
        <div className={mailboxStyles.flag}></div>
      </div>
    </div>
  );
}
