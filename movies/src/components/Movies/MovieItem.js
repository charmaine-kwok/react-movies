import styles from "./MovieItem.module.css";
// import DateAndLocation from "./MovieItem";

const MoviesItem = (props) => {
  return (
    <div className={styles["movie-item"]}>
      <img className={styles["movie-item-img"]} src={props.pic} alt="" />
      <div className={styles["movie-item-text-container"]}>
        <p className={styles["movie-title"]}>{props.title}</p>
        <p className={styles["movie-desc"]}>{props.desc}</p>
      </div>
      {/* <DateAndLocation location={props.location} date={props.date} /> */}
      <div className={styles["movie-location-date-container"]}>
        <div className={styles["movie-location"]}>
          <p>{props.location}</p>
        </div>
        <div className={styles["movie-date"]}>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviesItem;
