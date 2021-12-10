import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEntregaBeneficioComponent } from './page-entrega-beneficio.component';

describe('PageEntregaBeneficioComponent', () => {
  let component: PageEntregaBeneficioComponent;
  let fixture: ComponentFixture<PageEntregaBeneficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEntregaBeneficioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEntregaBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
