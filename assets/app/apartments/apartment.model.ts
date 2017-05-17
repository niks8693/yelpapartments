export class ApartmentModel{
    constructor(
        public title:string,
        public price:string,
        public link:string,
        public imagePath:string,
        public description:string,
        public apartmentId?:string,
        public username?:string,
        public userId?:string,
        
    ){}
}