import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RegisterSubPageProps } from "../registerData";
import FormBox from "../components/formBox";
import style from "./step.module.css";
export default function TeamInfo(props: RegisterSubPageProps) {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (props.is_rendered) props.setLastStateComplete(complete);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [complete, props.is_rendered]);

  return (
    <div>
      <h3 className={style.form_title}>
        In this step enter Team information and the leader.
      </h3>
      <FormBox>
        <div className={style.box_title}>Name of the Team</div>
        <TextField
          variant="standard"
          className={style.input}
          placeholder="Your answer"
        />
      </FormBox>
    </div>
  );
}
