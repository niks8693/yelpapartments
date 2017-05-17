var CommentModel = (function () {
    function CommentModel(comment, username, userId) {
        this.comment = comment;
        this.username = username;
        this.userId = userId;
    }
    return CommentModel;
}());
export { CommentModel };
