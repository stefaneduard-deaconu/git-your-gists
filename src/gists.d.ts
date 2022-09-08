type GistFile = {
    filename: string,
    type: string,
    language: string,
    raw_url: string,
    size: number,
    fileContent?: string // I added it myself and I'll use it to store the raw text after reading it from the url
}

type Files = Mapped<string, GistFile>

type Owner = {
    login: string
}

type Gist = {
    url: string,
    forks_url: string,
    description?: string | null,
    files: Files,
    owner?: Owner
}

type Fork = {
    owner: {
        login: string, // github username
        avatar_url: string, // link to user's avatar or profile picture
        url: string // link to the user's gist profile
    }
}

