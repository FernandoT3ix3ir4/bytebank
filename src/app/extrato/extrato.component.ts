import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from 'src/services/transferencia.service';
import { Transferencia } from 'src/app/models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.transferenciaService.findAll()
      .subscribe((transferencias: Transferencia[]) => {
        console.table(transferencias);
        this.transferencias = transferencias;
      });
  }

}
