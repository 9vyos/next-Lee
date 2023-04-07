import styles from "./page.module.css";
import Grid from "./Ui/GridList";
import Tables from "./Ui/Tables";

export default function Main() {
  return (
    <div className={styles.main_wrap}>
      <Grid />
      <Tables />
    </div>
  );
}
