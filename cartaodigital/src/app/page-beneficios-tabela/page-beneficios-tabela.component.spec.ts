import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBeneficiosTabelaComponent } from './page-beneficios-tabela.component';

describe('PageBeneficiosTabelaComponent', () => {
  let component: PageBeneficiosTabelaComponent;
  let fixture: ComponentFixture<PageBeneficiosTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBeneficiosTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBeneficiosTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
