import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFooterComponent } from './tela-footer.component';

describe('TelaFooterComponent', () => {
  let component: TelaFooterComponent;
  let fixture: ComponentFixture<TelaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
