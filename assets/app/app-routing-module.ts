import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ApartmentListComponent} from './apartments/apartment-list/apartment-list.component';
import {ApartmentNewComponent} from './apartments/apartment-new/apartment-new.component';
import {ApartmentDetailComponent} from './apartments/apartment-detail/apartment-detail.component';
import {ApartmentEditComponent} from './apartments/apartment-edit/apartment-edit.component'
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';
import {CommentNewComponent} from './comments/comment-new/comment-new.component';
const appRoutes:Routes=[
    {path:"",redirectTo:"/apartments",pathMatch:'full'},
{path:"apartments", component:HomeComponent, children:[
    {path:"",component:ApartmentListComponent},
    {path:"new",component:ApartmentNewComponent},
    {path:":id",component:ApartmentDetailComponent,children:[
        {path:"comments/new",component:CommentNewComponent}
    ]},
    {path:":id/edit",component:ApartmentEditComponent},
    
    

]},
{path:"signup",component:SignupComponent},
{path:"signin",component:SigninComponent},
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}