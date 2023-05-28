import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RegisterSubPageProps } from "../registerData";

export default function Rules_N_Reg(props: RegisterSubPageProps) {
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    // validate function
    if (props.is_rendered) props.setLastStateComplete(agreed);
  }, [agreed, props.is_rendered]);

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            required
            value={agreed}
            name="rules_agreed"
            onChange={() => {
              setAgreed((i) => !i);
            }}
          />
        }
        label=" I have agreed to Terms & Conditions"
      />
    </div>
  );
}
