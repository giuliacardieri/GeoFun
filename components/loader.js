"use client";
import LoaderStyles from "@/styles/Loader.module.css";
import Globe from ".//illustrations/globe";

export default function Loader(props) {
  return (
    <aside
      className={
        props.fullScreen
          ? `${LoaderStyles.loader} ${LoaderStyles["loader--fullScreen"]}`
          : LoaderStyles.loader
      }
    >
      <Globe animated></Globe>
    </aside>
  );
}
