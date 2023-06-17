import { cssClasses } from "@/lib/lib";
import style from "./timeline.module.css";
import { ProjectDateInterface, project_timeline } from "@/lib/projectData";
import BallUnderText from "../anims/ballUnderText";
import { CSSProperties, useState } from "react";
import { inter, lato } from "@/lib/fonts";
import Image from "next/image";

export default function Timeline() {
  const [mouse_pos, setMousePos] = useState({
    x: -1121,
    y: -12212,
    hidden: true,
  });
  return (
    <div
      className={style.con}
      onMouseMove={(e) => {
        setMousePos({
          x: e.clientX,
          y: e.clientY,
          hidden: false,
        });
      }}
      onMouseLeave={() => {
        setMousePos({
          x: -1220,
          y: -1220,
          hidden: true,
        });
      }}
      onMouseEnter={(e) => {
        setMousePos({
          x: e.clientX,
          y: e.clientY,
          hidden: false,
        });
      }}
      style={
        {
          "--m-x": mouse_pos.x + "px",
          "--m-y": mouse_pos.y + "px",
          "--m-o": mouse_pos.hidden ? 0 : 1,
        } as CSSProperties
      }
    >
      <h2 className={cssClasses(style.title_mob, inter.className)}>
        Project Timeline
      </h2>
      <div className={style.heading}>
        <h2
          className={cssClasses("section-header", inter.className, style.title)}
        >
          Timeline <br /> of the <br /> Project
        </h2>
        <Image
          className={style.back_img}
          src="/images/god.png"
          alt=""
          height={746}
          width={566}
        />
      </div>
      <div className={style.back}></div>
      <div className={style.phrases_con}>
        <div className={style.img}>
          <BallUnderText />
        </div>
        <div className={style.phrases_list}>
          {project_timeline.map((i) => (
            <div key={i.phrase} className={style.phrase}>
              <h1 className={cssClasses(style.phrase_head, inter.className)}>
                Phase {i.phrase} ({i.name})
              </h1>
              {i.dates.map((d, i) => (
                <div key={i}>
                  <DateChip data={d} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Chip({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) {
  return (
    <div className={cssClasses(style.chip_con, lato.className)}>
      <div className={style.chip}>
        <div className={style.chip_title}>{title}</div>
        <div className={style.chip_des}>{description}</div>
      </div>
      <div className={style.chip_date}>{date}</div>
    </div>
  );
}

const format_time_for_card = (_time: number) => {
  const today = new Date(_time);
  const dayOfMonth = String(today.getDate());

  return `${dayOfMonth.padStart(2)} ${today.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })}`;
};

function DateChip({ data }: { data: ProjectDateInterface }) {
  return (
    <div className={cssClasses(style.date_con, lato.className)}>
      <div className={style.date_date}>
        <div className={style.date_date_name}>
          {new Date(data.time)
            .toLocaleDateString("en-US", {
              month: "short",
            })
            .toUpperCase()}
        </div>
        <div className={style.date_date_num}>
          {("0" + new Date(data.time).getDate()).slice(-2)}
        </div>
      </div>
      <div className={style.date_line}></div>
      <div className={style.date_chip}>
        {data.items.map((i) => (
          <Chip
            key={i.name}
            title={i.name}
            description={i.des}
            date={format_time_for_card(data.time)}
          />
        ))}
      </div>
    </div>
  );
}
