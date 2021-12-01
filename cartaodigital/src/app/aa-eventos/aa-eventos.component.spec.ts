import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaEventosComponent } from './aa-eventos.component';

describe('AaEventosComponent', () => {
  let component: AaEventosComponent;
  let fixture: ComponentFixture<AaEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
