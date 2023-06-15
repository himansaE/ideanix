import { project_stages } from "@/lib/projectData";
import styles from "./stages_page.module.css";
import { cssClasses } from "@/lib/lib";
import { projectStageInterface } from "@/lib/projectData";
import Image from "next/image";
import { inter, lato, montserrat } from "@/lib/fonts";

export default function StagesPage() {
  return (
    <>
      <h2 className={cssClasses("section-header", inter.className)}>
        Phases Of IDEANIX
      </h2>
      <p className={cssClasses(styles.page_des, montserrat.className)}>
        The Phases of IdeaniX are carefully designed to provide a comprehensive
        and transformative journey for participants. With each phase, IdeaniX
        aims to expand horizons, foster innovation, and empower students to
        realize their full potential in the realms of IT and entrepreneurship.
      </p>
      <div className={styles.stage_cards}>
        {project_stages.map((s) => (
          <StageCard data={s} key={s.name} />
        ))}
      </div>

      {/* <div className={styles.scroll_helper} ref={scroll_helper}></div> */}
    </>
  );
}

export function StageCard({ data }: { data: projectStageInterface }) {
  return (
    <div className={cssClasses(styles.main_con, inter.className)}>
      <div className={styles.card}>
        <div
          className={styles.img}
          // style={{ backgroundImage: `url(${data.image})` }}
        >
          <Image
            src={data.image}
            alt=""
            width={512}
            height={512}
            loading="lazy"
          />
        </div>
        <div className={styles.content}>
          <div className={cssClasses(styles.card_title, lato.className)}>
            {data.name}
          </div>
          <div className={styles.tagline}>{data.tagline}</div>
        </div>
        <div className={styles.button}></div>
      </div>
    </div>
  );
}
