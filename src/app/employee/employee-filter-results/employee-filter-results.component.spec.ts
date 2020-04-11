import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFilterResultsComponent } from './employee-filter-results.component';

describe('EmployeeFilterResultsComponent', () => {
  let component: EmployeeFilterResultsComponent;
  let fixture: ComponentFixture<EmployeeFilterResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFilterResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFilterResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
