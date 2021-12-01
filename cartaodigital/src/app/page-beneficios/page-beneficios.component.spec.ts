import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBeneficiosComponent } from './page-beneficios.component';

describe('PageBeneficiosComponent', () => {
  let component: PageBeneficiosComponent;
  let fixture: ComponentFixture<PageBeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBeneficiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
