
let blogName = "My First Blog!";
let description = "WOAH LOOK AT WHAT WE'RE DOING IN VALHIEIM!";
let imgPath = "./images/gobble.png"

const blogPosts = document.querySelectorAll('.blog-post')
blogPosts.forEach( blogPost => blogPost.children[1].src = imgPath);

document.querySelector('.featured-blog-post').children[1].src = imgPath;

const post = {
    title: blogName,
    description,
    imgPath,
};

const newBlog = document.createElement('div');
newBlog.classList.add('blog-post');
newBlog.innerHTML = `
    <h3>${post.title}</h3> 
    <img src="${post.imgPath}"/>
    <p>${post.description}</p>
`;

const recentPosts = document.querySelector('.recent-blogs');
recentPosts.insertAdjacentElement('beforeend', newBlog);

console.log(newBlog);