import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColorComponent } from './addcolor.component';

describe('AddCompanyComponent', () => {
  let component: AddColorComponent;
  let fixture: ComponentFixture<AddColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
