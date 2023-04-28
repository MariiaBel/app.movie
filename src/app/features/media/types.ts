export interface MediaDataList<ResponseType> {
    page: number,
    total_pages: number,
    results: ResponseType[]
}

export interface MediaResult {
    id: number,
    original_title: string,
    overview: string,
    poster_path: string,
    vote_average: number
}

export type MediaType = 'movie' | 'tv'

export type DetailsMediaData = {
    type: MediaType,
    id: number
}