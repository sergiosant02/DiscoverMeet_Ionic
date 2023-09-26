import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WsAstractService } from './ws-astract.service';
import { User } from '../types/user';
import { Room } from '../types/room';
import { Questionnaire } from '../types/questionnaire';

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

  // User 
  async login(user: User): Promise<any> {
    return await this.makePostRequest(`${this.path}/login`, user);
  }

  async signIn(user: User): Promise<any> {
    return await this.makePostRequest(`${this.path}/resgister`, user);
  }


  // Rooms

  async getJoinedRooms(): Promise<Room[]>{
    return await this.makeGetRequest(`${this.path}/room/joinedRooms`);
  }

  async getMyRooms(): Promise<Room[]>{
    return await this.makeGetRequest(`${this.path}/room/myRooms`);
  }

  async addToRoom(roomCode: string): Promise<any> {
    return await this.makePostRequest(`${this.path}/room/addParticipant`, undefined, roomCode);
  }

  // Questionnaires

  async getQuestionnairesOfRoom(roomId: string): Promise<Questionnaire[]>{
    return await this.makeGetRequest(`${this.path}/room/questionnaires`, {'roomId': roomId});
  }

 /* async getMyRooms(): Promise<Room[]>{
    return await this.makeGetRequest(`${this.path}/room/joinedRooms`);
  }

  async addToRoom(roomCode: string): Promise<any> {
    return await this.makePostRequest(`${this.path}/room/addParticipant`, undefined, roomCode);
  }

*/
}
