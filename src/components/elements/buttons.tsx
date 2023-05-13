import { Inter } from "next/font/google";
import styles from "./buttons.module.css";
import { cssClasses } from "@/lib/lib";
import Link from "next/link";
import { CSSProperties } from "react";
interface ActionButtonProps {
  text: string;
  action?: () => any;
  invert?: boolean;
  button_background?: string;
  button_hover_background?: string;
}
interface LinkButtonProps {
  text: string;
  link: string;
  invert?: boolean;
  button_background?: string;
  button_hover_background?: string;
}
const inter = Inter({ subsets: ["latin"], weight: "400" });

export function ActionButton(props: ActionButtonProps) {
  return (
    <div
      className={cssClasses(styles.def_btn, props.invert ? styles.invert : "")}
      onClick={props.action}
      style={
        {
          "--button-back": props.button_background,
          "--button-hover-back": props.button_hover_background,
        } as CSSProperties
      }
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
