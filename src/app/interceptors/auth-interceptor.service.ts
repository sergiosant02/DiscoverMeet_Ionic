import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { PersistenceService } from '../services/persistence.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private persistenceService: PersistenceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = this.persistenceService.getValue("authorization");
    if(token){
      console.log('Hay token:',token);
      req = req.clone({headers: req.headers.set("authorization",token)})
    } else {
      console.log('No hay token');
      this.router.navigate(['']);
    }

    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      return event;
    }));
  }
}
