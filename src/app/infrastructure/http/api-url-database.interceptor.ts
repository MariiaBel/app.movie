import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

const API_URL = 'https://api.themoviedb.org/3'

@Injectable()
export class ApiUrlDatabaseInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return  next.handle(req.clone({
            url: API_URL + req.url
        }))
    }
}