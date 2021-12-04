import { Component, OnInit } from '@angular/core';
import { xlsxPayloadJSON } from '../dao/tiposJSON';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-aa-xlsx-conversor',
  templateUrl: './aa-xlsx-conversor.component.html',
  styleUrls: ['./aa-xlsx-conversor.component.css']
})
export class AaXlsxConversorComponent implements OnInit {
  headerColaboradores = ["EDV", "CPF", "DATA DE NASCIMENTO", "NOME COMPLETO", "UNIDADE"]
  xlsxPayload:xlsxPayloadJSON = {
    beneficiarios: [],
    beneficios: [],
    beneficioBeneficiario: {}
  }

  constructor() { }

  ngOnInit(): void {
  }

  organizarBeneficiarios(arraysColaboradores:Array<Array<any>>) {
    let headers: string[] = arraysColaboradores[0]

    let headersIndex:Int32List = []
    headers = headers.map(header => header.toUpperCase())

    for (let index = 0; index < this.headerColaboradores.length; index++) {
      const header = this.headerColaboradores[index];
      headersIndex[index] = headers.indexOf(header.toUpperCase())
    }

    arraysColaboradores = arraysColaboradores.splice(1)
    this.xlsxPayload.beneficiarios = arraysColaboradores.map(array => {
      return {
        edv: array[headersIndex[0]],
        cpf: array[headersIndex[1]],
        nascimento: array[headersIndex[2]],
        nome: array[headersIndex[3]],
        unidade: array[headersIndex[4]]
      }
    })
  }

  onFileSelected(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    
    reader.readAsArrayBuffer(target.files[0]);
    reader.onload = (e: any) => {
      const ab: ArrayBuffer = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(ab);

      wb.SheetNames.forEach(sheetName => {
        const ws: XLSX.WorkSheet = wb.Sheets[sheetName];

        if(sheetName.toUpperCase() === "COLABORADORES") {
          let arraysColaboradores:Array<Array<any>> = XLSX.utils.sheet_to_json(ws, {header: 1})
          this.organizarBeneficiarios(arraysColaboradores)

        }
      })
      console.log(this.xlsxPayload)
    };
  }
}
