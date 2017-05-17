import {Component,OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
@Component({
selector:'app-header',
templateUrl:'./header.component.html'
})
export class HeaderComponent{
constructor(private authService:AuthService){}
// userDisplay:string;

onLogout(){
    this.authService.logout();

}
isLoggedIn(){
    return this.authService.isLoggedIn();
}

// onDisplayUser(){
//     this.userDisplay=this.authService.displayUser();
//     console.log(this.userDisplay);
// }



}