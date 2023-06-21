import Image from "next/image";
import styles from "./navbar.module.css";
import { cssClasses } from "@/lib/lib";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { inter, montserrat } from "@/lib/fonts";

interface SideNavProps {
  data: {
    name: string;
    url: string;
  }[];
  setter: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
export default function SideNav(props: SideNavProps) {
  return (
    <div
      className={cssClasses(
        styles.side_nav,
        props.open ? styles.open : styles.close
      )}
    >
      <div className={styles.side_nav_con}>
        <div>
          <div className={styles.side_logo_con}>
            <Image src="/logo-x.webp" alt="" width={65} height={80} />
            <div className={cssClasses(inter.className, styles.title)}>
              IDEANIX
            </div>
          </div>
          <div className={cssClasses(montserrat.className, styles.text)}>
            Where imagination meets reality
          </div>
        </div>
        <div className={styles.link_boxes}>
          {props.data.map((i) => (
            <div
              key={i.name}
              className={cssClasses(montserrat.className, styles.link_box)}
            >
              <Link href={i.url} onClick={() => props.setter(false)}>
                {i.name}
              </Link>
            </div>
          ))}
        </div>
        <div className={cssClasses(styles.foot, montserrat.className)}>
          Webmaster Team • Ideanix
        </div>
      </div>
    </div>
  );
}
