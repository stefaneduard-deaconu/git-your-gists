import styles from "./Footer.module.css";
import React from "react";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.headline}>
                Everyday is the right day for one more mental victory - &copy; Ștefan - 2022
            </div>
            <div className={styles.column}>
                Resources used in building this site:
                <ul>
                    <li><a href="https://www.flaticon.com/free-icons/notepad" title="notepad icons">Notepad icons
                        created by Smashicons - Flaticon</a></li>
                </ul>
            </div>
            <div className={styles.column}>
                Extras:
                <ul>
                    {/*<li><a href="https://www.flaticon.com/free-icons/notepad" title="notepad icons">Notepad icons*/}
                    {/*    created by Smashicons - Flaticon</a></li>*/}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;