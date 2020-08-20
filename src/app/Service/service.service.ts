import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Persona} from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  persona: Persona[];

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:3035/gym/personas/all';

  getPersonas() {
    return this.http.get<Persona[]>(this.Url);
  }

}
