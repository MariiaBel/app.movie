import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, mergeMap, Observable, ObservableInput, of, take } from 'rxjs';
import { CinemaType, DetailsData, MediaType } from './model/type-data';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private readonly http: HttpClient) { }

  public requestDetailsByType<CinemaModelType>(data: DetailsData): Observable<CinemaModelType> {

    return this.http.get<CinemaModelType>(`/${data.type}/${data.id}`).pipe(
      catchError<CinemaModelType, ObservableInput<any>>(error => of([]))
    )
  }
}
