import { Inter } from "next/font/google";
import styles from "./buttons.module.css";
import { cssClasses } from "@/lib/lib";
import Link from "next/link";
interface ActionButtonProps {
  text: string;
  action?: () => any;
  invert?: boolean;
}
interface LinkButtonProps {
  text: string;
  link: string;
  invert?: boolean;
}
const inter = Inter({ subsets: ["latin"], weight: "400" });

export function ActionButton(props: ActionButtonProps) {
  return (
    <div
      className={cssClasses(styles.def_btn, props.invert ? styles.invert : "")}
      onClick={props.action}
    >
      <span className={inter.className}>{props.text} </span>
    </div>
  );
}
export function LinkButton(props: LinkButtonProps) {
  return (
    <div>
      <Link href={props.link}>
        <div
          className={cssClasses(
            styles.def_btn,
            props.invert ? styles.invert : ""
          )}
        >
          <span className={inter.className}>{props.text} </span>
        </div>
      </Link>
    </div>
  );
}
