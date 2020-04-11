import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../../employee/employee-service.service';
//import { CurdServiceService } from '../../curd-service.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
   data:any;
   result:any;
  constructor(private service:EmployeeServiceService) { }

  ngOnInit() {
    this.service.productData.subscribe((result) => { //Subscribed to the observable in of Behavioural Subject 
      this.result= result; 
      console.log('data in result component',this.result);
    })
  }
  readOnly(){
    //debugger;
  this.service.read().subscribe(
    (data)=>{
     this.data=data;
     console.log(this.data);
    }
  );
} 
}
