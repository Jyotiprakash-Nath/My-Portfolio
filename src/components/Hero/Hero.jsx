import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jyotiprakash</h1>
        <p className={styles.description}>
        A focused and enthusiastic developer with a keen interest in software development and problem solving.
        </p>
        <a href="https://drive.google.com/file/d/1QYuanzUS-g2gvm51GD_MEaKiM2LwR0jH/view?usp=sharing" className={styles.contactBtn} target="_blank">
          Resume
        </a>
        
      </div>
      <img
        src={getImageUrl("hero/image.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
