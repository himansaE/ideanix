import { Dispatch, SetStateAction } from "react";
import Rules_N_Reg from "./steps/rules";
import TeamInfo from "./steps/teamInfo";

interface FormDataInterface {
  i: number;
  name: string;
  // eslint-disable-next-line no-undef, no-unused-vars
  elem: (props: RegisterSubPageProps) => JSX.Element;
}
export interface RegisterSubPageProps {
  setLastStateComplete: Dispatch<SetStateAction<boolean>>;
  index: number;
  is_rendered: boolean;
  button_click: number;
}
export const register_form_data: FormDataInterface[] = [
  {
    i: 1,
    name: "Rules and Regulations",
    elem: Rules_N_Reg,
  },
  {
    i: 2,
    name: "Team Information",
    elem: TeamInfo,
  },
  {
    i: 3,
    name: "Member Information",
    elem: Rules_N_Reg,
  },
];
