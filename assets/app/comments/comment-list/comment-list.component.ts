import {Component,OnInit} from '@angular/core';
import {CommentModel} from '../comment.model';
import {CommentService} from '../comment.service';
@Component({
selector:'app-comment-list',
templateUrl:'./comment-list.component.html'
})
export class CommentListComponent implements OnInit{
    comments:CommentModel[];
constructor(private commentService:CommentService){}


ngOnInit(){
this.commentService.getComments().subscribe(
    (comments:CommentModel[])=>{
        this.comments=comments;
    }
);
    }


}