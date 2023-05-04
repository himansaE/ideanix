import Image from "next/image";
import { Inter, Rubik } from "next/font/google";
import styles from "../styles/Home.module.css";
import BlurFilter from "@/components/anims/blurFilter";
import NavBar, { NavLogoType } from "@/components/navbar/navbar";
import { useEffect, useRef, useState } from "react";
import { cssClasses, joinObject } from "@/lib/lib";
import { ActionButton } from "@/components/elements/buttons";

// fonts
const inter = Inter({ subsets: ["latin"], weight: ["800", "400"] });
const poppins = Rubik({ subsets: ["latin"], weight: "800" });

interface LogoImagePosData {
  rendered?: boolean;
  left: number;
  top: number;
  width: number;
  height: number;
  scale?: number;
}

export default function Home() {
  const [nav_logo_type, setNavLogoType] = useState(NavLogoType.none);
  const [isMounted, setIsMounted] = useState(true);

  // use for logo shrinking
  const main_logo_ref = useRef<HTMLDivElement>(null);
  const nav_img_pos: LogoImagePosData = {
    left: 20,
    top: 10,
    width: 110,
    height: 40,
    scale: 0.4,
  };
  const [logo_image_data, setLogoImageData] = useState(nav_img_pos);

  useEffect(() => {
    if (isMounted) {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);

      if (main_logo_ref.current) handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  // called on scroll
  const handleScroll = () => {
    // handle shrinkable logo
    if (!main_logo_ref.current) return;

    const main_logo_pos = main_logo_ref.current.getBoundingClientRect();

    if (main_logo_pos.top <= nav_img_pos.top)
      setLogoImageData(joinObject(nav_img_pos, { rendered: true }));

    // change the visibility of nav logo - 20 is padding
    if (main_logo_pos.top <= nav_img_pos.height + 20)
      setNavLogoType(NavLogoType.none);
    else setNavLogoType(NavLogoType.ieee);

    // don't need to calculate logo is not visitable
    if (main_logo_pos.top <= nav_img_pos.top) return;

    // calculate image position
    const distance_y = main_logo_pos.top - nav_img_pos.top;

    //TODO:: USE SCREEN WIDTH for
    const scale =
      0.4 + distance_y / Math.abs(main_logo_pos.left - nav_img_pos.left) / 1;

    // set position of main logo
    setLogoImageData(
      joinObject(logo_image_data, {
        rendered: true,
        top: Math.max(main_logo_pos.y, nav_img_pos.top),
        left: Math.min(
          Math.max(nav_img_pos.left, distance_y * 1.78 + 20),
          main_logo_pos.left
        ),
        scale: Math.min(scale, 1),
      })
    );
  };
  return (
    <>
      <NavBar current="" logoType={nav_logo_type} />
      <main className={styles.main}>
        <BlurFilter />
        <section
          id="home"
          className={cssClasses(styles.page, styles.home_page)}
        >
          <div className={styles.background}>
            <div className={styles.phoenix_img}>
              <div></div>
            </div>
            <div></div>
          </div>
          <div className={styles.content_con}>
            <div className={styles.content}>
              <div className={styles.ideanix_logo_con}>
                <div className={styles.ideanix_logo} ref={main_logo_ref}>
                  <Image
                    style={{
                      top: logo_image_data.top,
                      position: logo_image_data.rendered ? "fixed" : "unset",
                      left: logo_image_data.left,
                      transform: `scale(${logo_image_data.scale})`,
                    }}
                    src="/logo_colored.webp"
                    alt=""
                    width={278.2}
                    height={114.4}
                  />
                </div>
              </div>
              {/* TODO:: Edit the content  */}
              <div className={cssClasses(styles.home_title, inter.className)}>
                Stage1. Stage2. Stage3.
              </div>
              <div className={cssClasses(styles.home_disc, inter.className)}>
                The IEEE Computer Society Student Branch Chapter of SLTC is
                proud to present for the first time in its history - Ideanix, a
                project aimed at empowering and inspiring the student community
                with innovative ideas. Ideanix is a platform that provides SLTC
              </div>
              <div className={styles.home_button_list}>
                <ActionButton text="Register Now" />
                <ActionButton text="Register Now" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
