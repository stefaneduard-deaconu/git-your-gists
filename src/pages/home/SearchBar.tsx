import React, {useCallback} from "react";

import {GistsAction, GistsState} from "../../reducers/gistsReducer";

import LoadingSpinner from "../../components/LoadingSpinner";

import styles from './SearchBar.module.css'
import './SearchBar.css' // globals


export type PropsType = {
    appState: GistsState,
    dispatch: React.Dispatch<GistsAction>
}

const SearchBar = ({appState, dispatch}: PropsType) => {

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
        <form action="" className={styles.form}>
            <div className={styles.usernameInput}>
                <label htmlFor="username">Username</label>
                <input name={'username'} type="text"
                       onChange={updateUsername}
                       placeholder={'username..'}
                />
            </div>

            {
                <button type={"button"}
                        className={styles.btn}
                        onClick={loadGists}
                >
                    Load Gists
                </button>

            }

        </form>
    )
}

export default SearchBar;