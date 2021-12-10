import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoTelaColetaComponent } from './ao-tela-coleta.component';

describe('AoTelaColetaComponent', () => {
  let component: AoTelaColetaComponent;
  let fixture: ComponentFixture<AoTelaColetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoTelaColetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AoTelaColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
