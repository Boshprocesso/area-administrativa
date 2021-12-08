import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaXlsxConversorComponent } from './aa-xlsx-conversor.component';

describe('AaXlsxConversorComponent', () => {
  let component: AaXlsxConversorComponent;
  let fixture: ComponentFixture<AaXlsxConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaXlsxConversorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaXlsxConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
