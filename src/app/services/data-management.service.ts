import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { RestService } from './rest.service';
import { User } from '../types/user';
import { Router } from '@angular/router';
import { PersistenceService } from './persistence.service';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  constructor(private rest: RestService, private router: Router, private persistenceService: PersistenceService) { }
  public userLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public username: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public role: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  formCorreo!: FormGroup;
  

  private loadToken(data: any): void{
    if(data.token){
      this.persistenceService.setValue("Authorization", data.token);
      this.router.navigate(['/data/tabs']);
      console.log(jwt_decode(data.token));
    }
  }

  async login(user: User): Promise<any> {
    this.rest.login(user)
      .then(data =>{
        this.loadToken(data);
        return data;
      })
      .catch(err => {
        console.dir(err);
        alert(err.message);
      })
  }
}
