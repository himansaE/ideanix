import { cssClasses } from "@/lib/lib";
import { Inter, Lato } from "next/font/google";
import style from "./timeline.module.css";
import { ProjectDateInterface, project_timeline } from "@/lib/projectData";
const inter = Inter({ subsets: ["latin"], weight: ["600", "400"] });
const lato = Lato({ subsets: ["latin"], weight: "400" });

export default function Timeline() {
  return (
    <>
      <h1 className={cssClasses("section-header", inter.className)}>
        Timeline of the Project
      </h1>
      <DateChip data={project_timeline[0].dates[0]} />
    </>
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
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            date={format_time_for_card(data.time)}
          />
        ))}
      </div>
    </div>
  );
}
