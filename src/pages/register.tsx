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
import { useCallback, useEffect, useRef, useState } from "react";

import styles from "../components/register/register.module.css";
import { Montserrat, Open_Sans } from "next/font/google";
import Head from "next/head";
import RegisterFormRender from "@/components/register/registerRender";
import FormBox from "@/components/register/components/formBox";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
// import { ReCaptchaProvider, useReCaptcha } from "next-recaptcha-v3";

// #region Fonts
const open_sans = Open_Sans({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["400", "500"],
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
// #endregion
enum _SubmittingStatus {
  _NO,
  _SUBMITTING,
  _ERROR,
  _DONE,
}

function RegisterPage() {
  const [curr_index, setCurrIndex] = useState(0);
  const [last_index_complete, setLastStateComplete] = useState(false);
  const [button_click, nextClick] = useState(0);
  const [state, setState] = useState({
    status: _SubmittingStatus._NO,
    text: "",
  });

  const form_ref = useRef<HTMLFormElement>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const setSubmit = (_state: _SubmittingStatus, text: string) => {
    setState({
      ...state,
      status: _state,
      text: text,
    });
  };

  const SubmitForm = useCallback(async () => {
    if (state.status === _SubmittingStatus._SUBMITTING) return;
    setState({ ...state, status: _SubmittingStatus._SUBMITTING });

    if (!form_ref.current)
      return setSubmit(
        _SubmittingStatus._ERROR,
        "Something went Wrong. Try refresh page."
      );

    const form_data = new FormData(form_ref.current);

    if (!executeRecaptcha) {
      return setSubmit(
        _SubmittingStatus._ERROR,
        "Recaptcha not yet available. Try wait few seconds."
      );
    }
    try {
      const token = await executeRecaptcha("form_submit");
      form_data.append("token", token);
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(form_data)),
      }).then((r) => r);
      const data = await res.json();

      if (res.status === 200 && data.error === false) {
        //TODO: show Submit done
        return setSubmit(_SubmittingStatus._NO, "");
      }
      return setSubmit(_SubmittingStatus._ERROR, data.text);
    } catch {
      return setState({
        ...state,
        status: _SubmittingStatus._ERROR,
        text: "You are offline. Can't connect to the server.",
      });
    }
  }, [executeRecaptcha, state]);

  return (
    <div className={styles.con}>
      {state.status === _SubmittingStatus._SUBMITTING ? (
        <div className={styles.popup}></div>
      ) : (
        <></>
      )}
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
        <form
          ref={form_ref}
          onSubmit={(e) => e.preventDefault()}
          className={montserrat.className}
        >
          <RegisterFormRender
            index={curr_index}
            setLastStateComplete={setLastStateComplete}
            is_rendered
            button_click={button_click}
          />
        </form>
        <div className={styles.error}>
          {state.status === _SubmittingStatus._ERROR ? (
            <div className={styles.error_data}>
              <FormBox
                error
                errorText={
                  <div className={montserrat.className}>{state.text}</div>
                }
                smallPadding
              >
                <></>
              </FormBox>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.form_buttons_con}>
        <div className={styles.form_buttons}>
          <Button
            className={curr_index == 0 ? styles.hide_button : ""}
            variant="outlined"
            disabled={
              curr_index == 0 || state.status == _SubmittingStatus._SUBMITTING
            }
            onClick={() => {
              if (
                curr_index == 0 ||
                state.status === _SubmittingStatus._SUBMITTING
              )
                return;
              setCurrIndex((i) => (i <= 0 ? 0 : i - 1));
              queueMicrotask(() => {
                window.scrollTo(0, 10000);
              });
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            disabled={state.status === _SubmittingStatus._SUBMITTING}
            onClick={() => {
              if (state.status === _SubmittingStatus._SUBMITTING) return;
              nextClick((i) => i + 1);
              if (!last_index_complete) return;
              if (curr_index >= register_form_data.length - 1)
                return SubmitForm();
              setCurrIndex((i) => {
                setLastStateComplete(false);
                window.scrollTo(0, 0);
                return i >= register_form_data.length
                  ? register_form_data.length
                  : i + 1;
              });
            }}
          >
            {state.status == _SubmittingStatus._SUBMITTING
              ? "Submitting"
              : curr_index >= register_form_data.length - 1
              ? "Submit"
              : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const Register = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY ?? ""}>
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>Register for Ideanix</title>
        </Head>
        <NavBar current="" logoType={NavLogoType._IDEANIX} page="register" />
        <RegisterPage />
      </ThemeProvider>
    </GoogleReCaptchaProvider>
  );
};
export default Register;
