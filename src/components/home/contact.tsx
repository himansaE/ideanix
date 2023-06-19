import { inter, montserrat } from "@/lib/fonts";
import { cssClasses } from "@/lib/lib";
import React from "react";
import style from "./contact.module.css";
import Image from "next/image";
import { RoundIconButton } from "../elements/buttons";

export default function Contact() {
  return (
    <>
      <h2
        className={cssClasses(
          "section-header",
          style.header,
          style.real_header,
          inter.className
        )}
      >
        Contact Us
      </h2>
      <div className={style.split}>
        <div className={style.sec1}>
          <h2
            className={cssClasses(
              "section-header",
              style.fake_header,
              inter.className
            )}
            aria-hidden
          >
            Contact Us
          </h2>
          <Image
            src="/ieee_cs_logo.png"
            alt="IEEE cs logo of SLTC"
            width={235.9}
            height={100}
          />
          <h3 className={montserrat.className}>
            We Are The Home For Computer Science And Engineering Leaders
          </h3>
          <p className={montserrat.className}>
            The IEEE Computer Society is the premier source for information,
            inspiration, and collaboration in computer science and engineering.
            Connecting members worldwide, the Computer Society empowers the
            people who advance technology by delivering tools for individuals at
            all stages of their professional careers.
          </p>
        </div>
        <div className={style.sec2}>
          {heads_list.map((i) => (
            <ContactCard key={i.name} props={i} />
          ))}
        </div>
      </div>
    </>
  );
}

interface CartInterface {
  name: string;
  pos: string;
  phone: string;
  email: string;
}

const ContactCard = ({ props }: { props: CartInterface }) => {
  return (
    <div className={cssClasses(style.card, montserrat.className)}>
      <div className={style.card_row}>
        <Image
          src={`/images/heads/${props.name}.webp`}
          alt={`Image - ${props.name}`}
          height={180}
          width={180}
          className={style.card_img}
        />
        <div className={style.card_name_box}>
          <div className={style.card_name}>{props.name}</div>
          <div className={style.card_pos}>{props.pos}</div>
        </div>
      </div>
      <div className={style.card_btn_row}>
        <RoundIconButton
          title="Phone"
          href={`tel:0${props.phone}`}
          d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2Z"
        />
        <RoundIconButton
          title="Whatsapp"
          href={`https://api.whatsapp.com/send?phone=94${props.phone}`}
          d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
        />
        <RoundIconButton
          title="Email"
          href={`mailto:${props.email}`}
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v9c0 .55-.45 1-1 1zm-7-7L4 6h16l-8 5z"
        />
      </div>
    </div>
  );
};

const heads_list: CartInterface[] = [
  {
    name: "Saketha Pulasthi",
    pos: "Student Advisor - IEEE CS of SLTC",
    phone: "711651919",
    email: "sakethap@sltc.ac.lk",
  },
  {
    name: "Sasindu Lakshan",
    pos: "Chairmen - IEEE CS of SLTC",
    phone: "762889063",
    email: "sasindulakshan10@gmail.com",
  },
  {
    name: "Sasanka Rajapaksha",
    pos: "Co-Chairmen of IdeaniX",
    phone: "761680437",
    email: "rvsp.sasanka@gmail.com",
  },
  {
    name: "Sheshan Hebron",
    pos: "Co-Chairmen of IdeaniX",
    phone: "769011104",
    email: "rvsp.sasanka@gmail.com",
  },
  {
    name: "Vayoni Thathsarani",
    pos: "Secretary of IdeaniX",
    phone: "705896939",
    email: "vayonithathsarani2770@gmail.com",
  },
];
