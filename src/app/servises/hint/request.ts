import { forkJoin, mergeMap, Observable, of, take, tap } from "rxjs"
import { MediaData, MediaType } from "../model/type-data"


export function mergeRequest<RequestResult>(dataList: MediaData[], requestFn: Function): Observable<RequestResult[]> {
    return forkJoin<RequestResult[]>(...dataList.map(data => requestFn(data)))
  }