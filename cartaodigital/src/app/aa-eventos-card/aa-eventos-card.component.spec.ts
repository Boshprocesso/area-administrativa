import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaEventosCardComponent } from './aa-eventos-card.component';

describe('AaEventosCardComponent', () => {
  let component: AaEventosCardComponent;
  let fixture: ComponentFixture<AaEventosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaEventosCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaEventosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
