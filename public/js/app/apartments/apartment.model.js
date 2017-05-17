var ApartmentModel = (function () {
    function ApartmentModel(title, price, link, imagePath, description, apartmentId, username, userId) {
        this.title = title;
        this.price = price;
        this.link = link;
        this.imagePath = imagePath;
        this.description = description;
        this.apartmentId = apartmentId;
        this.username = username;
        this.userId = userId;
    }
    return ApartmentModel;
}());
export { ApartmentModel };
