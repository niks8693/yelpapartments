import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {CommentModel} from '../comment.model';
import {CommentService} from '../comment.service';
@Component({
selector:'app-comment-new',
templateUrl:'./comment-new.component.html'
})
export class CommentNewComponent implements OnInit{
myForm:FormGroup;
constructor(private router:Router,
private route:ActivatedRoute,
private commentService:CommentService){}
onSubmit(){
    console.log(this.myForm.value);
    const comment=new CommentModel(
        this.myForm.value.comment
    );
    this.commentService.addComment(comment).subscribe(
         data=>console.log(data),
        error=>console.error(error)
    );
    this.myForm.reset();
    this.router.navigate(['/'],{relativeTo:this.route});
}

ngOnInit(){
this.myForm=new FormGroup({
comment:new FormControl(null,Validators.required)
});


}






}