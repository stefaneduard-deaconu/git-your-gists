import React from 'react';

import styles from './App.module.css';
import {Link} from "react-router-dom";

function App() {

    return (
        <>
            <nav className={styles.nav}>
                <Link to={'/'}>Git Your Gists</Link>
            </nav>

            <main className={styles.main}>
                {/* TODO implement the features here:*/}
                <h1>Features on their way!</h1>
            </main>

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
        </>
    );
}

export default App;
