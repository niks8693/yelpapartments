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
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from '../user.model';
import { AuthService } from '../auth.service';
var SigninComponent = (function () {
    function SigninComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    SigninComponent.prototype.onSubmit = function () {
        console.log(this.myForm);
        var user = new UserModel(this.myForm.value.email, this.myForm.value.password);
        this.authService.signin(user).subscribe(function (data) {
            localStorage.setItem('token', data.token),
                localStorage.setItem('userId', data.userId);
        }, function (error) {
            console.log(error);
        });
        this.router.navigate(['/'], { relativeTo: this.route });
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    Component({
        selector: 'app-signin',
        templateUrl: './signin.component.html'
    }),
    __metadata("design:paramtypes", [AuthService,
        Router,
        ActivatedRoute])
], SigninComponent);
export { SigninComponent };
