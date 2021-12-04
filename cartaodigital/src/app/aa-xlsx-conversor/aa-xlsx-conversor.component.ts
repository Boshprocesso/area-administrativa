import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-aa-xlsx-conversor',
  templateUrl: './aa-xlsx-conversor.component.html',
  styleUrls: ['./aa-xlsx-conversor.component.css']
})
export class AaXlsxConversorComponent implements OnInit {
  payload:any

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const ab: ArrayBuffer = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(ab);

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.payload = (XLSX.utils.sheet_to_json(ws, {header: 1}));
    };
    reader.readAsArrayBuffer(target.files[0]);
  }
}
