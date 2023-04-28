export interface PersonResult {
    biography: string,
    birthday: string | null,
    known_for_department: string,
    also_known_as: string[]
}

export type PersonType = 'person'

export type DetailsPersonData = {
    type: PersonType,
    id: number
}