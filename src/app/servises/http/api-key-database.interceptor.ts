import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


//https://api.themoviedb.org/3/movie/550?api_key=e512fa159446e6a215e970b4388011c7
//key access eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTEyZmExNTk0NDZlNmEyMTVlOTcwYjQzODgwMTFjNyIsInN1YiI6IjY0MmZiNTdhOTVjMGFmMDBiNjIxN2YwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C_gGoPmX-42xDI2A6BNNlHeatUxllo9HMv8Wbyw4yN8
const API_KEY = 'e512fa159446e6a215e970b4388011c7'

@Injectable()
export class ApiKeyDatabaseInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return  next.handle(req.clone({
            params: req.params.append('api_key', API_KEY)
        }))
    }
}