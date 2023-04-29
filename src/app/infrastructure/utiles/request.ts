import { forkJoin, Observable} from "rxjs"
import { MediaType } from "src/app/features/media/types"


export function mergeRequest<RequestResult>(dataList: MediaType[], requestFn: Function): Observable<RequestResult[]> {
    return forkJoin<RequestResult[]>(...dataList.map(data => requestFn(data)))
  }