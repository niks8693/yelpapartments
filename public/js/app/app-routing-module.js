var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApartmentListComponent } from './apartments/apartment-list/apartment-list.component';
import { ApartmentNewComponent } from './apartments/apartment-new/apartment-new.component';
import { ApartmentDetailComponent } from './apartments/apartment-detail/apartment-detail.component';
import { ApartmentEditComponent } from './apartments/apartment-edit/apartment-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { CommentNewComponent } from './comments/comment-new/comment-new.component';
var appRoutes = [
    { path: "", redirectTo: "/apartments", pathMatch: 'full' },
    { path: "apartments", component: HomeComponent, children: [
            { path: "", component: ApartmentListComponent },
            { path: "new", component: ApartmentNewComponent },
            { path: ":id", component: ApartmentDetailComponent, children: [
                    { path: "comments/new", component: CommentNewComponent }
                ] },
            { path: ":id/edit", component: ApartmentEditComponent },
        ] },
    { path: "signup", component: SignupComponent },
    { path: "signin", component: SigninComponent },
    { path: '**', component: PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
