// "use client";
import style from "./navbar.module.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cssClasses } from "../../lib/lib";
import Link from "next/link";
import SideNav from "./side_nav";
import { LinkButton } from "../elements/buttons";
import { useState } from "react";
import XIcon from "../anims/x_icon";

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
    url: "/#timeline",
  },
];

interface NavbarProps {
  current?: string;
  logoType?: NavLogoType;
  fix_size?: boolean;
  page?: string;
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
  page,
}: NavbarProps) {
  const [side_nav_open, setSideNavOpen] = useState(false);
  return (
    <>
      <SideNav open={side_nav_open} data={nav_items} setter={setSideNavOpen} />
      <nav className={cssClasses(style.nav, side_nav_open ? style.open_d : "")}>
        <Link href="/#home">
          <div className={style.logo_con}>
            <Image
              style={{
                display:
                  logoType == NavLogoType._IDEANIX && !side_nav_open
                    ? "block"
                    : "none",
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
                display:
                  logoType == NavLogoType._IEEE || side_nav_open
                    ? "block"
                    : "none",
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
              onClick={() => setSideNavOpen(false)}
            >
              <div>{i.name}</div>
            </Link>
          ))}
        </div>
        <div className={style.end_list}>
          {page !== "register" ? (
            <LinkButton text="Register" link="/register" />
          ) : (
            <></>
          )}
          <div
            className={style.button}
            onClick={() => setSideNavOpen((i) => !i)}
          >
            <XIcon opened={side_nav_open} />
          </div>
        </div>
      </nav>
      <div className={fix_size ? style.fake : ""}></div>
    </>
  );
}
