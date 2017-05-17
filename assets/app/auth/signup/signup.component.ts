import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {UserModel} from '../user.model';
import {AuthService} from '../auth.service';
@Component({
selector:'app-signup',
templateUrl:'./signup.component.html'
})
export class SignupComponent implements OnInit{
myForm:FormGroup;
constructor(private authService:AuthService,
private router:Router,
private route:ActivatedRoute){}
onSubmit(){
    console.log(this.myForm);
    const user=new UserModel(this.myForm.value.email,
    this.myForm.value.password,this.myForm.value.username);
    this.authService.signup(user).subscribe(
        data => console.log(data),
    error => console.error(error)
    );
    this.router.navigate(['/signin'],{relativeTo:this.route});
}

ngOnInit()
{
    this.myForm=new FormGroup({
        username:new FormControl(null,Validators.required),
        email:new FormControl(null,Validators.required),
        password:new FormControl(null,Validators.required)
    });

}

}