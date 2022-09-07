import React, {useCallback, useEffect, useReducer} from 'react';

import styles from './Home.module.css';
import {Octokit} from "@octokit/core";


import gistsReducer, {defaultUserState} from "../../reducers/gistsReducer";

// Octokit.js
import {GITHUB_PAT} from "../../config";
import SearchBar from "./SearchBar";

const octokit = new Octokit({
    auth: GITHUB_PAT
})


const Home = () => {

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



    return (
        <div className={styles.home}>
            <SearchBar  appState={appState} dispatch={dispatch}/>

            {/*TODO add component used for listing GitHub Gists, which also use  appState  and  dispatch  */}

        </div>
    );
}

export default Home;
