import React, {useCallback, useEffect, useReducer} from 'react';

import styles from './App.module.css';
import {Link} from "react-router-dom";
import {Octokit} from "@octokit/core";


import gistsReducer, {defaultUserState} from "./reducers/gistsReducer";

// Octokit.js
import {GITHUB_PAT} from "./config";
const octokit = new Octokit({
    auth: GITHUB_PAT
})


const App = () => {

    let [appState, dispatch] = useReducer(gistsReducer, defaultUserState);

    useEffect(() => {
        if (appState.isLoading) {
            // try loading the users:

            // // dispatch for type LOADED_USER_GISTS if everything worked just fine
            // dispatch({
            //     type: 'LOADED_USER_GISTS'
            // })
            // // and dispatch the error text if it didn't:
            // dispatch({
            //     type: 'LOAD_ERROR',
            //     payload: 'TODO ERROR TEXT'
            // })

        }
    }, [appState.isLoading])

    // event handlers:

    const updateUsername = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "UPDATE_USERNAME",
            payload: e.target.value
        })
    }, [])
    const loadGists = useCallback((_: React.MouseEvent<HTMLButtonElement>) => {
        dispatch({
            type: 'LOAD_USER_GISTS'  // will trigger the first useEffect call, and the gists will be loaded, depending on the username's correctness
        })
    }, [])

    return (
        <>
            <nav className={styles.nav}>
                <Link to={'/'}>Git Your Gists</Link>
            </nav>

            <main className={styles.main}>

                <form action="">
                    <label htmlFor="username">Username:</label>
                    <input name={'username'} type="text"
                           onChange={updateUsername}
                    />

                    <button type={"button"}
                            onClick={loadGists}
                    >
                        Load Gists
                    </button>
                </form>

                {/*TODO add component used for listing GitHub Gists */}

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
