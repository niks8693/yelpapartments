var UserModel = (function () {
    function UserModel(email, password, username) {
        this.email = email;
        this.password = password;
        this.username = username;
    }
    return UserModel;
}());
export { UserModel };
