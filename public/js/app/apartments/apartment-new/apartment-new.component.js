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
import { ApartmentService } from '../apartment.service';
import { ApartmentModel } from '../apartment.model';
var ApartmentNewComponent = (function () {
    function ApartmentNewComponent(apartmentService, router, route) {
        this.apartmentService = apartmentService;
        this.router = router;
        this.route = route;
    }
    ApartmentNewComponent.prototype.onSubmit = function () {
        console.log(this.myForm);
        var apartment = new ApartmentModel(this.myForm.value.title, this.myForm.value.price, this.myForm.value.link, this.myForm.value.imagePath, this.myForm.value.description);
        this.apartmentService.addApartment(apartment).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.myForm.reset();
        this.router.navigate(['/'], { relativeTo: this.route });
    };
    ApartmentNewComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            title: new FormControl(null, Validators.required),
            price: new FormControl(null, Validators.required),
            imagePath: new FormControl(null, Validators.required),
            link: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required)
        });
    };
    return ApartmentNewComponent;
}());
ApartmentNewComponent = __decorate([
    Component({
        selector: 'app-apartment-new',
        templateUrl: './apartment-new.component.html'
    }),
    __metadata("design:paramtypes", [ApartmentService,
        Router,
        ActivatedRoute])
], ApartmentNewComponent);
export { ApartmentNewComponent };
