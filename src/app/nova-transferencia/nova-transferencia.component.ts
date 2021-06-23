import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from 'src/services/transferencia.service';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  constructor(private transferenciaService: TransferenciaService, private router: Router) { }

  transferir() {
    const transferencia: Transferencia = { valor: this.valor, destino: this.destino };
    this.transferenciaService.adicionar(transferencia)
      .subscribe(resultado => {
        console.log(resultado);
        this.router.navigateByUrl('extrato');
      }, (error) => console.log(error)
      );
  }


}
