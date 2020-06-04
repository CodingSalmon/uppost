const likeButton = document.querySelector('#id')

likeButton.addEventListener('click', function() {
    post.likers.push(user.id);
});