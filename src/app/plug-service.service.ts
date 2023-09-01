import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plug } from "./model/plug";
import { environment } from "./environments/environment";

@Injectable()
export class PlugServiceService {

  constructor(private http: HttpClient) { }

  getPlugs(): Observable<Plug[]>{
    return this.http.get<Plug[]>(environment.API_URL + 'devices/get/all');
  }
}
