import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
  private apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http : HttpClient) { }

  public getEducacion() {
    return this.http.get("${this.apiServerUrl}/educacion/id/1");
  }
//:Observable< Educacion > // <Educacion> // `
  public updateEducacion( educacion : Educacion ):Observable< Educacion >{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/update`, educacion);
  }
}
