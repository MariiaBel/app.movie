export type MediaType = 'movie' | 'tv'

export type CinemaType = MediaType | 'person'

export type DetailsData = {
    type: CinemaType,
    id: number
}