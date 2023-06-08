import { project_stages } from "@/lib/projectData";
import styles from "./stages_page.module.css";
import { Inter, Lato, Montserrat } from "next/font/google";
import { cssClasses } from "@/lib/lib";
import { projectStageInterface } from "@/lib/projectData";
import Image from "next/image";
// import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"], weight: ["600", "400"] });
const lato = Lato({ subsets: ["latin"], weight: "700" });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});
export default function StagesPage() {
  // const stage_cards_list = useRef<HTMLDivElement>(null);
  // const scroll_helper = useRef<HTMLDivElement>(null);

  // const resize_func = () => {
  //   if (!stage_cards_list.current) return;
  //   if (!scroll_helper.current) return;
  //   scroll_helper.current.style.height = `${
  //     stage_cards_list.current.scrollWidth -
  //     stage_cards_list.current.offsetHeight
  //   }px`;
  // };

  // const scroll_func = () => {};

  // useEffect(() => {
  //   resize_func();
  //   window.addEventListener("resize", resize_func);
  //   window.addEventListener("scroll", scroll_func);
  //   return () => {
  //     window.removeEventListener("resize", resize_func);
  //     window.removeEventListener("scroll", scroll_func);
  //   };
  // }, []);
  return (
    <>
      <h2 className={cssClasses("section-header", inter.className)}>
        Phases Of IdeaNiX
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
