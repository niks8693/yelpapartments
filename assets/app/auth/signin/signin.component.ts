import {Component,OnInit} from '@angular/core';
import{FormGroup,Validators,FormControl} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {UserModel} from '../user.model';
import {AuthService} from '../auth.service';

@Component({
selector:'app-signin',
templateUrl:'./signin.component.html'
})
export class SigninComponent implements OnInit{
myForm:FormGroup;
userDisplay:string;
constructor(private authService:AuthService,
private router:Router,
private route:ActivatedRoute){}

onSubmit(){
    console.log(this.myForm);
    const user=new UserModel(this.myForm.value.email,this.myForm.value.password);
    this.authService.signin(user).subscribe(
        data=>{
            localStorage.setItem('token',data.token),
            localStorage.setItem('userId',data.userId)
        },
        error=>{
            console.log(error)
        }

    );
    
    this.router.navigate(['/'],{relativeTo:this.route});
}

    ngOnInit(){
this.myForm=new FormGroup({
    email:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
});
    }

}