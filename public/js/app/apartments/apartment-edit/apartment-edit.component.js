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
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ApartmentService } from '../apartment.service';
import { ApartmentModel } from '../apartment.model';
var ApartmentEditComponent = (function () {
    function ApartmentEditComponent(apartmentService, route, router) {
        this.apartmentService = apartmentService;
        this.route = route;
        this.router = router;
    }
    ApartmentEditComponent.prototype.onSubmit = function () {
        console.log(this.myForm);
        var apartment = new ApartmentModel(this.myForm.value.title, this.myForm.value.price, this.myForm.value.link, this.myForm.value.imagePath, this.myForm.value.description, this.apartment.apartmentId);
        this.apartmentService.updateApartment(apartment).subscribe(function (result) { return console.log(result); });
        this.myForm.reset();
        this.router.navigate(['/'], { relativeTo: this.route });
    };
    ApartmentEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.apartment = _this.apartmentService.getApartment(_this.id);
        } //params
        ); //subscribe
        this.myForm = new FormGroup({
            title: new FormControl(this.apartment.title, Validators.required),
            price: new FormControl(this.apartment.price, Validators.required),
            link: new FormControl(this.apartment.link, Validators.required),
            imagePath: new FormControl(this.apartment.imagePath, Validators.required),
            description: new FormControl(this.apartment.description, Validators.required),
        });
    }; //oninit
    return ApartmentEditComponent;
}());
ApartmentEditComponent = __decorate([
    Component({
        selector: 'app-apartment-edit',
        templateUrl: './apartment-edit.component.html'
    }),
    __metadata("design:paramtypes", [ApartmentService,
        ActivatedRoute,
        Router])
], ApartmentEditComponent);
export { ApartmentEditComponent };
