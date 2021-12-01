import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaEventosTabelaComponent } from './aa-eventos-tabela.component';

describe('AaEventosTabelaComponent', () => {
  let component: AaEventosTabelaComponent;
  let fixture: ComponentFixture<AaEventosTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaEventosTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaEventosTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
