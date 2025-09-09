import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TovarProfile } from './tovar-profile';

describe('TovarProfile', () => {
  let component: TovarProfile;
  let fixture: ComponentFixture<TovarProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TovarProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TovarProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
