import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeColorComponent } from './mangecolor.component';

describe('MangeColorComponent', () => {
  let component: MangeColorComponent;
  let fixture: ComponentFixture<MangeColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangeColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
