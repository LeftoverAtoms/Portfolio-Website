function PopulateBlogs( iBlogs )
{
    //const layout = [];
    //layout.push('Website Prototype', './images/thumbnails/socket-thumbnail.png"', 'Today we are writing a website from scratch as a portpolio piece');

    const root = document.querySelector('.blog');
    for (let i = 0; i < iBlogs; i++)
    {
        // Create and define a new blog element
        let blog = document.createElement('div');
        blog.classList.add('blog-post');
    }
}

function FetchForm()
{
    const form = document.querySelectorAll('formlmao');

    print(form);
}

const profile = document.querySelector('.profile')

async function LoadContent() {
    const response = await fetch('./data/profile.json');
    const data = await response.json();

    profile.innerHTML = `
        <div class="profile-content">
            <img class="portrait" src='${data.portrait}' />
            <span class="name">${data.name}</span>
            <div class="social-links">
                <a href="${data.links.github.link}"><img src="${data.links.github.icon}" alt="Github logo"></a>
                <a href="${data.links.twitter.link}"><img src="${data.links.twitter.icon}" alt="Twitter Logo"></a>
            </div>
        </div>
        <span class="bio">${data.bio}</span>
        <div class="skills">
            <span class="skills-title">Skills</span>
            <div class="skills-items">
                ${data.skills.map(skill => `<span class="skill-item">${skill}</span>`).join('\n')}
            </div>
        </div>
    `
}

LoadContent();
