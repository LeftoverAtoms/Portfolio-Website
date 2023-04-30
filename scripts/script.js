const button = document.querySelector('button')

function clickHandler(event) {
  console.log(event)
}

button.addEventListener('click', (event) => console.log(event))

// import data from '...'

// const posts = data.parseJSON()

// posts.map((post) => {
//   ;`
//   <h3>${post.title}}</h3>
//   <img src="${post.img}" alt="${post.alt}" />
//   `
// })
