import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = localStorage.getItem("Authorization");

    if(token){
      req = req.clone({headers: req.headers.set("Authorization",token)})
    } else {
      this.router.navigate(['']);
    }

    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      return event;
    }));
  }
}
