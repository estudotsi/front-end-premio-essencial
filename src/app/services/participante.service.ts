import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  private url: string = 'https://localhost:7256/api/Participante';

  constructor(private httpClient: HttpClient) { }

  public conferirCpf(cpf: string): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/consulta/${cpf}`);
  }

}
