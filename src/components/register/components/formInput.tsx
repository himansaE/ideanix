import React, { ReactNode, useState } from "react";
import style from "./component.module.css";
import { MenuItem, Select, TextField } from "@mui/material";
import { InputDataInterface } from "../registerData";
interface inf_FormInput {
  children: ReactNode;
  title: string;
}
const FormInput = (props: inf_FormInput) => {
  return (
    <div>
      <div className={style.inp_text}>{props.title}</div>
      {props.children}
    </div>
  );
};
export default FormInput;

export const FormTextBox = (props: {
  title: string;
  name: string;
  placeholder?: string;
  data: InputDataInterface;
  // eslint-disable-next-line no-unused-vars
  onChange: (val: string) => void;
  handleFocus: () => void;
}) => {
  const [has_changed, setHasChanged] = useState(false);
  return (
    <FormInput title={props.title}>
      <TextField
        variant="standard"
        name={props.name}
        className={style.input}
        placeholder={props.placeholder ?? "Enter name"}
        value={props.data.value}
        helperText={props.data.error_text}
        error={props.data.error}
        onChange={(e) => props.onChange(e.target.value)}
        onFocus={() => {
          has_changed && props.handleFocus();
        }}
        onBlur={() => {
          props.handleFocus();
          setHasChanged(true);
        }}
      />
    </FormInput>
  );
};

export const FormSelect = (props: {
  title: string;
  name: string;
  placeholder?: string;
  data: InputDataInterface;
  values: [string, string][];
  // eslint-disable-next-line no-unused-vars
  onChange: (val: string) => void;
  handleFocus: () => void;
}) => {
  const [has_changed, setHasChanged] = useState(false);

  return (
    <FormInput title={props.title}>
      <Select
        variant="standard"
        name={props.name}
        className={style.input}
        value={props.data.value}
        error={props.data.error}
        onFocus={() => {
          has_changed && props.handleFocus();
        }}
        onBlur={() => {
          props.handleFocus();
          setHasChanged(true);
        }}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {props.values.map((i) => (
          <MenuItem key={i[0]} value={i[0]}>
            {i[1]}
          </MenuItem>
        ))}
      </Select>
    </FormInput>
  );
};
