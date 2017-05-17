import {Component,Input} from '@angular/core';
import {CommentModel} from '../../comments/comment.model';

@Component({
selector:'app-comment',
templateUrl:'./comment.component.html'
})
export class CommentComponent{
@Input() comment:CommentModel;
@Input() index:number;



}