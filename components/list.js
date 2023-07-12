"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import listStyles from "@/styles/List.module.css";
import ListActionBar from ".//listactionbar";

export default function List({ countries }) {
  const [countriesSorted, setCountriesSorted] = useState([]);

  useEffect(() => {
    setCountriesSorted(sortCountries(countries));
  }, [countries]);

  function sortCountries(countries) {
    return countries.sort(function (a, b) {
      if (a.name.common > b.name.common) {
        return 1;
      }
      if (a.name.common < b.name.common) {
        return -1;
      }
      return 0;
    });
  }

  function filterCountries(searchTerm) {
    setCountriesSorted(
      countries.filter((country) => {
        return country?.name?.common
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    );
  }

  async function filterRegion(region) {
    const res = await fetch(
      `https://restcountries.com/v3.1/region/${region}
      `
    );
    // precisa conversar com o search
    // talvez guardar esse countriesByRegion num context e ai filtrar o nome dele
    // só se existir um valor para region
    const countries = await res.json();
    setCountriesSorted(sortCountries(countries));
  }

  return (
    <section className={listStyles.list}>
      <ListActionBar
        getSearchTerm={filterCountries}
        //getRegion={filterRegion}
      ></ListActionBar>
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
