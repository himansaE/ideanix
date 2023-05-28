import { Montserrat } from "next/font/google";
import { RegisterSubPageProps, register_form_data } from "./registerData";
import styles from "./register.module.css";
const montserrat = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin"],
});
export default function RegisterFormRender(props: RegisterSubPageProps) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={montserrat.className}>
      <div className={styles.form}>
        {register_form_data.map((i) => {
          const Elem = i.elem;
          return (
            <div
              key={i.i}
              style={{ display: i.i == props.index + 1 ? "block" : "none" }}
              className={styles.sub_con}
            >
              <div className={styles.sub}>
                <Elem
                  index={props.index}
                  setLastStateComplete={props.setLastStateComplete}
                  is_rendered={i.i == props.index + 1}
                />
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
}
