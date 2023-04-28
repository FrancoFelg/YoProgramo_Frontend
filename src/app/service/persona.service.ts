import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = "https://portfolio-backend3-zl0m.onrender.com/personas/"

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL+"lista");
  }

  public details(): Observable<persona>{
    return this.httpClient.get<persona>(this.URL+`detail/1`);
  }

  /*
  public save(Persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.URL+"create", Persona);
  }
  */

  public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
  }

  /*
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+`delete/${id}`)
  }
  */

}
