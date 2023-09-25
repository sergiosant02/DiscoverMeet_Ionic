import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WsAstractService } from './ws-astract.service';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class RestService extends WsAstractService {

  // serverUrl = 'http://185.251.214.80:8080';
  serverUrl = 'http://localhost:8080';
  apiPath = '/api';
  path = this.serverUrl + this.apiPath;

  constructor(http: HttpClient) {
    super(http);
  }

  async login(user: User): Promise<any> {
    return await this.makePostRequest(`${this.path}/auth/signin`, user);
  }
}
