import { Checkbox, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { RegisterSubPageProps } from "../registerData";
import style from "./step.module.css";
import FormBox from "../components/formBox";
import { cssClasses } from "@/lib/lib";
import { montserrat } from "@/lib/fonts";

export default function Rules_N_Reg(props: RegisterSubPageProps) {
  const [agreed, setAgreed] = useState(false);

  // Navigation between steps
  useEffect(() => {
    if (props.is_rendered) props.setLastStateComplete(agreed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agreed, props.is_rendered]);

  // When next button clicked
  useEffect(() => {
    if (props.button_click == 0) return;
    checkErrors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.button_click]);

  const [error, setError] = useState(false);
  const checkErrors = () => {
    setError(!agreed);
  };

  return (
    <div>
      <RulesText />
      <FormBox
        error={error}
        errorText="To continue you have to agree Rules and Regulations."
        smallPadding
      >
        <FormControlLabel
          control={
            <Checkbox
              value={agreed}
              name="rules_agreed"
              onChange={() => {
                setAgreed((i) => !i);
                setError(agreed);
              }}
            />
          }
          label=" I have agreed to Terms & Conditions*"
        />
      </FormBox>
    </div>
  );
}

export function RulesText() {
  return (
    <div className={cssClasses(style.rules_con, montserrat.className)}>
      <h2>Welcome to the Ideanix Generation 1!</h2>
      <p>
        Before participating in the Ideanix, we kindly ask you to read and
        understand the following rules and regulations. By accessing and using
        our website, you agree to comply with these rules and regulations in
        their entirety. If you do not agree with any part of these terms, please
        refrain from using our website.
      </p>
      <h3>Basic Rules & Regulations:</h3>
      <ul>
        <li>
          All participants should be undergraduates of SLTC Research University.
        </li>
        <li>
          A team should consist of 2 to 5 members, not be from the same Batch or
          same Degree program.
        </li>
        <li>One contestant can represent only one team.</li>
        <li>The ideas should be original and innovative.</li>
        <li>
          Ideas should be presented in a proposal that adheres to the proposal
          format and guidelines provided.
        </li>
        <li>
          The proposed idea cannot be changed after the submission of the
          proposal, but the final product may consist of additional features.
        </li>
      </ul>

      <h3>Important Information about the competition:</h3>
      <ul>
        <li>
          Registration for the competition will be open from 28th June at 6 p.m.
          to 12th July at 12 a.m.
        </li>
        <li>
          Incomplete submissions or any submissions related to the current
          real-world solution will be disqualified.
        </li>
        <li>
          The idea must be a unique idea from your team, you can&apos;t rebuild
          an existing system.
        </li>
        <li>
          Strictly follow the format in the given sample proposal structure to
          prepare your document. (All details should be clearly stated & written
          in English)
        </li>
        <li>
          From all the submissions, top 20 teams will be selected for the
          semi-finals and the judge&apos;s decision is the final decision that
          cannot be changed, irrevocable.
        </li>
      </ul>

      <h3>Semi-Finals rules:</h3>
      <ul>
        <li>
          The selected teams must present the submitted proposals physically in
          front of a judging board on the 14th of July.
        </li>
        <li>A maximum of 5 minutes will be given for that.</li>
        <li>
          The best performing 10 teams will be selected for the BMC session.
          (The judge&apos;s decision is the final decision that cannot be
          changed, irrevocable.)
        </li>
        <li>
          Those who participate and completed the BMC will be directly passed to
          the finals.
        </li>
        <li>
          Once the top 10 teams are announced, they will be given 4 weeks (a
          one-month) to develop their ideas into final output.
        </li>
      </ul>

      <h3>Finals rules:</h3>
      <ul>
        <li>
          Finalist teams will be assigned to respected mentors according to the
          field of their idea and encouraged to present a final product or a
          reasonable prototype for the final presentation.
        </li>
        <li>
          Competitors are highly encouraged to present a final product or a
          reasonable prototype for the final event.
        </li>
        <li>Finalist teams will be announced on the 13th of August 2023.</li>
        <li>Grand Finale will be held on the 15th of August 2023.</li>
      </ul>
    </div>
  );
}
