import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCompanyComponent } from './managecompany.component';

describe('ManageCompanyComponent', () => {
  let component: ManageCompanyComponent;
  let fixture: ComponentFixture<ManageCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
