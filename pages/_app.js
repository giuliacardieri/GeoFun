import { Neucha } from "next/font/google";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ActiveCountryProvider } from "../context/activeCountry";
import { IsMapProvider } from "../context/isMap";

const neuchaFont = Neucha({ subsets: ["latin"], weight: "400" });

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <IsMapProvider>
      <ActiveCountryProvider>
        <main className={neuchaFont.className}>
          <Component {...pageProps} />
        </main>
      </ActiveCountryProvider>
    </IsMapProvider>
  );
}
