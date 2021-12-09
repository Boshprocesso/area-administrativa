import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { xlsxPayloadJSON } from '../dao/tiposJSON';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-aa-xlsx-conversor',
  templateUrl: './aa-xlsx-conversor.component.html',
  styleUrls: ['./aa-xlsx-conversor.component.css']
})
export class AaXlsxConversorComponent implements OnInit {
  @Input() idEvento!:string
  @Output() ArquivoConvertido = new EventEmitter<xlsxPayloadJSON>();
  headerColaboradores = ["EDV", "CPF", "DATA DE NASCIMENTO", "NOME COMPLETO", "UNIDADE"]
  xlsxPayload:xlsxPayloadJSON = {
    idEvento: "",
    beneficiarios: [],
    beneficios: [],
    beneficioBeneficiario: {}
  }

  constructor() { }

  ngOnInit(): void {
  }

  excelDateToJSDate(excelDate:number) {
      var date = new Date(Math.round((excelDate - (25567 + 2)) * 86400 * 1000));
      var converted_date = date.toISOString().split('T')[0];
      return converted_date;
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
        nascimento: this.excelDateToJSDate(array[headersIndex[2]]),
        nome: array[headersIndex[3]],
        unidade: array[headersIndex[4]]
      }
    })
  }

  definirDados(verificacoes:boolean[], dados:[nomePlanilha:string, tipo:string, valor:any]) {
    let [numero, texto] = verificacoes
    let [nomePlanilha, tipo, valor] = dados
    let quantidade, beneficio

    if(numero) {
      quantidade = valor;
      beneficio = nomePlanilha + " " + tipo;
    }

    if(texto) {
      let categoria
      quantidade = parseInt(valor.split("-")[0])
      categoria = valor.split("-")[1]
      beneficio = nomePlanilha + " " + tipo + categoria
    }

    return [quantidade, beneficio]
  }

  inserirdados(cpf:string, beneficio:string, quantidade:Number) {
    if(this.xlsxPayload.beneficios.indexOf(beneficio) == -1) {
      this.xlsxPayload.beneficios.push(beneficio)
    }
    
    let beneficioBeneficiario = this.xlsxPayload.beneficioBeneficiario

    if(beneficioBeneficiario[beneficio] == null) {
      beneficioBeneficiario[beneficio] = []
    }
      
    beneficioBeneficiario[beneficio].push( { cpf, quantidade } )
  }

  tratarDados(nomePlanilha:string, headers:string[], arraysBeneficios:Array<Array<any>>, verificacoes:boolean[]) {
    arraysBeneficios.forEach(linha => {
      const cpf = linha[0]
      for (let j = 1; j < linha.length; j++) {
        const valor = linha[j];

        if(valor != null) {
          const dados:[nomePlanilha:string, tipo:string, valor:any] = [nomePlanilha, headers[j], valor]

          let [quantidade, beneficio] = this.definirDados(verificacoes, dados)
          
          this.inserirdados(cpf, beneficio, quantidade)
        }
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

    if(numero || texto) {
      return [numero, texto]
    }

    throw new Error("Dados em formato errado");
  }

  criarXlsxPayload(wb:XLSX.WorkBook) {
    this.xlsxPayload.idEvento = this.idEvento

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
          arraysBeneficios.forEach(linha => {
            let beneficio = nomePlanilha
            let [cpf, quantidade] = linha

            this.inserirdados(cpf, beneficio, quantidade)
          })
        }else {
          let primeiraLinha:Array<Number|String> = arraysBeneficios[1]

          try {
            let verificacoes = this.conferirSeNumeroOuTexto(primeiraLinha)

            this.tratarDados(nomePlanilha, headers, arraysBeneficios, verificacoes)
          } catch (error) {
            console.warn(error)
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

      this.criarXlsxPayload(wb)
      
      this.ArquivoConvertido.emit(this.xlsxPayload)
    };
  }
}
