import styles from "../styles/Home.module.css";
import BlurFilter from "@/components/anims/blurFilter";
import NavBar, { NavLogoType } from "@/components/navbar/navbar";
import { useState } from "react";
import { cssClasses } from "@/lib/lib";
import StagesPage from "@/components/home/stages_page";
import Home from "@/components/home/home";
import Timeline from "@/components/home/timeline";
import Head from "next/head";

// fonts

export default function HomePage() {
  const [nav_logo_type, setNavLogoType] = useState(NavLogoType._NONE);

  return (
    <>
      <Head>
        <title>IDEANIX: Where ideas become reality.</title>
      </Head>
      <NavBar current="" logoType={nav_logo_type} fix_size />
      <main className={styles.main}>
        <BlurFilter />
        <section
          id="home"
          className={cssClasses(styles.page, styles.home_page)}
        >
          <Home setNavLogoType={setNavLogoType} />
        </section>
        <section
          id="stages"
          className={cssClasses(styles.page, styles.stages_page)}
        >
          <StagesPage />
        </section>
        <section
          id="timeline"
          className={cssClasses(styles.page, styles.timeline_page)}
        >
          <Timeline />
        </section>
      </main>
    </>
  );
}
