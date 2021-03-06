var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './auth/header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ApartmentNewComponent } from './apartments/apartment-new/apartment-new.component';
import { ApartmentDetailComponent } from './apartments/apartment-detail/apartment-detail.component';
import { ApartmentEditComponent } from './apartments/apartment-edit/apartment-edit.component';
import { ApartmentListComponent } from './apartments/apartment-list/apartment-list.component';
import { ApartmentComponent } from './apartments/apartment/apartment.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ErrorComponent } from './error/error.component';
import { ErrorService } from './error/error.service';
import { AppRoutingModule } from './app-routing-module';
import { ApartmentService } from './apartments/apartment.service';
import { AuthService } from './auth/auth.service';
import { CommentPageComponent } from './comments/comment-page/comment-page.component';
import { CommentNewComponent } from './comments/comment-new/comment-new.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CommentEditComponent } from './comments/comment-edit/comment-edit.component';
import { CommentComponent } from './comments/comment/comment.component';
import { CommentService } from './comments/comment.service';
import { FooterComponent } from './footer/footer.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent,
            HeaderComponent,
            SignupComponent,
            SigninComponent,
            ApartmentNewComponent,
            ApartmentEditComponent,
            ApartmentDetailComponent,
            ApartmentListComponent,
            ApartmentComponent,
            PageNotFoundComponent,
            ErrorComponent,
            CommentPageComponent,
            CommentComponent,
            CommentEditComponent,
            CommentListComponent,
            CommentNewComponent,
            FooterComponent
        ],
        imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpModule],
        providers: [ApartmentService, AuthService, ErrorService, CommentService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
