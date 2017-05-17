import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {FormGroup,Validators,FormControl} from '@angular/forms';
import {ApartmentService} from '../apartment.service';
import {ApartmentModel} from '../apartment.model';
@Component({
selector:'app-apartment-edit',
templateUrl:'./apartment-edit.component.html'
})
export class ApartmentEditComponent implements OnInit{
constructor(private apartmentService:ApartmentService,
private route:ActivatedRoute,
private router:Router){}
apartment:ApartmentModel;
myForm:FormGroup;
id:number;

onSubmit(){
    console.log(this.myForm);
    const apartment=new ApartmentModel(
        this.myForm.value.title,this.myForm.value.price,this.myForm.value.link,
        this.myForm.value.imagePath,this.myForm.value.description,this.apartment.apartmentId
    );
    this.apartmentService.updateApartment(apartment).subscribe(
        result=>console.log(result)
    );
    this.myForm.reset();
    this.router.navigate(['/'],{relativeTo:this.route});
}
    ngOnInit(){
this.route.params.subscribe(
    (params:Params)=>{
        this.id=+params['id'];
        this.apartment=this.apartmentService.getApartment(this.id);

    }//params
);//subscribe
 this.myForm=new FormGroup({
    title: new FormControl(this.apartment.title,Validators.required),
    price: new FormControl(this.apartment.price,Validators.required),
    link: new FormControl(this.apartment.link,Validators.required),
    imagePath: new FormControl(this.apartment.imagePath,Validators.required),
    description: new FormControl(this.apartment.description,Validators.required),

 });

    }//oninit

}