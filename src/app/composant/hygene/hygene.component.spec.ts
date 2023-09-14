import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HygeneComponent } from './hygene.component';

describe('HygeneComponent', () => {
  let component: HygeneComponent;
  let fixture: ComponentFixture<HygeneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HygeneComponent]
    });
    fixture = TestBed.createComponent(HygeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
