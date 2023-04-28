import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, ObservableInput, of } from 'rxjs';
import { DetailsMediaData } from '../types';


@Injectable({
  providedIn: 'root'
})
export class DetailsMediaService {

  constructor(private readonly http: HttpClient) { }

  public requestDetailsByType<CinemaModelType>(data: DetailsMediaData): Observable<CinemaModelType> {

    return this.http.get<CinemaModelType>(`/${data.type}/${data.id}`).pipe(
      catchError<CinemaModelType, ObservableInput<any>>(error => of([]))
    )
  }
}
