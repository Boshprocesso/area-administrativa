import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBeneficiosTerceiroComponent } from './page-beneficios-terceiro.component';

describe('PageBeneficiosTerceiroComponent', () => {
  let component: PageBeneficiosTerceiroComponent;
  let fixture: ComponentFixture<PageBeneficiosTerceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBeneficiosTerceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBeneficiosTerceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
