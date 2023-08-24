import { cssClasses } from "@/lib/lib";
import style from "./sponsor.module.css";
import { inter, montserrat } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Sponsor() {
  return (
    <div className={style.con}>
      <h2 className={cssClasses(style.head, "section-header", inter.className)}>
        Our Sponsors
      </h2>

      <div className={style.title_sponsor}>
        <h3 className={cssClasses(style.title_title, montserrat.className)}>
          Title Sponsor
        </h3>
        <Image
          className={style.title_banner}
          src={"/images/sponsor/title sponsor.webp"}
          width={600}
          height={222.09}
          alt="title sponsor banner"
          quality={100}
        />
        <p className={cssClasses(style.title_des, montserrat.className)}>
          Aqcellor is a knowledge platform developed to fast track the growth of
          start-ups by transforming them into businesses that can be invested
          in. We assist early-stage founders to rapidly scale their companies by
          providing an unmatched level of support to those selected into our
          Entrepreneurship program.
        </p>
        <div className={cssClasses(montserrat.className, style.title_link)}>
          <Link
            href="https://aqcellor.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z"
              ></path>
            </svg>{" "}
            Visit aqcellor website
          </Link>
        </div>
      </div>
      <div className={style.grid}>
        <div className={style.sponsors}></div>
        <div className={style.get_sponsor}></div>
      </div>
    </div>
  );
}
