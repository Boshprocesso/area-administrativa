import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFiltroBeneficiosComponent } from './page-filtro-beneficios.component';

describe('PageFiltroBeneficiosComponent', () => {
  let component: PageFiltroBeneficiosComponent;
  let fixture: ComponentFixture<PageFiltroBeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFiltroBeneficiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFiltroBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
