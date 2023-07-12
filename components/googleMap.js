"use client";
import googleMapStyle from "@/styles/GoogleMap.module.css";
import Loader from "@/components/loader";

export default function GoogleMap(props) {
  return (
    <section className={googleMapStyle.map}>
      <Loader></Loader>
      <iframe
        className={googleMapStyle.map__iframe}
        width="450"
        height="250"
        src={`https://www.google.com/maps/embed/v1/place?key=${
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
        }&q=${props.query}&zoom=${props.zoom}${
          props.satellite ? "&maptype=satellite" : ""
        }`}
      ></iframe>
    </section>
  );
}
