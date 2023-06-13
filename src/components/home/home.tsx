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
import { ActionButton, LinkButton } from "../elements/buttons";
import { NavLogoType } from "../navbar/navbar";
import { Inter, Montserrat } from "next/font/google";
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
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

const getNumberBasedOnDeviceWidth = (deviceWidth: number): number =>
  deviceWidth >= 1500
    ? 1
    : deviceWidth >= 600
    ? 2
    : deviceWidth >= 500
    ? 6
    : deviceWidth >= 300
    ? 12
    : 1;

export default function Home({
  setNavLogoType,
}: {
  setNavLogoType: Dispatch<SetStateAction<NavLogoType>>;
}) {
  const [site_project_stage, setSiteProjectStage] = useState(
    ProjectTitles.ideathon
  );

  // eslint-disable-next-line no-unused-vars
  const [isMounted] = useState(true);

  // use for logo shrinking
  const main_logo_ref = useRef<HTMLDivElement>(null);
  const logo_ref = useRef<HTMLImageElement>(null);
  const animation_ref = useRef<number | null>(null);
  const nav_img_pos: LogoImagePosData = {
    left: 20,
    top: 10,
    width: 110,
    height: 40,
    scale: 0.4,
  };

  const logo_image_data = nav_img_pos;

  useEffect(() => {
    if (window) {
      (window as any).x = getNumberBasedOnDeviceWidth;
    }
    if (isMounted) {
      handleScroll();
      logo_image_data.rendered = true;
    }
    return () => {
      if (animation_ref.current) {
        cancelAnimationFrame(animation_ref.current);
      }
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
    }, 4000);
    return () => clearInterval(timer);
  }, [site_project_stage]);

  const handleScroll = () => {
    // handle shrinkable logo
    if (!main_logo_ref.current || !logo_ref.current)
      return (animation_ref.current = requestAnimationFrame(handleScroll));

    const main_logo_pos = main_logo_ref.current.getBoundingClientRect();

    // place logo on top
    if (main_logo_pos.top <= nav_img_pos.top) {
      logo_ref.current.style.opacity = logo_image_data.rendered ? "1" : "0";
      logo_ref.current.style.top = nav_img_pos.top + "px";
      logo_ref.current.style.position = logo_image_data.rendered
        ? "fixed"
        : "unset";
      logo_ref.current.style.left = nav_img_pos.left + "px";
      logo_ref.current.style.transform = `scale(${nav_img_pos.scale})`;
    }

    // change the visibility of nav logo  -- - 20 is padding
    if (main_logo_pos.top <= nav_img_pos.height + 20)
      setNavLogoType(NavLogoType._NONE);
    else setNavLogoType(NavLogoType._IEEE);

    // don't need to calculate logo is not visitable
    if (main_logo_pos.top <= nav_img_pos.top)
      return (animation_ref.current = requestAnimationFrame(handleScroll));

    const distance_y = main_logo_pos.top - nav_img_pos.top;
    const scale =
      0.4 +
      distance_y /
        Math.abs(main_logo_pos.left - nav_img_pos.left) /
        getNumberBasedOnDeviceWidth(window.innerWidth);

    logo_ref.current.style.opacity = logo_image_data.rendered ? "1" : "0";
    logo_ref.current.style.top =
      Math.max(main_logo_pos.y, nav_img_pos.top) + "px";
    logo_ref.current.style.position = logo_image_data.rendered
      ? "fixed"
      : "unset";
    logo_ref.current.style.left =
      Math.min(
        Math.max(nav_img_pos.left, distance_y * 1.78 + 20),
        main_logo_pos.left
      ) + "px";
    logo_ref.current.style.transform = `scale(${Math.min(scale, 1)})`;

    animation_ref.current = requestAnimationFrame(handleScroll);
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
                ref={logo_ref}
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
          <div className={cssClasses(styles.home_disc, montserrat.className)}>
            Embark on a transformative journey with IdeaniX, where participants
            are guided by industry experts, unleash their creativity, and turn
            ideas into reality. Experience enlightening sessions, exhilarating
            challenges, and thrilling transformations. Expand horizons, foster
            innovation, and realize your full potential in the realms of IT and
            entrepreneurship.
          </div>
          <div className={styles.home_button_list}>
            <LinkButton text="Register Now" link="/register" />
            <ActionButton text="Watch Intro " invert />
          </div>
        </div>
      </div>
    </>
  );
}
