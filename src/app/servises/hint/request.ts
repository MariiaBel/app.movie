import { forkJoin, mergeMap, Observable, of, take } from "rxjs"
import { MediaData, MediaType } from "../model/type-data"


export function mergeRequest<RequestResult>(dataList: MediaData[], requestFn: Function): Observable<RequestResult[]> {
    const resultList:Observable<RequestResult[]> = of(dataList)
      .pipe(
        mergeMap((dataList:MediaData[]) => {
          return forkJoin<RequestResult[]>(...dataList.map(data => requestFn(data)))
        }),
        take(1)
      )
    return resultList
  }