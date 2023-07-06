"use client";
import Link from "next/link";
import Image from "next/image";

import listStyles from "@/styles/List.module.css";

export default function List({ countries }) {
  countries.sort();

  countries.sort(function (a, b) {
    if (a.name.common > b.name.common) {
      return 1;
    }
    if (a.name.common < b.name.common) {
      return -1;
    }
    return 0;
  });

  return (
    <section className={listStyles.list}>
      <ul className={listStyles.list__ul}>
        {countries?.map((country) => (
          <li className={listStyles.list__li}>
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
