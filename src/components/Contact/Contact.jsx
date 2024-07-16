import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Well Hi!</h2>
        <p>Here are my Social and Coding profiles.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          
          <a href="mailto:jyotiprakashnath13@gmail.com" target="_blank">
          <img src={getImageUrl("contact/gmail.png")} alt="Email icon" />
          <h4>Gmail</h4>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/jyotiprakash-nath-62a946224/" target="_blank">
          <img
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          <h4>Linkedin</h4>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Jyotiprakash-Nath" target="_blank">
          <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          <h4>Github</h4>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://codeforces.com/profile/immortal_alloy" target="_blank">
          <img src={getImageUrl("contact/cf.png")} alt="Codeforces icon" />
          <h4>Codeforces</h4>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://leetcode.com/u/immortal_alloy/" target="_blank">
          <img src={getImageUrl("contact/leetcode.png")} alt="Leetcode icon" />
          <h4>Leetcode</h4>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.facebook.com/jyotiprakash.nath.37" target="_blank">
          <img src={getImageUrl("contact/fb.png")} alt="Fb icon" />
          <h4>Facebook</h4>
          </a>
        </li>
       
      </ul>
    </footer>
  );
};
