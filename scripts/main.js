const layout = [];
layout.push('Website Prototype', './images/thumbnails/socket-thumbnail.png"', 'Today we are writing a website from scratch as a portpolio piece');

const post = document.querySelector('.projects');
for (let i = 0; i < 4; i++)
{
    let blog = document.createElement('div');
    blog.classList.add('blog-post');
    blog.innerHTML = `
        <h3>${layout[0]}</h3> 
        <img src="${layout[1]}"/>
        <p>${layout[2]}</p>
    `;

    post.insertAdjacentElement('beforeend', blog);
}