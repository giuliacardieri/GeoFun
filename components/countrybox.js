"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import countryBoxStyles from "@/styles/CountryBox.module.css";

export default function CountryBox(props) {
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${props.country}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, [props.country]);
  if (!countryInfo) return <div></div>;

  return (
    <section className={countryBoxStyles.wrapper}>
      <div className={countryBoxStyles.textWrapper}>
        <Image
          className={countryBoxStyles.flag}
          src={countryInfo[0].flags.svg}
          alt={`Flag from ${countryInfo[0].name.common}`}
          width={64}
          height={48}
        />
        <h2 className={countryBoxStyles.h2}>{countryInfo[0].name.common}</h2>
      </div>
      <Link
        href={`/countries/${props.country}`}
        className={countryBoxStyles.link}
      >
        Learn More
        <FontAwesomeIcon
          className={countryBoxStyles.icon}
          icon={faArrowRight}
        />
      </Link>
    </section>
  );
}
