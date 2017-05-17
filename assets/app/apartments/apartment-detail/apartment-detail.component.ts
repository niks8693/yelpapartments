import {Component,OnInit} from '@angular/core';
import{ActivatedRoute,Params,Router} from '@angular/router';
import {ApartmentService} from '../apartment.service';
import {ApartmentModel} from '../apartment.model';
@Component({
selector:'app-apartment-detail',
templateUrl:'./apartment-detail.component.html'
})
export class ApartmentDetailComponent implements OnInit{
constructor(private apartmentService:ApartmentService,
private route:ActivatedRoute,
private router:Router){}
id:number;
apartment:ApartmentModel;

onDelete(){
    this.apartmentService.deleteApartment(this.apartment).subscribe(
        result=>console.log(result)
    );
    this.router.navigate(['/'],{relativeTo:this.route});
}
    ngOnInit(){
this.route.params.subscribe(
    (params:Params)=>{
        this.id=+params['id'];
        this.apartment=this.apartmentService.getApartment(this.id);
    }
);
    }

}