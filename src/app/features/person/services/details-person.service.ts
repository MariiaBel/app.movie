import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, ObservableInput, of } from 'rxjs';
import { DetailsPersonData } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DetailsPersonService {

  constructor(private readonly http: HttpClient) { }

  public requestDetailsByType<CinemaModelType>(data: DetailsPersonData): Observable<CinemaModelType> {

    return this.http.get<CinemaModelType>(`/${data.type}/${data.id}`).pipe(
      catchError<CinemaModelType, ObservableInput<any>>(error => of([]))
    )
  }
}
