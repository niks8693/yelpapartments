import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {ApartmentService} from '../apartment.service';
import {ApartmentModel} from '../apartment.model';
@Component({
selector:'app-apartment-new',
templateUrl:'./apartment-new.component.html'
})
export class ApartmentNewComponent implements OnInit{
myForm:FormGroup;
constructor(private apartmentService:ApartmentService,
private router:Router,
private route:ActivatedRoute){}

onSubmit(){
    console.log(this.myForm);
    const apartment=new ApartmentModel(
        this.myForm.value.title,
        this.myForm.value.price,
        this.myForm.value.link,
        this.myForm.value.imagePath,
        this.myForm.value.description
    );
    this.apartmentService.addApartment(apartment).subscribe(
        data=>console.log(data),
        error=>console.error(error)
    );
    this.myForm.reset();
    this.router.navigate(['/'],{relativeTo:this.route});
}


ngOnInit(){
    this.myForm=new FormGroup({
        title: new FormControl(null,Validators.required),
        price:new FormControl(null,Validators.required),
        imagePath:new FormControl(null,Validators.required),
        link:new FormControl(null,Validators.required),
        description:new FormControl(null,Validators.required)
    })
}

}