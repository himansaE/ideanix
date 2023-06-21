import { cssClasses } from "@/lib/lib";
import style from "./overview.module.css";
import { inter, lato, montserrat } from "@/lib/fonts";
import Image from "next/image";
export default function Overview() {
  return (
    <div className={style.con}>
      <div className={style.title_con}>
        <h1
          className={cssClasses(inter.className, "section-header", style.title)}
        >
          Insights of IdeaniX
        </h1>
      </div>
      <div className={style.con_item_content}>
        {card_data.map((i) => (
          <div key={i.title} className={style.card_i}>
            <Card data={i} />
          </div>
        ))}
      </div>

      <div className={style.con_item_bg}>
        <div className={style.image}>
          <Image
            src={"/letter-bg.webp"}
            alt=""
            width={800}
            height={1000}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

const Card = ({ data }: { data: CardDataInf }) => (
  <div className={style.card} style={{ backgroundColor: data.bg }}>
    <div className={style.card_title} style={{ color: data.title_color }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22px"
        height="22px"
        viewBox="0 0 16 16"
      >
        <path fill="currentColor" d={data.d}></path>
      </svg>

      <div className={cssClasses(style.text, lato.className)}>{data.title}</div>
    </div>
    <div
      className={cssClasses(style.des, montserrat.className)}
      style={{ color: data.text_color }}
    >
      {data.des}
    </div>
  </div>
);
interface CardDataInf {
  title: string;
  des: string;
  d: string;
  bg: string;
  text_color: string;
  title_color: string;
}

const card_data: CardDataInf[] = [
  {
    title: "What is IdeaniX?",
    des: "IdeaniX is an innovative program designed to empower undergraduates by providing them with the knowledge, skills, and resources necessary to turn their ideas into real-world products and startups.",
    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25c.09-.656.54-1.134 1.342-1.134c.686 0 1.314.343 1.314 1.168c0 .635-.374.927-.965 1.371c-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486c.609-.463 1.244-.977 1.244-2.056c0-1.511-1.276-2.241-2.673-2.241c-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927c0-.552-.42-.94-1.029-.94c-.584 0-1.009.388-1.009.94c0 .533.425.927 1.01.927z",
    bg: "#0d0f0e",
    text_color: "#f0ffeb",
    title_color: "#74d497",
  },
  {
    title: "Who is this program for?",
    des: "IdeaniX is a program created especially for SLTC undergraduates who love coming up with new ideas, using technology, and starting their own businesses. No matter what degree you're studying, if you're excited to explore your creativity and bring your ideas to life, IdeaniX is for you!",
    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25c.09-.656.54-1.134 1.342-1.134c.686 0 1.314.343 1.314 1.168c0 .635-.374.927-.965 1.371c-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486c.609-.463 1.244-.977 1.244-2.056c0-1.511-1.276-2.241-2.673-2.241c-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927c0-.552-.42-.94-1.029-.94c-.584 0-1.009.388-1.009.94c0 .533.425.927 1.01.927z",
    bg: "#0d0f0e",
    text_color: "#f0ffeb",
    title_color: "#74d497",
  },
  {
    title: "What are the benefits of participating?",
    des: "Students will gain valuable insights by learn problem-solving techniques, and understand the key aspects of entrepreneurship. They will also have the chance to pitch their ideas to a panel of judges, develop them into a real-world product, and win cash prizes.",
    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25c.09-.656.54-1.134 1.342-1.134c.686 0 1.314.343 1.314 1.168c0 .635-.374.927-.965 1.371c-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486c.609-.463 1.244-.977 1.244-2.056c0-1.511-1.276-2.241-2.673-2.241c-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927c0-.552-.42-.94-1.029-.94c-.584 0-1.009.388-1.009.94c0 .533.425.927 1.01.927z",
    bg: "#0d0f0e",
    text_color: "#f0ffeb",
    title_color: "#74d497",
  },
  {
    title: "What can you develop?",
    des: "Throughout IdeaniX, participants will have the chance to develop their ideas into viable business plans and fully functional products. They will receive guidance and mentoring from industry professionals to refine their concepts, enhance their marketability, and create innovative solutions.",
    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25c.09-.656.54-1.134 1.342-1.134c.686 0 1.314.343 1.314 1.168c0 .635-.374.927-.965 1.371c-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486c.609-.463 1.244-.977 1.244-2.056c0-1.511-1.276-2.241-2.673-2.241c-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927c0-.552-.42-.94-1.029-.94c-.584 0-1.009.388-1.009.94c0 .533.425.927 1.01.927z",
    bg: "#0d0f0e",
    text_color: "#f0ffeb",
    title_color: "#74d497",
  },
];
