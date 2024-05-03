import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoempageComponent } from './hoempage.component';

describe('HoempageComponent', () => {
  let component: HoempageComponent;
  let fixture: ComponentFixture<HoempageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoempageComponent]
    });
    fixture = TestBed.createComponent(HoempageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
