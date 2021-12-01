import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBeneficiosTerceiroFormComponent } from './page-beneficios-terceiro-form.component';

describe('PageBeneficiosTerceiroFormComponent', () => {
  let component: PageBeneficiosTerceiroFormComponent;
  let fixture: ComponentFixture<PageBeneficiosTerceiroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBeneficiosTerceiroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBeneficiosTerceiroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
