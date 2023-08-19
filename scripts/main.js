function LoadBlog() {
	// Unhide blog
	document.querySelector(".blog").style.display = "flex";
	
	HideBlogs();
}

function HideBlogs() {
	const children = document.querySelector('.blogs').children;

	for (let i = 0; i < children.length; i++) {
		if (children[i].className == "blog-entry") {
			children[i].style.display = "none";
		}
	}
}