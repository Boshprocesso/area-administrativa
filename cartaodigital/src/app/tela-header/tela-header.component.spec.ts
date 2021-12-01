import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHeaderComponent } from './tela-header.component';

describe('TelaHeaderComponent', () => {
  let component: TelaHeaderComponent;
  let fixture: ComponentFixture<TelaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
