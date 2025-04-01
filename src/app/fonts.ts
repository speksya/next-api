import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export { roboto };
