import styles from "../styles/Home.module.css";
import BlurFilter from "@/components/anims/blurFilter";
import NavBar, { NavLogoType } from "@/components/navbar/navbar";
import { useEffect, useRef, useState } from "react";
import { cssClasses } from "@/lib/lib";
import StagesPage from "@/components/home/stages_page";
import Home from "@/components/home/home";
import Timeline from "@/components/home/timeline";
import Header from "@/components/head";
// import Rules from "@/components/home/rules";
import Footer from "@/components/home/footer";
import Contact from "@/components/home/contact";
import Overview from "@/components/home/overview";

// fonts

export default function HomePage() {
  const [nav_logo_type, setNavLogoType] = useState(NavLogoType._NONE);
  const [curr_id, setCurrentID] = useState("");
  const [hide_reg_button, setHideRegButton] = useState(true);
  const main_ref = useRef<HTMLElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    main_ref.current && (main_ref.current.style.scrollBehavior = "smooth");
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentID(`/#${entry.target.id}`);
            if (entry.target.id === "home") setHideRegButton(true);
            else setHideRegButton(false);
          }
        });
      },
      { root: document.getElementById("main"), rootMargin: "-50% 0px" }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <NavBar
        current={curr_id}
        logoType={nav_logo_type}
        fix_size
        hideReg={hide_reg_button}
      />
      <main className={styles.main} id="main" ref={main_ref}>
        <BlurFilter />
        <section
          id="home"
          className={cssClasses(styles.page, styles.home_page)}
        >
          <Home setNavLogoType={setNavLogoType} />
        </section>
        <section
          id="overview"
          className={cssClasses(styles.page, styles.overview_page)}
        >
          <Overview />
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
        {/* <section
          id="rules"
          className={cssClasses(styles.page, styles.rules_page)}
        >
          <Rules />
        </section> */}
        <section
          className={cssClasses(styles.page, styles.contact_page)}
          id="contact"
        >
          <Contact />
        </section>
        <section className={cssClasses(styles.page, styles.footer_page)}>
          <Footer />
        </section>
      </main>
    </>
  );
}
