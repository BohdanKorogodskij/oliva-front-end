import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TovarPage } from './tovar-page';

describe('TovarPage', () => {
  let component: TovarPage;
  let fixture: ComponentFixture<TovarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TovarPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TovarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
