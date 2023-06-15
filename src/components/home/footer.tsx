import { cssClasses } from "@/lib/lib";
import styles from "./footer.module.css";
import Image from "next/image";
import { open_sans } from "@/lib/fonts";
export default function Footer() {
  return (
    <div className={styles.con}>
      <div className={styles.sponsors}>
        <Sponsors
          type="Title sponsor"
          image="/images/aqcellor logo.svg"
          name="Aqcellor"
          height={100}
          width={200}
        />
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
