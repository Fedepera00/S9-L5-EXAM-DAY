import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iCar } from '../models/iCar';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private apiUrl = 'assets/db.json';
  // URL dell'API che contiene i dati delle auto

  constructor(private http: HttpClient) {}
  //  per effettuare delle rrichieste HTTP

  getCars(): Observable<iCar[]> {
    return this.http.get<iCar[]>(this.apiUrl);
    //METODO PER OTTENERE TUTTE LE AUTO , EFFETTUO UNA RICHIESTA GET ALL'URL E RESTITUISCO UN OBSERVABLE CON UN ARRAY DI ICAR
  }

  getCarById(id: string): Observable<iCar> {
    return this.http.get<iCar>(`${this.apiUrl}/${id}`);
    // METODO PER OTTENERE UN AUTO PECIFICA ATTRAVERSO L'ID FORNITO IN PRECEDENZA NEL JSON E POI RITORNO E OTTENGO L'AUTO
  }
}
