import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeDataComponent } from '../employee/employee-filter-results/employee-data/employee-data.component';
import { EmployeeFliterComponent } from '../employee/employee-filter-results/employee-fliter/employee-fliter.component';
import { EmployeeFilterResultsComponent } from '../employee/employee-filter-results/employee-filter-results.component';
//import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeDataComponent,
    EmployeeFliterComponent,
    EmployeeComponent,
    EmployeeFilterResultsComponent,
    //EmployeeCreateComponent
  ],
  imports: [
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
