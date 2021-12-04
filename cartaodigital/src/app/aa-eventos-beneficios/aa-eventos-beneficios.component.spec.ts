import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaEventosBeneficiosComponent } from './aa-eventos-beneficios.component';

describe('AaEventosBeneficiosComponent', () => {
  let component: AaEventosBeneficiosComponent;
  let fixture: ComponentFixture<AaEventosBeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaEventosBeneficiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaEventosBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
