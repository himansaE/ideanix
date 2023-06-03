import React, { ReactNode } from "react";
import style from "./component.module.css";
import { error } from "console";
import { cssClasses } from "@/lib/lib";
interface inf_FormBox {
  children: ReactNode;
  error?: boolean;
  errorText?: string;
  smallPadding?: boolean;
}

const FormBox = (props: inf_FormBox) => {
  return (
    <div
      className={cssClasses(
        style.box,
        props.error ? style.box_error : "",
        props.smallPadding ? style.small_box : ""
      )}
    >
      {props.children}
      <div
        style={{ display: props.error ? "flex" : "none" }}
        className={style.box_err_text}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"
          ></path>
        </svg>
        {props.errorText}
      </div>
    </div>
  );
};

export default FormBox;
