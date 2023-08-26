import styles from "./buttons.module.css";
import { cssClasses } from "@/lib/lib";
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import { inter } from "@/lib/fonts";
interface ActionButtonProps {
  text: string;
  action?: () => void;
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
  open_new_tab?: boolean;
}

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
      <Link
        href={props.link}
        target={props.open_new_tab ? "_blank" : undefined}
        rel={props.open_new_tab ? "noopener noreferrer" : undefined}
      >
        <ActionButton
          text={props.text}
          invert={props.invert}
          button_background={props.button_background}
          button_hover_background={props.button_hover_background}
        />
      </Link>
    </div>
  );
}

export const RoundIconButton = (props: {
  href?: string;
  onClick?: () => void;
  d: string;
  title?: string;
}) => (
  <div className={styles.icon_btn} title={props.title} onClick={props.onClick}>
    {props.href ? (
      <Link
        href={props.href}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={props.title}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d={props.d}></path>
        </svg>
      </Link>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22px"
        height="22px"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d={props.d}></path>
      </svg>
    )}
  </div>
);
