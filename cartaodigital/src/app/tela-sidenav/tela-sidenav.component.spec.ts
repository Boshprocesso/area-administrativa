import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSidenavComponent } from './tela-sidenav.component';

describe('TelaSidenavComponent', () => {
  let component: TelaSidenavComponent;
  let fixture: ComponentFixture<TelaSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
