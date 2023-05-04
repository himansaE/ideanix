import { Inter } from "next/font/google";
import styles from "./buttons.module.css";
interface ActionButtonProps {
  text: string;
  action?: () => {};
}
const inter = Inter({ subsets: ["latin"], weight: "400" });

export function ActionButton(props: ActionButtonProps) {
  return (
    <div
      className={styles.def_btn}
      onClick={() => {
        if (props.action) props.action();
      }}
    >
      <span className={inter.className}>{props.text} </span>
    </div>
  );
}
