export interface ResponseData<ResponseType> {
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

export interface PersonResult {
    biography: string,
    birthday: string | null,
    known_for_department: string,
    also_known_as: string[]
}

// QUESTION: How to make a new interface, which will have PersonResult interface OR MediaResult interface
// export interface CinemaModelType