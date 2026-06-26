// JavaScript file
function toggleLike(button) {
    button.classList.toggle("liked");
    if (button.classList.contains("liked")) {
        button.textContent = "❤️ Liked";
    } else {
        button.textContent = "❤️ Like";
    }
}

function toggleCommentBox(button) {
    const commentSection = button.closest(".post").querySelector(".comment-section");
    commentSection.style.display = commentSection.style.display === "block" ? "none" : "block";
}

document.querySelectorAll('.post-comment-btn').forEach(button => {
    button.addEventListener('click', function() {
        const commentBox = button.closest('.comment-box').querySelector('textarea');
        if (commentBox.value.trim()) {
            const commentsList = button.closest('.post').querySelector('.comments-list');
            const newComment = document.createElement('li');
            newComment.innerHTML = `${commentBox.value} <span class="comment-user">- You</span>`;
            commentsList.appendChild(newComment);
            commentBox.value = ''; // Clear comment box
        }
    });
});
