function RemoveBlogs()
{
	const x = document.querySelector('.blog-content');

	console.log(x.children.length);

	for (let i = 0; i < x.children.length; i++) {
		if (x.children[i].className == "blog-entry") {
			x.children[i].style.display = "none";
		}
	}
}

function LoadBlog() {
	document.querySelector(".blog").style.display = "initial";
	
	RemoveBlogs();
}