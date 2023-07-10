"use client";
import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { useActiveCountryContext } from "../context/activeCountry";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import countryBoxStyles from "@/styles/CountryBox.module.css";

export default function CountryBox(props) {
  const [activeCountry, setActiveCountry] = useActiveCountryContext(null);

  useEffect(
    (setActiveCountry) => {
      fetch(`https://restcountries.com/v3.1/alpha/${props.country}`)
        .then((res) => res.json())
        .then((data) => {
          setActiveCountry(data[0]);
        });
    },
    [props.country]
  );
  if (!activeCountry) return <div></div>;

  return (
    <section className={countryBoxStyles.wrapper}>
      <div className={countryBoxStyles.textWrapper}>
        <Image
          className={countryBoxStyles.flag}
          src={activeCountry.flags.svg}
          alt={`Flag from ${activeCountry.name.common}`}
          width={64}
          height={48}
        />
        <h2 className={countryBoxStyles.h2}>{activeCountry.name.common}</h2>
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
