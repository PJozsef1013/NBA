import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../interfaces/player';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  backendUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTeam(teamId: string): Observable<Team> {
    const url = `${this.backendUrl}/teams/${teamId}`;
    return this.http.get<Team>(url);
  }

  addNewPlayer(teamId: string, playerId: string, request: Player): Observable<any> {
    const url = `${this.backendUrl}/teams/${teamId}/player/${playerId}`;
    console.log(teamId, playerId, request);
    return this.http.post<any>(url, request);
  }

  editPlayer(teamId: string, playerId: string, request: Player): Observable<any> {
    const url = `${this.backendUrl}/teams/${teamId}/player/${playerId}`;
    console.log(teamId, playerId, request);
    return this.http.put<any>(url, request);
  }

  deletePlayer(teamId: string, playerId: string): Observable<any> {
    const url = `${this.backendUrl}/teams/${teamId}/player/${playerId}`;
    return this.http.delete<any>(url);
  }
}
