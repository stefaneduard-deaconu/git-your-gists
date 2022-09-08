import {languageIconTable} from "../../config/public";
import React, {useEffect, useState} from "react";

import styles from './GistItem.module.css'
import {Octokit} from "@octokit/core";


const loadFileAt = async (file: GistFile, index: number) => {
    // console.log(index, '->', file.raw_url)
    return new Promise<GistFile>((resolve, reject) => {
        fetch(file.raw_url)
            .then(req => req.text())
            .then(resText => {
                let newFile = {...file, fileContent: resText};
                // console.log(`read file ${index}'s content:`, newFile)
                resolve(newFile) // resolve will result in the new file
            })
            .catch(err => reject(err))
    })

}

const readContentForAllFiles = async (oldFiles: GistFile[]) => {

    return new Promise<GistFile[]>(async (res, rej) => {
        let newFiles = oldFiles;

        let i = 0;
        for (const file of oldFiles) {

            let newFile = await loadFileAt(file, i);
            if (newFile) {
                newFiles[i].fileContent = newFile?.fileContent;
            }
            i++;
        }

        return newFiles;
    })


}

type IProps = {
    keyIndex: number,
    gist: Gist,
    octokit: Octokit
}

const GistItem = ({keyIndex, octokit, gist}: IProps) => {

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
            return <span key={index}><img key={index} src={url} alt={url}/>, </span>
        } else {
            return <b key={index}>{lang}, </b>
        }
    })

    // SOLVE requirements Forks
    //                    -----
    const [forks, setForks] = useState<Fork[]>([]);
    useEffect(() => {
        if (gist.forks_url) {
            octokit
                .request(gist.forks_url)
                .then(res => setForks(res.data as Fork[]))
                .catch(err => console.log(err))
        } else {
            setForks([])
        }
    }, [gist.forks_url])

    // SOLVE THE LAST requirement -> expand the content of the gist file on click
    // BONUS TODO for myself: also list comments..

    const [expanded, setExpanded] = useState(false);
    const [files, setFiles] = useState(gistFiles)
    const [hasReadFiles, setHasReadFiles] = useState(false)



    useEffect(() => {
            if (!hasReadFiles) {
                let i = 0;
                readContentForAllFiles(files)
                    .then((res) => setFiles(res))
                setHasReadFiles(true)
            }
        }, []
    )

    return (
        <div key={keyIndex} className={styles.gist}>
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
                            <h5>Forked By {forks.length}: </h5>
                            {
                                forks.map((fork, forkIndex) => <a key={forkIndex} href={fork.owner.url}>
                                    <img src={fork.owner.avatar_url}
                                         alt={`Github avatar for user ${fork.owner.login}`}/>
                                </a>)
                            }
                        </> :
                        <h5>No Forks Found</h5>
                    }
                </div>
            </div>
            <div className={styles.content}

            >
                <h5>
                    Preview of {filenames[0]}
                    <button
                        onClick={() => setExpanded(!expanded)}
                    >
                        {!expanded ? 'Expand Gist Files' : 'Collapse Gist Files'}
                    </button>
                </h5>
                {
                    expanded ? (
                        files?.map((file, index) => {
                            return <div key={index} className={styles.code}>
                                <h3>Gist #{index}</h3>
                                <code>
                                    {file?.fileContent}
                                </code>
                            </div>
                        })
                    ) : (
                        <div className={styles.code}>
                            <code>
                                {files[0]?.fileContent?.slice(0, 300)}
                            </code>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default GistItem;