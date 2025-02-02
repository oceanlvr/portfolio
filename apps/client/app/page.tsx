import { Grid } from "@repo/ui/grid";
import styles from "./page.module.css";

export default function Home() {
  const layouts = {
    lg: [
      { i: "1", x: 0, y: 0, w: 2, h: 4 },
      { i: "2", x: 6, y: 0, w: 2, h: 4 },
      { i: "3", x: 0, y: 4, w: 2, h: 8 },
      { i: "4", x: 2, y: 4, w: 2, h: 8 },
    ],
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Grid layouts={layouts}>
          <div key={"1"} style={{ backgroundColor: "red" }}>
            1
          </div>
          <div key={"2"}>2</div>
          <div key={"3"}>3</div>
          <div key={"4"}>4</div>
        </Grid>
      </main>
    </div>
  );
}
