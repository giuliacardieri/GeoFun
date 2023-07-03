import Head from "next/head";
import { useState } from "react";

import mainStyles from "@/styles/Main.module.css";
import mapStyles from "@/styles/Map.module.css";
import headerStyles from "@/styles/Header.module.css";
import Link from "next/link";
import Map from "@/components/map";
import List from "@/components/list";
import ToggleButton from "@/components/togglebutton";

export default function Home() {
  const [isMap, setIsMap] = useState(true);

  function toggleMap() {
    setIsMap(!isMap);
  }
  return (
    <>
      <Head>
        <title>GeoFun</title>
        <meta
          name="description"
          content="Learn more about countries around the world with GeoFun"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainStyles.wrapper}>
        <header className={headerStyles.header}>
          <h1>
            <Link href="/">
              Geo<span>Fun</span>!
            </Link>
          </h1>
          <ToggleButton toggleMap={toggleMap} isMap={isMap} />
        </header>
        <main className={mapStyles.main}>
          {isMap ? (
            <Map className={mapStyles.map} />
          ) : (
            <List className={mapStyles.map} />
          )}
        </main>
      </div>
    </>
  );
}
