import React, { ReactNode, useEffect, useRef, useState } from "react";
import style from "./component.module.css";
import {
  Button,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { InputDataInterface } from "../registerData";
import { cssClasses } from "@/lib/lib";
import { dark } from "@mui/material/styles/createPalette";
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
  type?: string;
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
        type={props.type}
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
enum FormInputState {
  _NONE,
  _UPLOADING,
  _ERROR,
  _DONE,
}

export const FormFileInput = (props: {
  title: string;
  name: string;
  data: InputDataInterface;
  onChange: (val: string) => void;
  handleFocus: () => void;
}) => {
  const [file_name, setFileName] = useState<string | undefined>(
    "Choose a file."
  );
  const [state, setState] = useState(FormInputState._NONE);
  const [progress, setProgress] = useState(40);

  const inp_elem = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (props.data.error) {
      setFileName(props.data.error_text);
      setState(FormInputState._ERROR);
    }
  }, [props.data.error]);
  return (
    <>
      <FormInput title={props.title}>
        <div className={style.file_input}>
          <Button
            variant="outlined"
            onClick={() => inp_elem.current?.click()}
            disabled={state == FormInputState._UPLOADING}
          >
            {state == FormInputState._UPLOADING
              ? `uploading ${progress}%`
              : "upload"}
          </Button>
          <TextField
            value={props.data.value}
            className={style.hidden}
            name={props.name}
          />
          <input
            className={style.hidden}
            type="file"
            ref={inp_elem}
            aria-hidden
            onBlur={props.handleFocus}
            accept="application/pdf"
            onChange={(e) => {
              if (state === FormInputState._UPLOADING) return;
              if (!e.target.files) return setFileName("Choose a file..");
              if (e.target.files.length == 0)
                return setFileName("Choose a file.");
              props.onChange("");
              setFileName(e.target.files?.[0].name);
              setProgress(0);
              setState(FormInputState._UPLOADING);

              const xhr = new XMLHttpRequest();
              xhr.responseType = "json";
              const formData = new FormData();
              formData.append("file", e.target.files[0]);
              xhr.open("POST", "/api/upload_pdf");

              xhr.upload.addEventListener("progress", (e) => {
                if (e.lengthComputable) {
                  setProgress(Math.round((e.loaded / e.total) * 100));
                }
              });
              xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                  if (xhr.status === 200) {
                    setState(FormInputState._DONE);
                    const data = xhr.response;
                    if (data.error) {
                      setState(FormInputState._ERROR);
                      setFileName("Error. try again.");
                    } else {
                      setState(FormInputState._DONE);
                      setFileName(e.target.files?.[0].name ?? "");
                      props.onChange(data.token);
                    }
                  } else {
                    setState(FormInputState._ERROR);
                    setFileName("Upload error. Try again.");
                    props.onChange("");
                  }
                }
              };
              xhr.send(formData);
            }}
          />
          {state == FormInputState._UPLOADING ? (
            <CircularProgress
              variant="determinate"
              value={progress}
              style={{
                height: "30px",
                width: "30px",
              }}
            />
          ) : (
            <div
              className={cssClasses(
                style.file_name,
                state === FormInputState._ERROR ? style.file_error : ""
              )}
            >
              {file_name}
            </div>
          )}
        </div>
      </FormInput>
    </>
  );
};
