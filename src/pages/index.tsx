import styles from "../styles/Home.module.css";
import BlurFilter from "@/components/anims/blurFilter";
import NavBar, { NavLogoType } from "@/components/navbar/navbar";
import { useState } from "react";
import { cssClasses } from "@/lib/lib";
import StagesPage from "@/components/home/stages_page";
import Home from "@/components/home/home";
import Timeline from "@/components/home/timeline";
import Header from "@/components/head";
import Rules from "@/components/home/rules";
import Footer from "@/components/home/footer";

// fonts

export default function HomePage() {
  const [nav_logo_type, setNavLogoType] = useState(NavLogoType._NONE);

  return (
    <>
      <Header />
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
          id="phases"
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
        <section
          id="rules"
          className={cssClasses(styles.page, styles.rules_page)}
        >
          <Rules />
        </section>
        <section className={cssClasses(styles.page, styles.footer_page)}>
          <Footer />
        </section>
      </main>
    </>
  );
}
