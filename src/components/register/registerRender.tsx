import { RegisterSubPageProps, register_form_data } from "./registerData";
import styles from "./register.module.css";

export default function RegisterFormRender(props: RegisterSubPageProps) {
  return (
    <div className={styles.form}>
      <div className={styles.form_con}>
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
                  button_click={props.button_click}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
