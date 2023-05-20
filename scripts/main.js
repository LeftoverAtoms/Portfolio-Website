async function LoadProfile()
{
	const element = document.querySelector('.profile');

	const data = await fetch('./data/profile.json').then( res => res.json());

	return element.innerHTML = `
		<div class="identity">
			<img class="portrait" src='${data.portrait}' />
			<span class="name">${data.name}</span>
			<span class="career">${data.career}</span>
		</div>
		<div class="skills">
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