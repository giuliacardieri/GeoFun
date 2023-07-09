"use client";
import LoaderStyles from "@/styles/Loader.module.css";
import Globe from ".//illustrations/globe";

export default function Loader(props) {
  return (
    <aside className={LoaderStyles.loader}>
      <Globe></Globe>
    </aside>
  );
}
