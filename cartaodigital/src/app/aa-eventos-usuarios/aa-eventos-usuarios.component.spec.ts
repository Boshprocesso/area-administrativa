import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaEventosUsuariosComponent } from './aa-eventos-usuarios.component';

describe('AaEventosUsuariosComponent', () => {
  let component: AaEventosUsuariosComponent;
  let fixture: ComponentFixture<AaEventosUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaEventosUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaEventosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
