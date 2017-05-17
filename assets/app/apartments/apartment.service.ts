import {Http,Headers,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {ApartmentModel} from './apartment.model';
import {ErrorService} from '../error/error.service';

@Injectable()
export class ApartmentService{

private apartments:ApartmentModel[]=[];
constructor(private http:Http,private errorService: ErrorService){}

//Add an Apartment
addApartment(apartment:ApartmentModel){
const body=JSON.stringify(apartment);
const headers= new Headers({'Content-Type':'application/json'});
 const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
return this.http.post('  https://yelpapt.herokuapp.com/apartment'+token,body,{headers:headers})
.map((response:Response)=>{
    const result=response.json();
    const apartment=new ApartmentModel(
         result.obj.title,result.obj.price,result.obj.link,result.obj.imagePath,result.obj.description,
         result.obj._id,result.obj.user.username,result.obj.user._id
    ); // apartment
    this.apartments.push(apartment);
    return apartment;
})
.catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
}

//Get all Apartments
 getApartments(){
     return this.http.get('  https://yelpapt.herokuapp.com/apartment')
     .map((response:Response)=>{
         const apartments=response.json().obj;
         let transformedApartments:ApartmentModel[]=[];
         for(let apartment of apartments){
             transformedApartments.push(
                new ApartmentModel(apartment.title,apartment.price,apartment.link,
                apartment.imagePath,apartment.description,apartment._id,
                apartment.user.username,apartment.user._id)//apartment model
             );//push
         }//for loop
         this.apartments=transformedApartments;
         return transformedApartments;
     })//map
     .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });

 }

 //Get a single apartment

 getApartment(id:number){
     return this.apartments[id];
 }

 //Edit or Update single Apartment

 updateApartment(apartment:ApartmentModel){
     const body=JSON.stringify(apartment);
     const headers=new Headers({'Content-Type':'application/json'});
      const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
     
     return this.http.patch('  https://yelpapt.herokuapp.com/apartment/'+apartment.apartmentId+token,body,{headers:headers})
     .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
 }

 //Delete a single apartment

 



 deleteApartment(apartment:ApartmentModel){
     this.apartments.splice(this.apartments.indexOf(apartment),1);
     const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
     return this.http.delete('  https://yelpapt.herokuapp.com/apartment/'+apartment.apartmentId+token)
    .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
 }


}