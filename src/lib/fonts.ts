import { Inter, Lato, Montserrat, Open_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["800", "600", "400"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
});
const open_sans = Open_Sans({
  weight: ["300", "400"],
  style: ["normal"],
  subsets: ["latin"],
});

export { inter, lato, montserrat, open_sans };
