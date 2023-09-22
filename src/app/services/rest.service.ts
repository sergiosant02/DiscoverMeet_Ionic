import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WsAstractService } from './ws-astract.service';

@Injectable({
  providedIn: 'root'
})
export class RestService extends WsAstractService {

  serverUrl = 'http://185.251.214.80:8080';
  apiPath = '/api';
  path = this.serverUrl + this.apiPath;

  constructor(http: HttpClient) {
    super(http);
  }
}
