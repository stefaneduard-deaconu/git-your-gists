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
                    <li><a href="https://iconscout.com/icons/gist" target="_blank">Gist Icon</a> on <a href="https://iconscout.com">IconScout</a></li>
                    <li><a href="https://iconscout.com/icons/python" target="_blank">Python Icon</a> on <a href="https://iconscout.com">IconScout</a></li>

                    <a href="https://iconscout.com/icons/c" target="_blank">C Icon</a> on <a href="https://iconscout.com">IconScout</a>
                    <a href="https://iconscout.com/icons/c" target="_blank">C Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">IconScout</a>
                    <a href="https://iconscout.com/icons/csharp" target="_blank">Csharp Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">IconScout</a>
                    <a href="https://iconscout.com/icons/java" target="_blank">Java Icon</a> on <a href="https://iconscout.com">IconScout</a>
                    <a href="https://iconscout.com/icons/swift" target="_blank">Swift Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia</a>

                    <a href="https://iconscout.com/icons/javascript" target="_blank">Javascript Icon</a> on <a href="https://iconscout.com">IconScout</a>

                    <a href="https://iconscout.com/icons/css" target="_blank">Css Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">IconScout</a>
                    <a href="https://iconscout.com/icons/typescript" target="_blank">Typescript Icon</a> on <a href="https://iconscout.com">IconScout</a>
                    <a href="https://iconscout.com/icons/markdown" target="_blank">Markdown Icon</a> by <a href="https://iconscout.com/contributors/benjamin-j-sperry" target="_blank">Benjamin J Sperry</a>

                    <a href="https://iconscout.com/icons/go" target="_blank">Go Icon</a> by <a href="https://iconscout.com/contributors/jagathish" target="_blank">Jagathish Saravanan</a>





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