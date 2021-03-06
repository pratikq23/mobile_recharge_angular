import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as env from './env.json';

@Injectable()
export class RoleService {

  constructor (private http:Http){
  	
  }
  public serverUrl:any = env;
  
  //get role
  getRoles(userObj:any) {
    let headers = new Headers({"Access-Control-Allow-Headers": "Content-Type"}); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.serverUrl.devurl+"/api/User/RegisterUser", userObj,options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  //extract data
  private extractData(res: Response) {
    let body = res.json();
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
