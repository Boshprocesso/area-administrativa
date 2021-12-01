import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReloadComponent } from './page-reload.component';

describe('PageReloadComponent', () => {
  let component: PageReloadComponent;
  let fixture: ComponentFixture<PageReloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageReloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
