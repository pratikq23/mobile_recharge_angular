import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBillComponent } from './managebill.component';

describe('ManageBillComponent', () => {
  let component: ManageBillComponent;
  let fixture: ComponentFixture<ManageBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
