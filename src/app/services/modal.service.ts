import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as env from './env.json';

@Injectable()
export class ModalService {

  constructor (private http:Http){
  	
  }
  public serverUrl:any = env;
  
  //register company 
  registerCompany(companyObj:any) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.serverUrl.devurl+"/api/Company/addCompany", companyObj,options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  //get company company list 
  getCompanyList(filterObj:any) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.serverUrl.devurl+"/api/Company/getCompanyList", filterObj,options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  //get modal company list 
  getModalList(filterObj:any) {
       console.log(filterObj);
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.serverUrl.devurl+"/api/Mode/getModelList", filterObj,options)
    .map(this.extractData)
    .catch(this.handleError);
  }
  //update company
  updateCompany(companyObj:any) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.serverUrl.devurl+"/api/Company/updateCompany", companyObj,options)
    .map(this.extractData)
    .catch(this.handleError);
  }


  //update company status
  updateCompanyStatus(companyObj:any) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.serverUrl.devurl+"/api/Company/updateCompanyStatus", companyObj,options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  //extract data
  private extractData(res: Response) {
    let body = res.json();
    console.log("body",body);
    return body || { };
  }

  //handle exception
  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
