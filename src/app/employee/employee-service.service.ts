import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BehaviorSubject } from 'rxjs';
//import {HttpBackendClientService} from './HttpConfig/httpbackend-client'; //

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
 data: any;

  private product = new BehaviorSubject<Array<any>>([]);

   productData = this.product.asObservable();
  //testVariable: Array<any>;
  
  constructor(private http: HttpClient) { }
  read(){
    return this.http.get('http://localhost:2000/api/getAllProducts');
  }
  getProducts(data){
    
    let params = paramsStringify(data);
    let filterUrl ='http://localhost:2000/api/getAllProducts'+params;
    this.http.get(filterUrl).subscribe((data) => {
     this.updateProducts(data);
    }

    );

  //  return this.http.get('http://localhost:2000/api/getAllProducts');
  }

  updateProducts(data){
    this.product.next(data);  
}
}
// export function   paramsStringify(filterObj: any) :string{

//   let finalParams:string = '';
//   let params = {};
//   let tempFilter:SavesFilterModel = new SavesFilterModel();
//   let keys = Object.keys(tempFilter);

//    keys.map(k => {
//      if (filterObj[k]) {
//        if ((k === "state" && !filterObj[k].dispName)) {
//          return null
//        } 
//        else {
//          params = {
//            ...params,
//            [k]: filterObj[k]
//          }
//        }
//      }
//    })
//    finalParams = "?";
//    keys = Object.keys(params)
//    keys.map(k => {
//      if (k === 'state') {
       
//        finalParams = (finalParams == "?" ? finalParams : finalParams + "&") + "stateCode" + "=" + params[k]['num'];
//      }
//      else  if (k === 'fedStdTxtId') {
       
//       finalParams = (finalParams == "?" ? finalParams : finalParams + "&") + "fedStdRefNum" + "=" + encodeURIComponent(params[k].toString());
//     } else if (k=== 'stateStdId'){
//       finalParams = (finalParams == "?" ? finalParams : finalParams + "&") + "stateStdRefNum" + "=" + encodeURIComponent(params[k].toString());
//     }
//      else if (k === 'begDt' || k === 'endDt') {
       
//        const date = `${params[k]['month']}-${params[k]['day']}-${params[k]['year']}`
//        finalParams = (finalParams == "?" ? finalParams : finalParams + "&") + k + "=" + date
//      } else  if(k === 'stateSaveDbId'){
      
//         finalParams = (finalParams == "?" ? finalParams : finalParams + "&") + "saveDbId" + "=" + params[k].toString();
//     }
//      else {
//        finalParams = (finalParams == "?" ? finalParams : finalParams + "&") + k + "=" + params[k].toString();
//      }
//    })
 
//    return finalParams;
//  }

export function paramsStringify(filterObj: any): string {
  let finalParams: string = '';
  let params = {};
  let keys = Object.keys(filterObj);
  //console.log('checking keys',keys);
  keys.map(k => {
   // console.log(filterObj[k]);
    if (filterObj[k]) {
      params = {
        ...params,
        [k]: filterObj[k]
      }

    }
  })
  finalParams = "?";
  keys = Object.keys(params);
  keys.map(k => {
    finalParams = (finalParams == "?" ? finalParams : finalParams + "&") + k + "=" + params[k].toString();
  })
  return finalParams;
}