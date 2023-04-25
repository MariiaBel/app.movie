import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of} from 'rxjs';
import { MediaResult, ResponseData } from './model/response-data';
import { MediaType} from './model/type-data';

@Injectable({
  providedIn: 'root'
})
export class UpcomingMediaService {

  constructor(private readonly http: HttpClient) { }

  private readonly requestParams = new HttpParams({
    fromObject: {
      page: 1
    }
  })

  public requestMediaByType(type:MediaType): Observable<MediaResult[]> {
    const params = this.requestParams
    return this.http.get<ResponseData<MediaResult>>(`/${type}/upcoming`, {params}).pipe(
      map(response => response.results),
      catchError(error => of([]))
    )
  }
}
