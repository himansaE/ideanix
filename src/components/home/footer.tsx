import { cssClasses } from "@/lib/lib";
import styles from "./footer.module.css";
import Image from "next/image";
import { montserrat, open_sans } from "@/lib/fonts";
import Link from "next/link";

const list = [
  [
    {
      name: "Phases",
      url: "/#phases",
    },
    {
      name: "Road Map",
      url: "/#timeline",
    },
    // {
    //   name: "Rules and Regulations",
    //   url: "/#rules",
    // },
    // {
    //   name: "Team Members",
    //   url: "/#members",
    // },
    // {
    //   name: "About",
    //   url: "/#about",
    // },
    {
      name: "Contact Us",
      url: "/#contact",
    },
  ],
  [
    {
      name: "Register",
      url: "/register",
    },
    // {
    //   name: "Road Map",
    //   url: "/#timeline",
    // },
    // {
    //   name: "Rules and Regulations",
    //   url: "/#rules",
    // },
    // {
    //   name: "Team Members",
    //   url: "/#members",
    // },
    // {
    //   name: "About",
    //   url: "/#about",
    // },
    // {
    //   name: "Contact Us",
    //   url: "/#contact",
    // },
  ],
];

export default function Footer() {
  return (
    <div className={styles.con}>
      <div className={styles.sponsors}>
        <Sponsors
          type="Powered by"
          image="/images/aqcellor logo.svg"
          name="Aqcellor"
          height={100}
          width={200}
        />
      </div>
      <div className={cssClasses(montserrat.className, styles.box2)}>
        {list.map((i, n) => (
          <div key={n}>
            {i.map((ii) => (
              <div key={ii.name} className={styles.link}>
                <Link href={ii.url}> {ii.name}</Link>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={cssClasses(styles.credit, montserrat.className)}>
        Copyright © IdeaniX Gen 01 <b> • </b> IEEE CS Chapter of SLTC
        {/* <br /> Designed & developed by{" "}
        <Link href={"https://www.linkedin.com/in/himanse/"}>
          Himansa Wickramasinghe
        </Link> */}
      </div>
    </div>
  );
}

function Sponsors(props: {
  name: string;
  image: string;
  type: string;
  height: number;
  width: number;
}) {
  return (
    <div className={cssClasses(styles.sponsor_item, open_sans.className)}>
      <div className={styles.sponsor_type}>{props.type}</div>
      <div>
        <Image
          src={props.image}
          alt={props.name + " logo"}
          height={props.height}
          width={props.width}
        />
      </div>
    </div>
  );
}
