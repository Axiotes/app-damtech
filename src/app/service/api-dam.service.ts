import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DamType } from '../../types/dam.type';
import { Visit } from '../../types/visit.type';
import { NewVisit } from '../../types/new-visit.type';

@Injectable({
  providedIn: 'root',
})
export class ApiDamService {
  public baseUrl = 'http://localhost:8080/v1';

  constructor(private http: HttpClient) {}

  public getDams() {
    return this.http.get<DamType[]>(`${this.baseUrl}/barragens/todas`);
  }

  public getVisits() {
    return this.http.get<Visit[]>(`${this.baseUrl}/visitas/todas`);
  }

  public postNewVisit(newVisit: NewVisit) {
    return this.http.post(`${this.baseUrl}/visitas`, newVisit);
  }
}
