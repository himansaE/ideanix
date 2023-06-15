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
      <h3>Basic Rules</h3>
      <ul>
        <li>
          All participants should be undergraduates at Sri Lanka Technological
          Research University.
        </li>
        <li>No need for IEEE membership for participation.</li>
        <li>A team should consist of 3-5 members.</li>
      </ul>
      <h3>Phase 01</h3>
      <ul>
        <li>
          Registration will be started on 28th June and will be closed on 5th
          July.
        </li>
        <li>
          Within that time period, you have to generate a proposal with your
          idea and submit it through the &#39;IdeaniX&#39; website.
        </li>
        <li>
          Each team can give a maximum of 3 proposals, but it&#39;s better to
          hand over only once.
        </li>
        <li>Make sure that your idea has not been implemented before.</li>
      </ul>
      <h3>Phase 02</h3>
      <ul>
        <li>The selected 20 teams from phase 1 are eligible for this phase.</li>
        <li>
          The teams should participate in mentoring sessions and a BMC (Business
          Model Canvas) session for a good understanding of the next phase.
        </li>
        <li>
          Finally, on 14th July, teams should present their proposal idea in
          front of a judge panel.
        </li>
      </ul>
      <h3>Phase 03</h3>
      <ul>
        <li>
          Candidates who are selected from phase 2 are eligible for this phase.
        </li>
        <li>
          Candidates should do their development work during the period of 16th
          July - 10th August.
        </li>
        <li>
          On 11th August, the final event will be conducted physically, and the
          top 3 teams will be awarded.
        </li>
      </ul>
    </div>
  );
}
