import { Neucha } from "next/font/google";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ActiveCountryProvider } from "../context/activeCountry";

const neuchaFont = Neucha({ subsets: ["latin"], weight: "400" });

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <ActiveCountryProvider>
      <main className={neuchaFont.className}>
        <Component {...pageProps} />
      </main>
    </ActiveCountryProvider>
  );
}
