import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { RestService } from './rest.service';
import { User, UserCredentialsLogin } from '../types/user';
import { Router } from '@angular/router';
import { PersistenceService } from './persistence.service';
import jwt_decode from "jwt-decode";
import { Room } from '../types/room';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  constructor(private rest: RestService, private router: Router, private persistenceService: PersistenceService) { }
  public userLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public email: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public role: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public userId: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  formCorreo!: FormGroup;
  

  private loadToken(data: any): void{
    if(data.token){
      let decodeToken: any = jwt_decode(data.token);
      this.persistenceService.setValue("authorization", data.token);
      this.router.navigate(['/data/tabs']);
      this.role.next(decodeToken.role)
      console.log(jwt_decode(data.token));
    }
  }


  // user

  async login(user: UserCredentialsLogin): Promise<any> {
    this.rest.login(user)
      .then(data =>{
        this.loadToken(data);
        return data;
      })
      .catch(err => {
        console.dir(err);
        if (err.status == 400) {
          alert("Usuario o contraseña incorrecta");
        } else {
          alert(err.statusText);
        }
      })
  }

  // room

  async getJoinedRoom(): Promise<Room[]> {
    return this.rest.getJoinedRooms()
      .then(data => {
        return data;
      })
      .catch(err => {
        console.dir(err);
        if (err.status == 400) {
          alert("Usuario o contraseña incorrecta");
        } else {
          alert(err.statusText);
        }
        return [];
      });
  }


  // questionnaires

  async getQuestionnairesOfRoom(roomId: string){
    return this.rest.getQuestionnairesOfRoom(roomId)
      .then(data => data)
      .catch(err => {
        alert(err.statusMessage);
      })
  }
}
