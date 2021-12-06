import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-entrega-beneficio',
  templateUrl: './page-entrega-beneficio.component.html',
  styleUrls: ['./page-entrega-beneficio.component.css']
})
export class PageEntregaBeneficioComponent implements OnInit, ErrorStateMatcher {

  cpfOuEdvEntrada: string = '';

  constructor(
      private fb: FormBuilder,
      private route: Router
  ) { }

  ngOnInit(): void {
  }

  cpfOuEdvForm = this.fb.group({
    edvOuCpf: new FormControl('', [Validators.required, Validators.maxLength(15)])
  });

  cpfOuEdvFormControl = new FormControl('', [Validators.required, Validators.maxLength(15)]);

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  matcher = new ErrorStateMatcher();

  onSubmit(): void {
    console.log(this.cpfOuEdvForm.value.edvOuCpf);

    if(this.cpfOuEdvForm.status=="VALID"){
      // fazer a get à partir daqui e passar para o component filho os dados do array
      this.route.navigate(['/filtro_beneficios/', this.cpfOuEdvForm.value.edvOuCpf]);
    }else{
      // criar component de notificação para os dados inválidos, mas há também a possibilidade de já manter o required do formulário
    }
  }

}

