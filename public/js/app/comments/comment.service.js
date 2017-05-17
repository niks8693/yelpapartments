var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { CommentModel } from './comment.model';
import { ErrorService } from '../error/error.service';
var CommentService = (function () {
    function CommentService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.comments = [];
    }
    CommentService.prototype.addComment = function (comment) {
        var _this = this;
        var body = JSON.stringify(comment);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('  https://yelpapt.herokuapp.com/comment' + token, body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var comment = new CommentModel(result.obj.comment, result.obj.user.username, result.obj.user._id); // comment
            _this.comments.push(comment);
            return comment;
        }) //map
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    CommentService.prototype.getComments = function () {
        var _this = this;
        return this.http.get('  https://yelpapt.herokuapp.com/comment')
            .map(function (response) {
            var comments = response.json().obj;
            var transformedComments = [];
            for (var _i = 0, comments_1 = comments; _i < comments_1.length; _i++) {
                var comment = comments_1[_i];
                transformedComments.push(new CommentModel(comment.comment, comment.user.username, comment.user._id) //comment model
                ); //push
            } //for loop
            _this.comments = transformedComments;
            return transformedComments;
        }) //map
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    return CommentService;
}());
CommentService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        ErrorService])
], CommentService);
export { CommentService };
