import {languageIconTable} from "../../config/public";
import React, {useEffect, useState} from "react";

import styles from './GistItem.module.css'
import {Octokit} from "@octokit/core";

type IProps = {
    gist: Gist,
    octokit: Octokit
}

const GistItem = ({gist}: IProps) => {

    let username = gist.owner?.login;

    let gistFiles = (Object.values(gist?.files) as GistFile[])
    let filenames = gistFiles?.map(
        (file) => file.filename
    )

    let firstFilename = filenames?.length > 0 ? filenames[0] : '[NO FILES ATTACHED]';

    // SOLVED for requirements Filetypes:
    // list all different filetypes:
    let filetypes = gistFiles?.map(file => file.language);
    let uniqueLanguages = [...new Set(filetypes)]
    // badge dictionary:
    let badges = uniqueLanguages.map((lang, index) => {
        if (languageIconTable.has(lang)) {
            let url = languageIconTable.get(lang);
            return <><img key={index} src={url} alt={url}/>, </>
        } else {
            return <b key={index}>{lang}, </b>
        }
    })

    // SOLVE requirements Forks
    //                    -----
    const [forks, setForks] = useState<Fork[]>([]);
    useEffect(() => {
        if (gist.forks_url) {
            fetch(gist.forks_url)
                .then(req => req.json())
                .then(json => {
                    console.log('read forks:', json as Fork[])
                    setForks(json as Fork[])
                })
                .catch(err => console.log(err))
        } else {
            setForks([])
        }
    }, [gist.forks_url])

    // SOLVE THE LAST requirement -> expand the content of the gist file on click
    // BONUS TODO for myself: also list comments..

    const [expanded, setExpanded] = useState(false);
    const [files, setFiles] = useState(gistFiles)

    // on loading the files for the first time, we fetch their content
    const hasReadAllGistFiles = (files: GistFile[]) => {
        for (const file of files) {
            if (file.fileContent == undefined) {
                return false;
            }
        }
        return true;
    }
    useEffect(() => {
            if (!hasReadAllGistFiles(files)) {
                let i = 0;
                for (const file of files) {
                    let index = i;
                    fetch(file.raw_url)
                        .then(req => req.text())
                        .then(resText => {
                            let newFiles: GistFile[] = files
                                .map((file, idx) => (idx == index)
                                    ? {...file, fileContent: resText}
                                    : file
                                )
                            console.log('reading files\' content:', newFiles)
                            setFiles(newFiles)
                        })
                        .catch(err => console.log(err))
                }
            }
        }, [files]
    )

    return (
        <div className={styles.gist}>
            <div className={styles.header}>
                <div className={styles.gistName}>
                    <a href={`https://gist.github.com/${username}`}>{username}</a> / <a
                    href={gist.url}>{firstFilename}</a>
                </div>

                <div className={styles.fileTypes}>
                    {badges?.length > 0 ?
                        <div className={styles.languages}>
                            <span>Languages: </span>
                            {
                                badges
                            }
                        </div> :
                        <h5>No Files Found</h5>
                    }
                </div>
                <div className={styles.forks}>
                    {forks?.length > 0 ?
                        <>
                            <h5>Forked By {forks.length} People: </h5>
                            {
                                forks.map((fork, forkIndex) => <img key={forkIndex} src={fork.owner.avatar_url}
                                                                    alt={`Github avatar for user ${fork.owner.login}`}/>)
                            }
                        </> :
                        <h5>No Forks Found</h5>
                    }
                </div>
            </div>
            <div className="content">

            </div>
        </div>
    )
}

export default GistItem;