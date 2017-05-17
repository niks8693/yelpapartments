import {Component,OnInit} from '@angular/core';
import {ApartmentService} from '../apartment.service';
import {ApartmentModel} from '../apartment.model';
import {AuthService} from '../../auth/auth.service';
@Component({
selector:'app-apartment-list',
templateUrl:'./apartment-list.component.html'
})
export class ApartmentListComponent implements OnInit{
constructor(private apartmentService:ApartmentService,
private authService:AuthService){}

apartments:ApartmentModel[];
// username:string;




    ngOnInit(){
this.apartmentService.getApartments().subscribe(
    (apartments:ApartmentModel[])=>{
        this.apartments=apartments;
    }
);
    }

}