export type ActionChangeUsername = {
    type: 'UPDATE_USERNAME',
    payload: string
}
export type ActionLoadUserGists = {
    type: 'LOAD_USER_GISTS'
}
export type ActionLoadError = {
    type: 'LOAD_ERROR',
    payload: string // a text with the error TODO may use an object with error type and error message
}
export type ActionLoadedUserGists = {
    type: 'LOADED_USER_GISTS',
    payload: Gist[]
}
export type ActionLoadInterrupt = {
    type: 'LOAD_INTERRUPT'
}

export type GistsState = {
    username: string
    isLoading: boolean,
    loadError?: string,
    userGists?: Gist[]
}
export const defaultUserState = {
    username: '',
    isLoading: false
}

export type GistsAction =
    | ActionChangeUsername
    | ActionLoadUserGists
    | ActionLoadedUserGists
    | ActionLoadError
    | ActionLoadInterrupt

export default function gistsReducer(state: GistsState, action: GistsAction): GistsState {
    switch (action.type) {
        case 'UPDATE_USERNAME':
            return {...state, username: action.payload};
        case 'LOAD_USER_GISTS':
            return {...state, isLoading: true};
        case 'LOAD_ERROR':
            return {...state, userGists: [], loadError: action.payload, isLoading: false}
        case 'LOADED_USER_GISTS':
            return {...state, userGists: action.payload, isLoading: false}
        default:
            return state;
    }
}

export {}
