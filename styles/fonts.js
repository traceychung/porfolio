import {
  Silkscreen,
  Tenor_Sans,
  Lora,
  Montserrat,
  Merriweather,
  Bodoni_Moda,
} from "next/font/google";

export const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const tenorSans = Tenor_Sans({ weight: ["400"], subsets: ["latin"] });
export const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
export const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});
export const bodoniModa = Bodoni_Moda({ subsets: ["latin"] });

export const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
