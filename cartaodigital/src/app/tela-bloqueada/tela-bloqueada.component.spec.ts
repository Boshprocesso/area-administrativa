import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaBloqueadaComponent } from './tela-bloqueada.component';

describe('TelaBloqueadaComponent', () => {
  let component: TelaBloqueadaComponent;
  let fixture: ComponentFixture<TelaBloqueadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaBloqueadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaBloqueadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
