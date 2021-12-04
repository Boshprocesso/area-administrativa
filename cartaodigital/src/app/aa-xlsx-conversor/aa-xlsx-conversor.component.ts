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

  conferirSeNumeroOuTexto(primeiraLinha:Array<Number|String>) {
    let numero = false, texto = false;
    let index = 1;
    while(!(numero || texto) && index < primeiraLinha.length) {
      if(primeiraLinha[index] != null) {
        numero = typeof primeiraLinha[index] == 'number'
        texto = typeof primeiraLinha[index] == 'string'
      }
      index++
    }

    return [numero, texto]
  }

  tratarDadosComtexto(nomePlanilha:string, headers:string[], arraysBeneficios:Array<Array<any>>) {
    for (let i = 0; i < arraysBeneficios.length; i++) {
      const linha = arraysBeneficios[i];
      for (let j = 1; j < linha.length; j++) {
        const valor = linha[j];

        if(valor != null) {
          const type = headers[j] + valor.split("-")[1]
          const beneficio = nomePlanilha + " " + type
          
          if(this.xlsxPayload.beneficios.indexOf(beneficio) == -1) {
            this.xlsxPayload.beneficios.push(beneficio)
          }
        }
      }
    }
  }

  tratarDadosComNumero(nomePlanilha:string, headers:string[], arraysBeneficios:Array<Array<any>>) {
    for (let i = 1; i < headers.length; i++) {
      const beneficio = nomePlanilha + " " + headers[i];
      if(this.xlsxPayload.beneficios.indexOf(beneficio) == -1) {
        this.xlsxPayload.beneficios.push(beneficio)
      }
    }
  }

  tratarTodosOsDados(wb:XLSX.WorkBook) {
    wb.SheetNames.forEach(nomePlanilha => {
      const ws: XLSX.WorkSheet = wb.Sheets[nomePlanilha];

      if(nomePlanilha.toUpperCase() === "COLABORADORES") {
        let arraysColaboradores:Array<Array<any>> = XLSX.utils.sheet_to_json(ws, {header: 1})
        this.organizarBeneficiarios(arraysColaboradores)
      }else {
        let arraysBeneficios:Array<Array<any>> = (XLSX.utils.sheet_to_json(ws, {header: 1}));
        let headers:string[] = arraysBeneficios.splice(0,1)[0]

        let apenasUmtipo = headers.length == 2
        if(apenasUmtipo) {
          this.xlsxPayload.beneficios.push(nomePlanilha)
        }else {
          let primeiraLinha:Array<Number|String> = arraysBeneficios[1]
          let numero:boolean, texto:boolean
          [numero, texto] = this.conferirSeNumeroOuTexto(primeiraLinha)
          
          if(texto) {
            this.tratarDadosComtexto(nomePlanilha, headers, arraysBeneficios)
          }

          if(numero) {
            this.tratarDadosComNumero(nomePlanilha, headers, arraysBeneficios)
          }
        }
      }
    })
  }

  onFileSelected(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Não pode ser mais de um arquivo');
    const reader: FileReader = new FileReader();
    
    reader.readAsArrayBuffer(target.files[0]);
    reader.onload = (e: any) => {
      const ab: ArrayBuffer = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(ab);

      this.tratarTodosOsDados(wb)
      console.log(this.xlsxPayload)
    };
  }
}
