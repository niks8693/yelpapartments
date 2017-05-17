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
import { ApartmentModel } from './apartment.model';
import { ErrorService } from '../error/error.service';
var ApartmentService = (function () {
    function ApartmentService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.apartments = [];
    }
    //Add an Apartment
    ApartmentService.prototype.addApartment = function (apartment) {
        var _this = this;
        var body = JSON.stringify(apartment);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('  https://yelpapt.herokuapp.com/apartment' + token, body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var apartment = new ApartmentModel(result.obj.title, result.obj.price, result.obj.link, result.obj.imagePath, result.obj.description, result.obj._id, result.obj.user.username, result.obj.user._id); // apartment
            _this.apartments.push(apartment);
            return apartment;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    //Get all Apartments
    ApartmentService.prototype.getApartments = function () {
        var _this = this;
        return this.http.get('  https://yelpapt.herokuapp.com/apartment')
            .map(function (response) {
            var apartments = response.json().obj;
            var transformedApartments = [];
            for (var _i = 0, apartments_1 = apartments; _i < apartments_1.length; _i++) {
                var apartment = apartments_1[_i];
                transformedApartments.push(new ApartmentModel(apartment.title, apartment.price, apartment.link, apartment.imagePath, apartment.description, apartment._id, apartment.user.username, apartment.user._id) //apartment model
                ); //push
            } //for loop
            _this.apartments = transformedApartments;
            return transformedApartments;
        }) //map
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    //Get a single apartment
    ApartmentService.prototype.getApartment = function (id) {
        return this.apartments[id];
    };
    //Edit or Update single Apartment
    ApartmentService.prototype.updateApartment = function (apartment) {
        var _this = this;
        var body = JSON.stringify(apartment);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('  https://yelpapt.herokuapp.com/apartment/' + apartment.apartmentId + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    //Delete a single apartment
    ApartmentService.prototype.deleteApartment = function (apartment) {
        var _this = this;
        this.apartments.splice(this.apartments.indexOf(apartment), 1);
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('  https://yelpapt.herokuapp.com/apartment/' + apartment.apartmentId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    return ApartmentService;
}());
ApartmentService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, ErrorService])
], ApartmentService);
export { ApartmentService };
