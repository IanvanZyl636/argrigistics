import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmStatusComponent } from './farm-status.component';

describe('FarmStatusComponent', () => {
  let component: FarmStatusComponent;
  let fixture: ComponentFixture<FarmStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmStatusComponent],
    });
    fixture = TestBed.createComponent(FarmStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
