import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of} from 'rxjs';
import { MediaDataList, MediaResult, MediaType } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TrendingMediaService {

  constructor(private readonly http: HttpClient) { }

  private readonly requestParams = new HttpParams({
    fromObject: {
      page: 1
    }
  })

  public requestMediaByType(type:MediaType): Observable<MediaResult[]> {
    const params = this.requestParams
    return this.http.get<MediaDataList<MediaResult>>(`/trending/${type}/week`, {params}).pipe(
      map(response => response.results),
      catchError(error => of([]))
    )
  }
}
