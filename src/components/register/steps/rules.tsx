import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RegisterSubPageProps } from "../registerData";
import style from "./step.module.css";
import FormBox from "../components/formBox";

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
      <div className={style.rules_con}>
        <div className={style.rules}>
          <h2>Welcome to the Algorithmic Coding Challenge Hackathon!</h2>
          <p>
            Before participating in the hackathon, we kindly ask you to read and
            understand the following rules and regulations. By accessing and
            using our website, you agree to comply with these rules and
            regulations in their entirety. If you do not agree with any part of
            these terms, please refrain from using our website.
          </p>

          <h3>Eligibility:</h3>
          <ul>
            <li>
              The hackathon is open to individuals or teams who are interested
              in participating.
            </li>
            <li>
              Participants must be at least 18 years old or have parental
              consent to participate.
            </li>
            <li>
              The hackathon is open to participants worldwide unless specified
              otherwise.
            </li>
          </ul>

          <h3>Registration:</h3>
          <ul>
            <li>
              Participants must register for the hackathon by the specified
              deadline.
            </li>
            <li>
              Each participant or team must provide accurate and complete
              registration information.
            </li>
          </ul>

          <h3>Team Composition:</h3>
          <ul>
            <li>
              A team can consist of a minimum of one participant and a maximum
              of five participants.
            </li>
            <li>Participants can only be a part of one team.</li>
          </ul>

          <h3>Theme and Challenges:</h3>
          <ul>
            <li>
              The hackathon will have a specific theme or set of challenges
              announced at the beginning.
            </li>
            <li>
              Participants must develop algorithms and code solutions related to
              the theme or challenges provided.
            </li>
          </ul>

          <h3>Originality and Plagiarism:</h3>
          <ul>
            <li>
              Participants must ensure that their solutions are original and
              developed during the hackathon.
            </li>
            <li>
              Plagiarism or copying existing solutions will lead to
              disqualification.
            </li>
          </ul>

          <h3>Code of Conduct:</h3>
          <ul>
            <li>
              Participants must adhere to a high standard of behavior and
              respect towards other participants and organizers.
            </li>
            <li>
              Any form of harassment, discrimination, or disrespectful behavior
              will not be tolerated and may result in disqualification.
            </li>
          </ul>

          <h3>Submission:</h3>
          <ul>
            <li>
              Participants must submit their code solutions within the specified
              time frame.
            </li>
            <li>
              Submissions must be in the required format and meet the specified
              criteria.
            </li>
          </ul>

          <h3>Intellectual Property:</h3>
          <ul>
            <li>
              Participants retain the intellectual property rights to their
              solutions.
            </li>
            <li>
              However, participants grant the organizers a non-exclusive license
              to use and showcase their solutions for promotional purposes.
            </li>
          </ul>

          <h3>Judging:</h3>
          <ul>
            <li>
              Judging criteria will be provided to participants before or at the
              start of the hackathon.
            </li>
            <li>Judges&apos; decisions will be final and binding.</li>
          </ul>

          <h3>Prizes:</h3>
          <ul>
            <li>
              The hackathon may offer prizes to winners based on the judging
              criteria and results.
            </li>
            <li>
              Prizes are non-transferable and may be subject to taxes or other
              applicable laws.
            </li>
          </ul>
          <p>
            Please note that failure to comply with any of the rules and
            regulations may result in disqualification or other consequences as
            determined by the organizers. We encourage all participants to
            maintain a high level of sportsmanship and collaboration throughout
            the hackathon. Should you have any questions or concerns, please
            contact us using the provided contact information.
          </p>
          <p>
            Thank you for your cooperation, and best of luck in the Algorithmic
            Coding Challenge Hackathon!
          </p>
        </div>
      </div>
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
