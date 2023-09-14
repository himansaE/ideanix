import { montserrat } from "@/lib/fonts";
import style from "./team.module.css";
import { cssClasses } from "@/lib/lib";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

type TeamCardProps = {
  name: string;
  children: ReactNode;
};

export const TeamCard = ({ name, children }: TeamCardProps) => {
  return (
    <div className={style.team} id={name.split(" ").join("_").toLowerCase()}>
      <h2 className={cssClasses(montserrat.className, style.team_name)}>
        <Link href={`#${name.split(" ").join("_").toLowerCase()}`}>{name}</Link>
      </h2>
      <div className={style.team_mems}>{children}</div>
    </div>
  );
};

export const MemberCard = ({ member }: { member: TeamMemData }) => {
  return (
    <div className={style.mem}>
      <div className={style.img}>
        <Image
          className={style.mem_img}
          src={`/images/peoples/${member.s_id.toUpperCase()}.webp`}
          alt={`image of ${member.s_id}`}
          width={200}
          height={200}
        />
        <div className={style.icons}>
          <Link
            className={style.icon}
            href={`mailto:${member.email}`}
            title="email"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg width="1.2em" height="1.2em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.538-1.463T7 12q0-2.075 1.463-3.538T12 7q2.075 0 3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15q.65 0 1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20h5v2h-5Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"
              ></path>
            </svg>
          </Link>
          {member.linkedin ? (
            <Link
              className={style.icon}
              href={member.linkedin}
              title="linkedin"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg width="1.2em" height="1.2em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                ></path>
              </svg>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div
        className={cssClasses(montserrat.className, style.mem_name)}
        title={member.name}
      >
        {member.name}
      </div>
      <div className={cssClasses(montserrat.className, style.mem_pos)}>
        {member.is_leader ? "Team Leader" : "Team Member"}
      </div>
    </div>
  );
};
export const TeamsHead = () => {
  return (
    <Head>
      <title>Meet Our Team | ideanix</title>
      <meta
        name="description"
        content="Meet the IdeaniX Organizing Committee and Team Leads driving innovation and entrepreneurship. Learn about their expertise and dedication to empower participants' creative journeys."
      />
      <meta
        name="keywords"
        content="IdeaniX, Organizing Committee, Team Leads, Innovation, Entrepreneurship, Technology, Mentorship"
      />
      <link rel="icon" href="/favicon-96x96.png" type="image/png" />
    </Head>
  );
};
export interface TeamMemData {
  name: string;
  s_id: string;
  email: string;
  is_leader: boolean;
  linkedin?: string;
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
        name: "W.S. Hebron",
        s_id: "22UG1-0751",
        email: "sheshanhebron539@gmail.com",
        is_leader: false,
        linkedin: "https://www.linkedin.com/in/sheshan-hebron-04a557213",
      },
      {
        name: "R.V.S.P. Rajapaksha",
        s_id: "22ug1-0825",
        email: "rvsp.rajapaksha@gmail.com",
        is_leader: false,
        linkedin: "https://lk.linkedin.com/in/sasanka-rajapaksha-0225b5276",
      },
    ],
  },
  {
    team_name: "Content Creation Team",
    members: [
      {
        name: "H.M.K.S. Dedunupitiya",
        s_id: "22ug1-0812",
        email: "kavindudedunupitiya@gmail.com",
        is_leader: true,
        linkedin: "https://www.linkedin.com/in/kavindu-dedunupitiya-se25",
      },
      {
        name: "H.R.A.N. Dilhara",
        s_id: "22ug1-0723",
        email: "hrachiranadeeshan@gmail.com",
        is_leader: false,
        linkedin: "https://www.linkedin.com/in/achiranadeeshan/",
      },
      {
        name: "D.M.N.S. Dissanayake",
        s_id: "22ug1-0761",
        email: "nsandamini505@gmail.com",
        is_leader: false,
        linkedin: "https://www.linkedin.com/in/nishadi-dissanayake-0b381627a",
      },
      {
        name: "R.M.D.A. Rathnayaka",
        s_id: "22ug1-0828",
        email: "dhanukarathnayaka658@gmail.com",
        is_leader: false,
      },
    ],
  },
  {
    team_name: "Coordinating Team",
    members: [
      {
        name: "W.M.S. Hanasamana",
        s_id: "22ug1-0816",
        email: "22ug1-0816@sltc.ac.lk",
        is_leader: true,
      },
      {
        name: "W.M.V.Y. Premarathna",
        s_id: "22ug1-0763",
        email: "22ug1-0763@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "P.M.V.M. Didulani",
        s_id: "22ug1-0487",
        email: "22ug1-0487@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "W.M.R.H.N. WEERASINGHE",
        s_id: "22ug1-0397",
        email: "hansikanethmini09@gmail.com",
        is_leader: false,
        linkedin: "https://www.linkedin.com/in/hansika-nethmini-8a2393243",
      },
      {
        name: "K.P. Dilhara",
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
        name: "G.G.H.E. Jayarathna",
        s_id: "22UG1-0784",
        email: "hansana.eranga.jayarathna2001@gmail.com",
        is_leader: true,
        linkedin: "https://lk.linkedin.com/in/hansana-eranga-22500123a",
      },
      {
        name: "H.M.K.C. Herath",
        s_id: "22UG1-0785",
        email: "Kcherath7@gmail.com",
        is_leader: false,
        linkedin: "https://www.linkedin.com/in/lavanya-cheshani-00229a275",
      },
      {
        name: "K.G.G.R. Bandara",
        s_id: "22ug1-0285",
        email: "22ug1-0285@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "T.D. Nandasiri",
        s_id: "22UG1-0788",
        email: "22ug1-0788@sltc.ac.lk",
        is_leader: false,
        linkedin: "https://www.linkedin.com/in/tharuka-nandasiri-879503213",
      },
      {
        name: "U.G.L. CHESHANI",
        s_id: "22UG1-0880",
        email: "22ug1-0880@sltc.ac.lk",
        is_leader: false,
        linkedin: "https://www.linkedin.com/in/lavanya-cheshani-00229a275",
      },
      {
        name: "W.D.G. Ranjana",
        s_id: "22ug1-0610",
        email: "garukaranjana862@gmail.com",
        is_leader: false,
        linkedin: "https://linkedin.com/in/garuka-ranjana-2036bb208",
      },
    ],
  },
  {
    team_name: "Financial and Logistic Team",
    members: [
      {
        name: "E.R.S.H.P. Tathila",
        s_id: "22UG1-0126",
        email: "tathilasiriwardhana0017@gmail.com",
        is_leader: true,
        linkedin: "https://www.linkedin.com/in/tathila-siriwardhana-768925174",
      },
      {
        name: "G.G.N. Thathsara",
        s_id: "22UG1-0341",
        email: "22ug1-0341@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "D.M.D.D. Bandara",
        s_id: "22ug1-0804",
        email: "22ug1-0804@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "K.M.L.S. Karunanayake",
        s_id: "22UG1-0754",
        email: "hirummk@gmail.com",
        is_leader: false,
        linkedin: "https://www.linkedin.com/in/lahiru-sadaruwan",
      },
    ],
  },
  {
    team_name: "Programming Team",
    members: [
      {
        name: "Y.T.S.K.Gamage",
        s_id: "22ug1-0342",
        email: "sandaruwanyashintha@gmail.com",
        is_leader: true,
        linkedin: "https://www.linkedin.com/in/yashintha-sandaruwan-158a95276",
      },
      {
        name: "N.M.R.D.Narasingha",
        s_id: "22ug1-0587",
        email: "22ug1-0587@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "N.G. Hasith Dilhara",
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
        name: "K.G.V.T. Gamage",
        s_id: "22UG1-0392",
        email: "22ug1-0392@sltc.ac.lk",
        is_leader: true,
      },

      {
        name: "K.K.R. Shehara",
        s_id: "22ug1-0559",
        email: "22ug1-0559@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "Y.I. Samarawickrama",
        s_id: "22UG1-0542",
        email: "yuwanikaiwanthi@gmail.com",
        is_leader: false,
        linkedin:
          "https://www.linkedin.com/in/yuwanika-samarawickrama-23a12b20b",
      },
      {
        name: "S.G.T.A. Anusarani",
        s_id: "22UG1-0530",
        email: "22ug1-0530@sltc.ac.lk",
        is_leader: false,
      },
      {
        name: "S.M.A. Nisansala",
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
        name: "C.W.M.V.S. Chandrasekara",
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
        name: "C.A.H. Bangamuwage",
        s_id: "22ug1-0936",
        email: "22ug1-0936@sltc.ac.lk",
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
        linkedin: "https://www.linkedin.com/in/himanse/",
      },
    ],
  },
];
