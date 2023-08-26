import Footer from "@/components/home/footer";
import NavBar from "@/components/navbar/navbar";
import style from "../components/team/team.module.css";
import { inter, montserrat } from "@/lib/fonts";
import {
  MemberCard,
  TeamCard,
  TeamsHead,
  team_data,
} from "@/components/team/team";
import { cssClasses } from "@/lib/lib";

export default function Team() {
  return (
    <>
      <TeamsHead />
      <NavBar fix_size />

      <main className={style.container}>
        <h1 className={cssClasses(inter.className, style.head)}>
          Meet Our Team.
        </h1>

        <div className={style.description}>
          <p className={montserrat.className}>
            Welcome to the IdeaniX Team Page, where innovation meets dedication!
            Our organizing committee and team leads are the driving force behind
            this immersive program, working tirelessly to ensure that your
            journey in the realms of IT and entrepreneurship is nothing short of
            exceptional.
          </p>
        </div>
        <div className={style.all_teams}>
          {team_data.map((i) => (
            <TeamCard name={i.team_name} key={i.team_name}>
              {i.members.map((ii) => (
                <MemberCard member={ii} key={ii.s_id} />
              ))}
            </TeamCard>
          ))}
        </div>
      </main>
      <div style={{ backgroundColor: "black" }}>
        <Footer />
      </div>
    </>
  );
}
