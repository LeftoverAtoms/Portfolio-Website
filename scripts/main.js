async function LoadProfile()
{
	const element = document.querySelector('.profile');

	const data = await fetch('./data/profile.json').then( res => res.json());

	return element.innerHTML = `
		<div class="identity">
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
	`;
}

function RemoveBlogs()
{
	const x = document.querySelector('.blogs');
	while (x.firstChild)
	{
		x.removeChild(x.lastChild);
	}
}

function LoadBlog(strID) {

	const element = document.getElementById(strID);
	console.log(element);
	
}

LoadProfile();