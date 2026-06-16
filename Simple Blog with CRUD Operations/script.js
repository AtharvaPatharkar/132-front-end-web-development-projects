// JavaScript file
// DOM elements
const blogForm = document.getElementById("blogForm");
const postList = document.getElementById("postList");
const postTitle = document.getElementById("postTitle");
const postContent = document.getElementById("postContent");

// CRUD operations for posts
let posts = [];

// Load posts from local storage
window.onload = function() {
  if(localStorage.getItem('posts')) {
    posts = JSON.parse(localStorage.getItem('posts'));
    renderPosts();
  }
}

// Create a new post
blogForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = postTitle.value;
  const content = postContent.value;

  const post = {
    id: new Date().getTime(),
    title,
    content
  };

  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));

  renderPosts();

  postTitle.value = '';
  postContent.value = '';
});

// Render posts
function renderPosts() {
  postList.innerHTML = '';

  posts.forEach(post => {
    const postElement = document.createElement('li');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <button onclick="deletePost(${post.id})">Delete</button>
      <button onclick="editPost(${post.id})">Edit</button>
    `;
    postList.appendChild(postElement);
  });
}

// Delete a post
function deletePost(postId) {
  posts = posts.filter(post => post.id !== postId);
  localStorage.setItem('posts', JSON.stringify(posts));
  renderPosts();
}

// Edit a post
function editPost(postId) {
  const post = posts.find(post => post.id === postId);
  postTitle.value = post.title;
  postContent.value = post.content;

  // Remove the post and update after editing
  deletePost(postId);
}
