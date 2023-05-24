import style from "./ballUnderText.module.css";

export default function BallUnderText({ text }: { text: string }) {
  return (
    <div className={style.con}>
      <div className={style.ball}></div>
      <div className={style.text}>
        {text.split("").map((i, n) => (
          <span key={n}>{i}</span>
        ))}
      </div>
    </div>
  );
}
