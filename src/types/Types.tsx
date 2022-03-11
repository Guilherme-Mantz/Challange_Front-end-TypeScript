export type FilmData = {
    genres: Array<{id: number, name:string}>
    id: number
    original_language: string
    overview: string
    poster_path: string
    release_date: string
    runtime: number
    title: string
};

/* Créditos e atores */
export type Actor = {
    character: string
    id: number
    name: string
    original_name: string
    profile_path: string
};

export type CreditData = {
    id: number
    cast: Array<Actor>
};

/* Trailers */
export type VideoData = {
    id: number
    results: Array<{key: string}>
}
