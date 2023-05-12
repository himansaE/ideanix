import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import BlurSquare from "../anims/blurSquare";
import { cssClasses, joinObject } from "@/lib/lib";
import { ProjectTitles, project_titles } from "@/lib/projectData";
import { ActionButton } from "../elements/buttons";
import { NavLogoType } from "../navbar/navbar";
import { Inter } from "next/font/google";
import styles from "./home.module.css";

interface LogoImagePosData {
  rendered?: boolean;
  left: number;
  top: number;
  width: number;
  height: number;
  scale?: number;
}
const inter = Inter({ subsets: ["latin"], weight: ["800", "400"] });

export default function Home({
  setNavLogoType,
}: {
  setNavLogoType: Dispatch<SetStateAction<NavLogoType>>;
}) {
  const [site_project_stage, setSiteProjectStage] = useState(
    ProjectTitles.ideathon
  );
  const [page_scroll, setPageScroll] = useState(0);

  // eslint-disable-next-line no-unused-vars
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

  // TODO:: use requestAnimationFrame
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

  useEffect(() => {
    const timer = setInterval(() => {
      if (site_project_stage + 1 < project_titles.length) {
        setSiteProjectStage((prevNum) => prevNum + 1);
      } else {
        setSiteProjectStage(0);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [site_project_stage]);

  // called on scroll
  //FIXME:: use requestAnimationFrame and remove setSates from callback
  const handleScroll = () => {
    // handle shrinkable logo
    if (!main_logo_ref.current) return;

    setPageScroll(window.pageYOffset);

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
      <div className={styles.background}>
        <div className={styles.phoenix_img}></div>
        <BlurSquare />
      </div>
      <div className={styles.content_con}>
        <div className={styles.content}>
          <div className={styles.ideanix_logo_con}>
            <div className={styles.ideanix_logo} ref={main_logo_ref}>
              <Image
                style={{
                  opacity: logo_image_data.rendered ? 1 : 0,
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

          <div className={cssClasses(styles.home_title, inter.className)}>
            {project_titles.map((project_title) => (
              <div
                key={project_title.heading}
                className={
                  site_project_stage ==
                  (project_title.enum as unknown as ProjectTitles)
                    ? styles.home_title_selected
                    : ""
                }
                style={
                  {
                    "--color-one": project_title.start_color,
                    "--color-two": project_title.end_color,
                  } as React.CSSProperties
                }
              >
                {project_title.heading}
              </div>
            ))}
          </div>
          <div className={cssClasses(styles.home_disc, inter.className)}>
            IdeaniX is a transformative program that empowers university
            students with the knowledge, skills, and guidance to excel in the IT
            and entrepreneurship fields. Through a series of events and
            competitions, students explore their creative potential, gain
            industry insights, and turn their innovative ideas into reality.
          </div>
          <div className={styles.home_button_list}>
            <ActionButton
              text="Register Now"
              action={() => console.log("bhi")}
            />
            <ActionButton text="Watch Intro " invert />
          </div>
        </div>
      </div>
    </>
  );
}
