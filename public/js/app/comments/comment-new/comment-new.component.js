var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentModel } from '../comment.model';
import { CommentService } from '../comment.service';
var CommentNewComponent = (function () {
    function CommentNewComponent(router, route, commentService) {
        this.router = router;
        this.route = route;
        this.commentService = commentService;
    }
    CommentNewComponent.prototype.onSubmit = function () {
        console.log(this.myForm.value);
        var comment = new CommentModel(this.myForm.value.comment);
        this.commentService.addComment(comment).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.myForm.reset();
        this.router.navigate(['/'], { relativeTo: this.route });
    };
    CommentNewComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            comment: new FormControl(null, Validators.required)
        });
    };
    return CommentNewComponent;
}());
CommentNewComponent = __decorate([
    Component({
        selector: 'app-comment-new',
        templateUrl: './comment-new.component.html'
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        CommentService])
], CommentNewComponent);
export { CommentNewComponent };
