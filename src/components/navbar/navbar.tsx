// "use client";
import style from "./navbar.module.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cssClasses } from "../../lib/lib";
import Link from "next/link";

const ft_montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
});

export const nav_items: {
  name: string;
  url: string;
}[] = [
  {
    name: "Stages",
    url: "/#stages",
  },
  {
    name: "Rules",
    url: "/#rules",
  },
  {
    name: "Road Map",
    url: "/#roadmap",
  },
];

interface NavbarProps {
  current?: string;
  logoType?: NavLogoType;
  fix_size?: boolean;
}
export enum NavLogoType {
  _IDEANIX,
  _IEEE,
  _NONE,
}
export default function NavBar({
  current = undefined,
  logoType = NavLogoType._IDEANIX,
  fix_size = false,
}: NavbarProps) {
  return (
    <>
      <nav className={style.nav}>
        <Link href="/">
          <div className={style.logo_con}>
            <Image
              style={{
                display: logoType == NavLogoType._IDEANIX ? "block" : "none",
              }}
              className={style.logo}
              loading="eager"
              src="/logo_colored.webp"
              height={40}
              width={110}
              alt="Ideanix Logo"
            />
            <Image
              style={{
                display: logoType == NavLogoType._IEEE ? "block" : "none",
              }}
              src="/ieee_logo.webp"
              alt=""
              height={40}
              width={83}
            />
          </div>
        </Link>

        <div className={style.list}>
          {nav_items.map((i) => (
            <Link
              key={i.name}
              href={i.url}
              className={cssClasses(
                ft_montserrat.className,
                style.item,
                i.url == current ? style.current : ""
              )}
            >
              <div>{i.name}</div>
            </Link>
          ))}
        </div>
      </nav>
      <div className={fix_size ? style.fake : ""}></div>
    </>
  );
}
