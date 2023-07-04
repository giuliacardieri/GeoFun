"use client";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useActiveCountryContext } from "../../context/activeCountry";
import countryPage from "@/styles/CountryPage.module.css";

export default function Countries() {
  const [activeCountry, setActiveCountry] = useActiveCountryContext(null);
  const router = useRouter();
  console.log(router.query.id);

  function getValues(obj, isCurrency = false) {
    let values = [];
    for (var prop in obj) {
      values.push(
        isCurrency
          ? `${obj[prop].name} (${prop}/${obj[prop].symbol})`
          : obj[prop]
      );
    }
    return values.join(", ");
  }
  if (!activeCountry)
    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/alpha/${router.query.id}`)
        .then((res) => res.json())
        .then((data) => {
          setActiveCountry(data[0]);
        });
    }, []);

  return (
    <>
      <Head>
        <title>GeoFun - Country</title>
        <meta
          name="description"
          content="Learn more about countries around the world with GeoFun"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={countryPage.country}>
        <div className={countryPage.country__header}>
          <Image
            className={countryPage.header__flag}
            src={activeCountry?.flags.svg}
            alt={`Flag from ${activeCountry?.name.common}`}
            width={200}
            height={128}
          />
          <div className={countryPage.header__text}>
            <h1>{activeCountry?.name.common}</h1>
            <h2>Official name: {activeCountry?.name.official}</h2>
          </div>
        </div>
        <ul className={countryPage.country__infoGroup}>
          <li className={countryPage.country__info}>
            <div className={countryPage.country__drawing}>
              <div className={countryPage.language}>
                <span className={countryPage.language__bubble}>Hello!</span>
                <span className={countryPage.language__bubble}>Oi!</span>
                <span className={countryPage.language__bubble}>Hola!</span>
                <span className={countryPage.language__bubble}>Ciao!</span>
                <span className={countryPage.language__bubble}>Hallo!</span>
              </div>
            </div>
            Language: {getValues(activeCountry?.languages)}
          </li>
          <li className={countryPage.country__info}>
            <div></div>
            Area: {activeCountry?.area}
          </li>
          <li className={countryPage.country__info}>
            <div></div>
            Region: {activeCountry?.region}
          </li>
          <li className={countryPage.country__info}>
            <div></div>
            Capital city: {activeCountry?.capital[0]}
          </li>
          <li className={countryPage.country__info}>
            <div></div>
            Population: {activeCountry?.population}
          </li>
          <li className={countryPage.country__info}>
            <div></div>
            Sub-region: {activeCountry?.subregion}
          </li>
          <li className={countryPage.country__info}>
            <div></div>
            Currency: {getValues(activeCountry?.currencies, true)}
          </li>
          <li className={countryPage.country__info}>
            <div className={countryPage.country__drawing}>
              <div className={countryPage.independent}>
                <div className={countryPage.independent__flag}></div>
              </div>
            </div>
            Independent: {activeCountry?.independent ? "Yes" : "No"}
          </li>
        </ul>
        <h3>Fun Facts</h3>
        <ul className={countryPage.country__factsGroup}>
          <li className={countryPage.country__fact}>
            <div></div>
            The start of the week is on {activeCountry?.startOfWeek}
          </li>
          <li className={countryPage.country__fact}>
            <div></div>
            Cars drive on the {activeCountry?.car.side} side
          </li>
          <li className={countryPage.country__fact}>
            <div></div>
            It has {activeCountry?.timezones.length} different timezones
          </li>
          <li className={countryPage.country__fact}>
            <div></div>
            Its code for FIFA Soccer World Cup is {activeCountry?.fifa}
          </li>
          <li className={countryPage.country__fact}>
            <div></div>
            It has a border with {activeCountry?.borders.length} countries
          </li>
          <li className={countryPage.country__fact}>
            <div></div>
            Zip code has the {activeCountry?.postalCode.format} format
          </li>
          <li className={countryPage.country__fact}>
            <div></div>
            Websites end with {activeCountry?.tld.join(", ")}
          </li>
          {activeCountry?.unMember && (
            <li className={countryPage.country__fact}>
              <div></div>
              It's part of the United Nations
            </li>
          )}
          <li className={countryPage.country__fact}>
            <div></div>A person who is born there is a{" "}
            {activeCountry?.demonyms.eng.m}
          </li>
        </ul>
      </main>
    </>
  );
}
