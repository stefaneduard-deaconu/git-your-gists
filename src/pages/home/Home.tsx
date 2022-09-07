import React, {useCallback, useEffect, useReducer} from 'react';

import styles from './Home.module.css';
import {Octokit} from "@octokit/core";


import gistsReducer, {defaultUserState} from "../../reducers/gistsReducer";

// Octokit.js
import {GITHUB_PAT} from "../../config";
import SearchBar from "./SearchBar";
import GistBrowser from "./GistBrowser";



const Home = () => {

    let [appState, dispatch] = useReducer(gistsReducer, defaultUserState);


    return (
        <div className={styles.home}>
            <SearchBar appState={appState} dispatch={dispatch}/>

            {/*TODO add component used for listing GitHub Gists, which also use  appState  and  dispatch  */}
            <GistBrowser appState={appState} dispatch={dispatch}/>
        </div>
    );
}

export default Home;
