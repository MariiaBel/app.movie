import { forkJoin, mergeMap, Observable, of, take, tap } from "rxjs"
import { MediaType } from "../model/type-data"


export function mergeRequest<RequestResult>(dataList: MediaType[], requestFn: Function): Observable<RequestResult[]> {
    return forkJoin<RequestResult[]>(...dataList.map(data => requestFn(data)))
  }