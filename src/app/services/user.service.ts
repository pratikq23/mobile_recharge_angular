import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as env from './env.json';

@Injectable()
export class UserService {

  constructor (private http:Http){
  	
  }
  public serverUrl:any = env;
  
  //register user
  registerUser(userObj:any) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.serverUrl.devurl+"/api/User/RegisterUser", userObj,options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  //change password
  changePassword(passwordObj:any) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.serverUrl.devurl+"/api/User/chnagePassword", passwordObj,options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  //get userlist
  getUserList(filterObj:any) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.serverUrl.devurl+"/api/User/getUserList",filterObj,options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  //update user status api/User/getUserDetail?userId=1
  updateUserStatus(userObj:any) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.serverUrl.devurl+"/api/User/updateUserStatus", userObj,options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  //get particular user 
  getUserById(userId:any) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.get(this.serverUrl.devurl+"api/User/getUserDetail?userId="+userId,options)
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
