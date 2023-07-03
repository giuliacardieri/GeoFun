import { Neucha } from "next/font/google";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

const neuchaFont = Neucha({ subsets: ["latin"], weight: "400" });

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <main className={neuchaFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
