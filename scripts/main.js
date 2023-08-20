var b_blog_visible = false;

function LoadBlog() {
	ToggleBlogVisiblity();
}

function ToggleBlogVisiblity() {
	const blog = document.querySelector(".blog");
	const children = document.querySelector('.blogs').getElementsByTagName("*");

	if (b_blog_visible == true) {
		SetVisiblity(children, 1.0);

		blog.style.display = "none";

		b_blog_visible = false;
	}
	else {
		SetVisiblity(children, 0.25);

		blog.style.display = "flex";

		b_blog_visible = true;
	}
}

function SetVisiblity(children, f_opacity) {
	for (let i = 0; i < children.length; i++) {
		if (children[i].className == "blog-entry") {
			children[i].style.opacity = f_opacity;
		}
	}
}