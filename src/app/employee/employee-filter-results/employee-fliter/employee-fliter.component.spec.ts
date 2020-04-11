import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFliterComponent } from './employee-fliter.component';

describe('EmployeeFliterComponent', () => {
  let component: EmployeeFliterComponent;
  let fixture: ComponentFixture<EmployeeFliterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFliterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFliterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
