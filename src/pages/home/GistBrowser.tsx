import React, {useEffect, useState} from "react";

import {GistsAction, GistsState} from "../../reducers/gistsReducer";

import LoadingSpinner from "../../components/LoadingSpinner";

import styles from './GistBrowser.module.css'
import gistImg from '../../media/svg/gist.svg'
import {Octokit} from "@octokit/core";

import {GITHUB_PAT} from "../../config/private";
import {languageIconTable} from "../../config/public";
import {log} from "util";
import GistItem from "./GistItem";


export type PropsType = {
    appState: GistsState,
    dispatch: React.Dispatch<GistsAction>
}

const octokit = new Octokit({
    auth: GITHUB_PAT
})


const GistBrowser = ({appState, dispatch}: PropsType) => {

    // event handlers:

    useEffect(() => {
        if (appState.isLoading) {
            // try loading the users:

            octokit
                .request('GET /users/{username}/gists', {
                    username: appState.username
                })
                .then(res => {
                    console.log(res)
                    // dispatch for type LOADED_USER_GISTS if everything worked just fine
                    dispatch({
                        type: 'LOADED_USER_GISTS',
                        payload: res.data
                    })
                })
                .catch(err => {
                    // and dispatch the error text if it didn't:
                    dispatch({
                        type: 'LOAD_ERROR',
                        payload: err.toString()
                    })
                })

        }
    }, [appState.isLoading])

    return (
        <div className={styles.gistBrowser}>
            {
                !appState.isLoading ? (
                    <>
                        <div className={styles.gistState}>
                            {
                                appState.userGists == null ? (
                                    <>
                                        <h1>Gist</h1>
                                        <img src={gistImg} alt={'GitHub Gists Logo Icon'}/>
                                        <h3>Ready To Load Gists</h3>
                                    </>

                                ) : (
                                    <>
                                        {
                                            appState?.userGists?.map(
                                                (gist, index) => <GistItem
                                                    octokit={octokit}
                                                    key={index}
                                                    gist={gist}
                                                />
                                            )
                                        }

                                        {/*    <pre>*/}
                                        {/*     {JSON.stringify(appState.userGists, null, 4)}*/}
                                        {/*    </pre>*/}
                                    </>
                                )
                            }
                        </div>

                    </>
                ) : (
                    <>
                        <h3>Loading..</h3>

                        <LoadingSpinner size={64}/>
                    </>
                )
            }
        </div>
    )
}

export default GistBrowser;