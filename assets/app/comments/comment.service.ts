import {Http,Headers,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {CommentModel} from './comment.model';
import {ErrorService} from '../error/error.service';



@Injectable()
export class CommentService{

private comments:CommentModel[]=[];
constructor(private http:Http,
private errorService:ErrorService){}

addComment(comment:CommentModel){
const body=JSON.stringify(comment);
const headers= new Headers({'Content-Type':'application/json'});
 const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
return this.http.post(' https://yelpapartmentss.herokuapp.com/comment'+token,body,{headers:headers})
.map((response:Response)=>{
    const result=response.json();
    const comment=new CommentModel(
         result.obj.comment,result.obj.user.username,result.obj.user._id
    ); // comment
    this.comments.push(comment);
    return comment;
})//map
.catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });


}


getComments(){
    return this.http.get(' https://yelpapartmentss.herokuapp.com/comment')
     .map((response:Response)=>{
         const comments=response.json().obj;
         let transformedComments:CommentModel[]=[];
         for(let comment of comments){
             transformedComments.push(
                new CommentModel(comment.comment,
                comment.user.username,comment.user._id)//comment model
             );//push
         }//for loop
         this.comments=transformedComments;
         return transformedComments;
     })//map
     .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
}



}