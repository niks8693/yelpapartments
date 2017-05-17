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
import { UserModel } from '../user.model';
import { AuthService } from '../auth.service';
var SignupComponent = (function () {
    function SignupComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    SignupComponent.prototype.onSubmit = function () {
        console.log(this.myForm);
        var user = new UserModel(this.myForm.value.email, this.myForm.value.password, this.myForm.value.username);
        this.authService.signup(user).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.router.navigate(['/signin'], { relativeTo: this.route });
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html'
    }),
    __metadata("design:paramtypes", [AuthService,
        Router,
        ActivatedRoute])
], SignupComponent);
export { SignupComponent };
