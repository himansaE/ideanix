import { cssClasses } from "@/lib/lib";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["600", "400"] });

export default function Timeline() {
  return (
    <>
      <h1 className={cssClasses("section-header", inter.className)}>
        Timeline of the Project
      </h1>
    </>
  );
}
