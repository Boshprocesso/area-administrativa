import { Component, Input } from "@angular/core";
import { FormBuilder} from "@angular/forms";
import { BeneficioEstrutura, EventosUsuariosJSON } from "../dao/tiposJSON";
  
  //******************************************************* Componente para o CADASTRO DE NOVO EVENTO
  @Component({
    selector: 'usuarios-dialog-beneficios',
    templateUrl: './usuarios-dialog-beneficios.html',
    styleUrls: ['./usuarios-dialog-beneficios.css']
  })
  export class UsuarioDialogBeneficiosInput {
    @Input() public objeto!: BeneficioEstrutura;
    //public usuarioLocal !: EventosUsuariosJSON;

    formBeneficio = this.formBuilder.group({
      beneficio: '',
      quantidade: ''
    });
  
  formulario = true;
  
    constructor(
                private formBuilder: FormBuilder
                ) {}
  
    ngOnInit(): void {

    }
  }