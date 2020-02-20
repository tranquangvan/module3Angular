import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDialogDeleteComponent } from './employee-dialog-delete.component';

describe('EmployeeDialogDeleteComponent', () => {
  let component: EmployeeDialogDeleteComponent;
  let fixture: ComponentFixture<EmployeeDialogDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDialogDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
