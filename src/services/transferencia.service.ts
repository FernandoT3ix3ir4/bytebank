import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from 'src/app/models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);

  }

  hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

}
