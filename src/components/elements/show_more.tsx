import { cssClasses } from "@/lib/lib";
import style from "./show_more.module.css";
import { lato } from "@/lib/fonts";

export default function ShowMore(props: {
  open: boolean;
  onClick: () => void;
  bg?: string;
}) {
  return (
    <div className={cssClasses(style.con, lato.className)}>
      <div
        className={style.button}
        onClick={props.onClick}
        style={{ backgroundColor: props.bg ?? "#ffffff0f" }}
      >
        <div className={cssClasses(style.icon, props.open ? "" : style.close)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.7 14.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 8.425q.2 0 .388.075t.312.2l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275Z"
            ></path>
          </svg>
        </div>
        {props.open ? "Show less" : "Show more"}
      </div>
    </div>
  );
}
