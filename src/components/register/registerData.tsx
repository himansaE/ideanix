import { Dispatch, SetStateAction } from "react";
import Rules_N_Reg from "./steps/rules";
import TeamInfo from "./steps/teamInfo";
import MemberInfo from "./steps/memberInfo";

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
  mem_count: number;
  setMemCount: Dispatch<SetStateAction<number>>;
}
export interface InputDataInterface {
  value: string;
  error: boolean;
  error_text: string;
}

export const initInputData: () => InputDataInterface = () => ({
  value: "",
  error: false,
  error_text: "",
});

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
    elem: MemberInfo,
  },
];
