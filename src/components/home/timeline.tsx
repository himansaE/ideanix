import { cssClasses } from "@/lib/lib";
import { Inter, Lato } from "next/font/google";
import style from "./timeline.module.css";
import { ProjectDateInterface, project_timeline } from "@/lib/projectData";
import BallUnderText from "../anims/ballUnderText";
import { CSSProperties, useState } from "react";
const inter = Inter({ subsets: ["latin"], weight: ["600", "400"] });
const lato = Lato({ subsets: ["latin"], weight: "400" });

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
      <h1
        className={cssClasses("section-header", inter.className, style.title)}
      >
        Timeline <br /> of the
        <br /> Project
      </h1>
      <div className={style.back}></div>
      <div className={style.phrases_con}>
        <div className={style.img}>
          <BallUnderText text="Timeline" />
        </div>
        <div className={style.phrases_list}>
          {project_timeline.map((i) => (
            <div key={i.phrase} className={style.phrase}>
              <h1 className={cssClasses(style.phrase_head, inter.className)}>
                Prase {i.phrase} ({i.name})
              </h1>
              {i.dates.map((d) => (
                <div key={d.time + Math.random()}>
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

function DateChip({ data }: { data: ProjectDateInterface }) {
  const format_time_for_card = (_time: number) => {
    const today = new Date(_time);
    const dayOfMonth = String(today.getDate());
    const time = today.toLocaleTimeString("en-US", {
      hour12: true,
      timeStyle: "short",
    });
    return `${dayOfMonth.padStart(2)} ${today.toLocaleDateString("en-US", {
      weekday: "short",
    })}, ${time}`;
  };
  return (
    <div className={cssClasses(style.date_con, lato.className)}>
      <div className={style.date_date}>
        <div className={style.date_date_num}>
          {new Date(data.time).getDate()}
        </div>
        <div className={style.date_date_name}>
          {new Date(data.time)
            .toLocaleDateString("en-US", {
              weekday: "short",
            })
            .toUpperCase()}
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
