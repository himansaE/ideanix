import { inter } from "@/lib/fonts";
import { RulesText } from "../register/steps/rules";
import style from "./rules.module.css";
import { cssClasses } from "@/lib/lib";
import { Collapse } from "@mui/material";
import ShowMore from "../elements/show_more";
import { useState } from "react";
export default function Rules() {
  const [collapse_state, setCollapseState] = useState(false);
  return (
    <div className={style.con}>
      <h2 className={cssClasses(style.head, "section-header", inter.className)}>
        Rules and Regulations
      </h2>
      <div className={cssClasses(style.text, collapse_state ? style.open : "")}>
        <Collapse collapsedSize={"calc(100vh - 50px)"} in={collapse_state}>
          <RulesText />
        </Collapse>
        <div className={style.button}>
          <div className={style.shadow}></div>
          <ShowMore
            open={collapse_state}
            onClick={() => setCollapseState((i) => !i)}
            bg="#150f1e"
          />
        </div>
      </div>
    </div>
  );
}
