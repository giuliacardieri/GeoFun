"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import listStyles from "@/styles/List.module.css";
import ListActionBar from ".//listactionbar";

export default function List({ countries }) {
  const [countriesSorted, setCountriesSorted] = useState([]);

  useEffect(() => {
    setCountriesSorted(
      countries.sort(function (a, b) {
        if (a.name.common > b.name.common) {
          return 1;
        }
        if (a.name.common < b.name.common) {
          return -1;
        }
        return 0;
      })
    );
  }, [countries]);

  function filterList(searchTerm) {
    setCountriesSorted(
      countries.filter((country) => {
        return country?.name?.common
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    );
  }

  return (
    <section className={listStyles.list}>
      <ListActionBar getSearchTerm={filterList}></ListActionBar>
      <ul className={listStyles.list__ul}>
        {countriesSorted?.map((country, id) => (
          <li className={listStyles.list__li} key={id}>
            <Link
              className={listStyles.list__link}
              href={`/countries/${country.cca3}`}
            >
              <Image
                className={listStyles.list__flag}
                src={country?.flags?.svg}
                alt={`Flag from ${country.name.common}`}
                width={96}
                height={60}
              />
              <span className={listStyles.list__text}>
                {country.name.common}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
