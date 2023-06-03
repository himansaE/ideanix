import NavBar, { NavLogoType } from "@/components/navbar/navbar";
import { register_form_data } from "@/components/register/registerData";
import {
  Button,
  Step,
  StepLabel,
  Stepper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState } from "react";

import styles from "../components/register/register.module.css";
import { Open_Sans } from "next/font/google";
import Head from "next/head";
import RegisterFormRender from "@/components/register/registerRender";

const open_sans = Open_Sans({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: open_sans.style.fontFamily,
  },
});

export default function Register() {
  const [curr_index, setCurrIndex] = useState(0);
  const [last_index_complete, setLastStateComplete] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [button_click, nextClick] = useState(0);
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>Register for Ideanix</title>
      </Head>
      <NavBar current="" logoType={NavLogoType.ideanix} />
      <div className={styles.con}>
        <div className={styles.labels_con}>
          <Stepper
            activeStep={curr_index}
            className={styles.labels}
            alternativeLabel
          >
            {register_form_data.map((i) => (
              <Step key={i.i}>
                <StepLabel>{i.name}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className={styles.content}>
          <RegisterFormRender
            index={curr_index}
            setLastStateComplete={setLastStateComplete}
            is_rendered
            button_click={button_click}
          />
        </div>
        <div className={styles.form_buttons_con}>
          <div className={styles.form_buttons}>
            <Button
              className={curr_index == 0 ? styles.hide_button : ""}
              variant="outlined"
              disabled={curr_index == 0 || submitting}
              onClick={() => {
                setCurrIndex((i) => (i <= 0 ? 0 : i - 1));
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              disabled={submitting}
              onClick={() => {
                if (submitting) return;
                nextClick((i) => i + 1);
                if (!last_index_complete) return;
                if (curr_index >= register_form_data.length - 1)
                  return setSubmitting(true);
                setCurrIndex((i) => {
                  setLastStateComplete(false);
                  return i >= register_form_data.length
                    ? register_form_data.length
                    : i + 1;
                });
              }}
            >
              {submitting
                ? "Submitting"
                : curr_index >= register_form_data.length - 1
                ? "Submit"
                : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
