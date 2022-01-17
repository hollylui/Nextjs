import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WeDev</span>News
      </h1>
      <p className={styles.description}>
        Keep up to date with the latest web dev news
      </p>
      {/* <style jsx>{`
        .title {
          color: red;
        }
      `}</style> */}
    </div>
  );
};

export default Header;
