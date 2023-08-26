import { montserrat } from "@/lib/fonts";
import style from "./team.module.css";
import { cssClasses } from "@/lib/lib";
import type { ReactNode } from "react";
import Image from "next/image";

type TeamCardProps = {
  name: string;
  children: ReactNode;
};

export const TeamCard = ({ name, children }: TeamCardProps) => {
  return (
    <div className={style.team}>
      <h2 className={cssClasses(montserrat.className, style.team_name)}>
        {name}
      </h2>
      <div className={style.team_mems}>{children}</div>
    </div>
  );
};

export const MemberCard = ({ member }: { member: TeamMemData }) => {
  return (
    <div className={style.mem}>
      <Image
        className={style.mem_img}
        src={`/images/peoples/${member.s_id}.webp`}
        alt={`image of ${member.s_id}`}
        width={200}
        height={200}
      />
      <div className={cssClasses(montserrat.className, style.mem_name)}>
        {member.name}
      </div>
      <div className={cssClasses(montserrat.className, style.mem_pos)}>
        {member.is_leader ? "Team Leader" : <br />}
      </div>
    </div>
  );
};
export interface TeamMemData {
  name: string;
  s_id: string;
  email: string;
  is_leader: boolean;
}

export interface TeamData {
  team_name: string;
  members: TeamMemData[];
}

export const team_data: TeamData[] = [
  {
    team_name: "Co Chairmen",
    members: [
      {
        name: "W.Sheshan Hebron",
        s_id: "22UG1-0751",
        email: "22ug1-0751@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "R.V.S.P.Rajapaksha",
        s_id: "22ug1-0825",
        email: "22ug1-0825@sltc.ac.lk",
        is_leader: false,
      },
    ],
  },
  {
    team_name: "Content Creation Team",
    members: [
      {
        name: "H.M.K.S. Dedunupitiya",
        s_id: "22ug1-0812",
        email: "22ug1-0812@sltc.ac.lk",
        is_leader: true,
      },
      {
        name: "H.R.A.N. Dilhara",
        s_id: "22ug1-0723",
        email: "22ug1-0723@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "D.M.Nishadi Sandamini Dissanayake",
        s_id: "22ug1-0761",
        email: "22ug1-0761@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "R.M.D.A.Rathnayaka",
        s_id: "22ug1-0828",
        email: "22ug1-0828@sltc.ac.lk",
        is_leader: false,
      },
    ],
  },
  {
    team_name: "Coordinating Team",
    members: [
      {
        name: "W.M.Subhaga Hanasamana",
        s_id: "22ug1-0816",
        email: "22ug1-0816@sltc.ac.lk",
        is_leader: true,
      },
      {
        name: "W.M.Vihanaga Yashintha Premarathna",
        s_id: "22ug1-0763",
        email: "22ug1-0763@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "P.M.V.M.Didulani",
        s_id: "22ug1-0487",
        email: "22ug1-0487@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "A L L Navod",
        s_id: "22UG1-0031",
        email: "22ug1-0031@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "K.P.Dilhara",
        s_id: "22ug1-0390",
        email: "22ug1-0390@sltc.ac.lk",
        is_leader: false,
      },
    ],
  },
  {
    team_name: "Designing Team",
    members: [
      {
        name: "G. G Hansana Eranga Jayarathna",
        s_id: "22UG1-0784",
        email: "22ug1-0784@sltc.ac.lk",
        is_leader: true,
      },
      {
        name: "H.M.K.C.Herath",
        s_id: "22UG1-0785",
        email: "22ug1-0785@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "K.G.G.R. Bandara",
        s_id: "22ug1-0285",
        email: "22ug1-0285@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "T. D. Nandasiri",
        s_id: "22UG1-0788",
        email: "22ug1-0788@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "U.G.Lavanya cheshani",
        s_id: "22UG1-0880",
        email: "22ug1-0880@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "W.D.Garuka Ranjana",
        s_id: "22ug1-0610",
        email: "22ug1-0610@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "D. G. Abeysuriya",
        s_id: "22UG1-0616",
        email: "22ug1-0616@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "P.D.P. Nimsara Peiris",
        s_id: "22ug1-0627",
        email: "22ug1-0627@sltc.ac.lk",
        is_leader: false,
      },
    ],
  },
  {
    team_name: "Financial and Logistic Team",
    members: [
      {
        name: "E.R.S.H.P. Tathila Mevindu",
        s_id: "22UG1-0126",
        email: "22ug1-0126@sltc.ac.lk",
        is_leader: true,
      },
      {
        name: "G.G.N. Thathsara",
        s_id: "22UG1-0341",
        email: "22ug1-0341@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "D. M. D. Dewmina Bandara",
        s_id: "22ug1-0804",
        email: "22ug1-0804@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "T.N.Akmeemana",
        s_id: "22ug1-0391",
        email: "22ug1-0391@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "K.M. Lahiru Sadaruwan Karunanayake",
        s_id: "22UG1-0754",
        email: "22ug1-0754@sltc.ac.lk",
        is_leader: false,
      },
    ],
  },
  {
    team_name: "Programming Team",
    members: [
      {
        name: "Y.T.S.K.Gamage",
        s_id: "22ug1-0342",
        email: "22ug1-0342@sltc.ac.lk",
        is_leader: true,
      },
      {
        name: "N.M.R.D.Narasingha",
        s_id: "22ug1-0587",
        email: "22ug1-0587@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "N.G Hasith Dilhara",
        s_id: "22ug1-0585",
        email: "22ug1-0585@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "H.L.V.Prasanjana",
        s_id: "22ug1-0521",
        email: "22ug1-0521@sltc.ac.lk",
        is_leader: false,
      },
    ],
  },
  {
    team_name: "Sectary Team",
    members: [
      {
        name: "K G V T Gamage",
        s_id: "22UG1-0392",
        email: "22ug1-0392@sltc.ac.lk",
        is_leader: true,
      },
      {
        name: "W.M.R.Hansika Nethmini Weerasinghe",
        s_id: "22ug1-0397",
        email: "22ug1-0397@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "K. K. R. Shehara",
        s_id: "22ug1-0559",
        email: "22ug1-0559@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "Y.I.Samarawickrama",
        s_id: "22UG1-0542",
        email: "22ug1-0542@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "Anusarani S.G.T.A",
        s_id: "22UG1-0530",
        email: "22ug1-0530@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "S.M.A Nisansala",
        s_id: "22ug1-0849",
        email: "22ug1-0849@sltc.ac.lk",
        is_leader: false,
      },
    ],
  },
  {
    team_name: "Technical Team",
    members: [
      {
        name: "C W M V S Chandrasekara",
        s_id: "22UG1-0394",
        email: "22ug1-0394@sltc.ac.lk",
        is_leader: true,
      },
      {
        name: "W.G.K.C. De Mel",
        s_id: "22UG1-0323",
        email: "22ug1-0323@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "J.K.R Madhawa",
        s_id: "22ug1-0253",
        email: "22ug1-0253@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "C.A.H.Bangamuwage",
        s_id: "22ug1-0936",
        email: "22ug1-0936@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "J.A Isuru Priyankara",
        s_id: "22ug1-0762",
        email: "22ug1-0762@sltc.ac.lk",
        is_leader: false,
      },
    ],
  },
  {
    team_name: "Web Team",
    members: [
      {
        name: "W.M.H.E.K. WICKRAMASINGHE",
        s_id: "22UG1-0789",
        email: "22ug1-0789@sltc.ac.lk",
        is_leader: true,
      },
    ],
  },
];
