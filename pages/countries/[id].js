"use client";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useActiveCountryContext } from "../../context/activeCountry";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import countryPage from "@/styles/CountryPage.module.css";

import Button from "@/components/button";
import Loader from "@/components/loader";
import Area from "@/components/illustrations/area";
import Currency from "@/components/illustrations/currency";
import CapitalCity from "@/components/illustrations/capitalcity";
import Independent from "@/components/illustrations/independent";
import Language from "@/components/illustrations/language";
import Population from "@/components/illustrations/population";
import Person from "@/components/illustrations/person";
import Calendar from "@/components/illustrations/calendar";
import Carside from "@/components/illustrations/carside";
import Clock from "@/components/illustrations/clock";
import Mailbox from "@/components/illustrations/mailbox";
import Map from "@/components/illustrations/map";
import Soccer from "@/components/illustrations/soccer";
import Un from "@/components/illustrations/un";
import Website from "@/components/illustrations/website";

export default function Countries() {
  const [activeCountry, setActiveCountry] = useActiveCountryContext(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

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

  function navigateBack() {
    router.push("/");
  }

  function formatNumber(number) {
    return number?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/alpha/${window.location.href
        .split("/")
        .pop()}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setActiveCountry(data[0]);
      });
  });

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
      {isLoading && <Loader fullScreen></Loader>}
      <Button
        onClick={navigateBack}
        ariaLabel="Go back to home page"
        icon={faArrowLeft}
      >
        Go back
      </Button>
      <main className={countryPage.country}>
        <header className={countryPage.country__header}>
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
        </header>
        <section>
          <ul className={countryPage.country__infoGroup}>
            <li className={countryPage.country__info}>
              <div className={countryPage.country__drawing}>
                <Language></Language>
              </div>
              Language: {getValues(activeCountry?.languages)}
            </li>
            <li className={countryPage.country__info}>
              <Area></Area>
              Area: {formatNumber(activeCountry?.area)}
            </li>
            <li className={countryPage.country__info}>
              <div></div>
              Region: {activeCountry?.region}
            </li>
            <li className={countryPage.country__info}>
              <CapitalCity></CapitalCity>
              Capital city: {activeCountry?.capital[0]}
            </li>
            <li className={countryPage.country__info}>
              <Population></Population>
              Population: {formatNumber(activeCountry?.population)}
            </li>
            <li className={countryPage.country__info}>
              <div></div>
              Sub-region: {activeCountry?.subregion}
            </li>
            <li className={countryPage.country__info}>
              <Currency></Currency>
              Currency: {getValues(activeCountry?.currencies, true)}
            </li>
            <li className={countryPage.country__info}>
              <div className={countryPage.country__drawing}>
                <Independent></Independent>
              </div>
              Independent: {activeCountry?.independent ? "Yes" : "No"}
            </li>
          </ul>
        </section>
        <section className={countryPage.country__iframeGroup}>
          <Loader className={countryPage.country__loader}></Loader>
          <iframe
            className={countryPage.country__map}
            width="450"
            height="250"
            frameborder="0"
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=${activeCountry?.name?.common}&zoom=4`}
            allowfullscreen
          ></iframe>
        </section>
        <section>
          <h2 className={countryPage.country__h2}>
            Fun Facts about {activeCountry?.flag}
          </h2>
          <ul className={countryPage.country__factsGroup}>
            <li className={countryPage.country__fact}>
              <div className={countryPage.country__drawing}>
                <Calendar></Calendar>
              </div>
              The start of the week is on {activeCountry?.startOfWeek}
            </li>
            <li className={countryPage.country__fact}>
              <div className={countryPage.country__drawing}>
                <Carside></Carside>
              </div>
              Cars drive on the {activeCountry?.car.side} side
            </li>
            <li className={countryPage.country__fact}>
              <div className={countryPage.country__drawing}>
                <Clock></Clock>
              </div>
              It has {activeCountry?.timezones.length} different timezone
              {activeCountry?.timezones.length > 1 ? "s" : ""}
            </li>
            <li className={countryPage.country__fact}>
              <div className={countryPage.country__drawing}>
                <Map></Map>
              </div>
              It has a border with{" "}
              {activeCountry?.borders?.length
                ? activeCountry?.borders?.length
                : "no"}{" "}
              countries
            </li>
            <li className={countryPage.country__fact}>
              <div className={countryPage.country__drawing}>
                <Website></Website>
              </div>
              Websites end with {activeCountry?.tld.join(", ")}
            </li>
            <li className={countryPage.country__fact}>
              <div className={countryPage.country__drawing}>
                <Mailbox></Mailbox>
              </div>
              Zip code has the {activeCountry?.postalCode?.format} format
            </li>
            {activeCountry?.unMember && (
              <li className={countryPage.country__fact}>
                <div className={countryPage.country__drawing}>
                  <Un></Un>
                </div>
                It's part of the United Nations
              </li>
            )}
            <li className={countryPage.country__fact}>
              <div className={countryPage.country__drawing}>
                <Soccer></Soccer>
              </div>
              Its code for FIFA Soccer World Cup is {activeCountry?.fifa}
            </li>
            <li className={countryPage.country__fact}>
              <div className={countryPage.country__drawing}>
                <Person></Person>
              </div>
              A person who is born there is {activeCountry?.demonyms.eng.m}
            </li>
          </ul>
        </section>
        <section className={countryPage.country__iframeGroup}>
          <Loader className={countryPage.country__loader}></Loader>
          <iframe
            className={countryPage.country__map}
            width="450"
            height="250"
            frameborder="0"
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=${activeCountry?.capital?.[0]}&zoom=12&maptype=satellite`}
            allowfullscreen
          ></iframe>
        </section>
      </main>
    </>
  );
}
