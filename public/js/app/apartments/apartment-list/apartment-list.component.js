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
import { ApartmentService } from '../apartment.service';
import { AuthService } from '../../auth/auth.service';
var ApartmentListComponent = (function () {
    function ApartmentListComponent(apartmentService, authService) {
        this.apartmentService = apartmentService;
        this.authService = authService;
    }
    // username:string;
    ApartmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apartmentService.getApartments().subscribe(function (apartments) {
            _this.apartments = apartments;
        });
    };
    return ApartmentListComponent;
}());
ApartmentListComponent = __decorate([
    Component({
        selector: 'app-apartment-list',
        templateUrl: './apartment-list.component.html'
    }),
    __metadata("design:paramtypes", [ApartmentService,
        AuthService])
], ApartmentListComponent);
export { ApartmentListComponent };
