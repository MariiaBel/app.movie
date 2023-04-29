export function concatResponses<MediaRes>(data: MediaRes[][]): MediaRes[] {
    return data.reduce((res, cur) => res.concat(...cur), [])
}