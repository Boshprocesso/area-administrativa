import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-aa-eventos-beneficios',
  templateUrl: './aa-eventos-beneficios.component.html',
  styleUrls: ['./aa-eventos-beneficios.component.css']
})
export class AaEventosBeneficiosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AaEventosBeneficiosComponent>,
             @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }

  fecharDialog(){
    return "amadeu";
  }
}
