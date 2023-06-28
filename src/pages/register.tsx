import NavBar, { NavLogoType } from "@/components/navbar/navbar";
import { register_form_data } from "@/components/register/registerData";
import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";

import styles from "../components/register/register.module.css";
import Head from "next/head";
import RegisterFormRender from "@/components/register/registerRender";
import FormBox from "@/components/register/components/formBox";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { montserrat, open_sans } from "@/lib/fonts";
import Router, { useRouter } from "next/router";
import { NextPageContext } from "next/types";
import Link from "next/link";
import { MIN_MEM_COUNT } from "@/lib/projectData";
import { cssClasses } from "@/lib/lib";

// #region Fonts

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
  const [mem_count, setMemCount] = useState(MIN_MEM_COUNT);

  const router = useRouter();
  //TODO
  const [state, setState] = useState({
    status: _SubmittingStatus._NO,
    text: "",
  });
  useEffect(() => {
    if (localStorage.getItem("done") == "1")
      setState({
        status: _SubmittingStatus._DONE,
        text: "",
      });
  }, []);
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
        localStorage.setItem("done", "1");
        return setSubmit(_SubmittingStatus._NO, "");
      }
      return setSubmit(_SubmittingStatus._DONE, data.text);
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
        <div className={styles.popup}>
          <div className={styles.popup_con}>
            <CircularProgress />
            <div className={montserrat.className}>Submitting.</div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {state.status === _SubmittingStatus._DONE ? (
        <div className={styles.popup}>
          <div className={cssClasses(styles.popup_con, styles.popup_con_s)}>
            <div className={montserrat.className}>Submission Successful.!</div>
            <div className={styles.button_row}>
              <Button
                onClick={() => {
                  localStorage.removeItem("done");
                  router.reload();
                }}
              >
                Resubmit
              </Button>
              <Button href="/" variant="contained">
                Home
              </Button>
            </div>
          </div>
        </div>
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
            mem_count={mem_count}
            setMemCount={setMemCount}
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
const STAGE = process.env.NEXT_PUBLIC_STAGE;
const REGISTER_FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSdmu0eLesyZPcC1SDqcU_a9Jv4ICyiTBhnOa4Dmw5OtqFjw_Q/viewform";

const Register = () => {
  const shouldRedirect = STAGE == "1";
  const router = useRouter();

  useEffect(() => {
    let timeout: unknown;
    if (shouldRedirect) {
      timeout = setTimeout(() => {
        router.replace(REGISTER_FORM_LINK);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout as number);
    };
  }, []);

  if (shouldRedirect)
    return (
      <span>
        Redirecting to{" "}
        <Link
          style={{ color: "#8ab4f8", textDecoration: "underline" }}
          href={REGISTER_FORM_LINK}
        >
          {REGISTER_FORM_LINK}
        </Link>{" "}
        in 2sec.
      </span>
    );
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY ?? ""}>
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>Register for Ideanix</title>
        </Head>
        <NavBar current="" logoType={NavLogoType._IDEANIX} hideReg />
        <RegisterPage />
      </ThemeProvider>
    </GoogleReCaptchaProvider>
  );
};

export default Register;
