import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './shared/interfaces/team';

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
}
