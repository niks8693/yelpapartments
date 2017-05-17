import {Http,Response,Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {UserModel} from './user.model';
import {ErrorService} from '../error/error.service';


@Injectable()
export class AuthService{
    userToken:string;
constructor(private http:Http,private errorService:ErrorService){}

signup(user:UserModel){
    const body=JSON.stringify(user);
     const headers= new Headers({'Content-Type':'application/json'});
     
     return this.http.post(' https://yelpapt.herokuapp.com/user/signup',body,{headers:headers})
     .map((response:Response)=>response.json())
    .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
 
}


signin(user:UserModel){
     const body=JSON.stringify(user);
     const headers=new Headers({'Content-Type':'application/json'});
     return this.http.post('  https://yelpapt.herokuapp.com/user/signin',body,{headers:headers})
      .map((response:Response)=>response.json())
    .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
 }

 logout(){
     localStorage.clear();
 }
 isLoggedIn() {
     localStorage.getItem('token') !== null;
    }


}