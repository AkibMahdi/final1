 //can make changes to stored data without it being cancelled//
const postListEl = document.querySelector('.post-list'); //fix queryselector
const id = localStorage.getItem ("id") //fix the getitem//
async function onSearchChange(event) {
    const id = event.target.value
    renderPosts(id)
}

async function renderPosts(id) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData= await posts.json();
    //await is necessary for json and backend (needs wait time to fetch data)

    postListEl.innerHTML = postsData.map (post => postHTML(post)).join('')
}       //fix .map//

function postHTML (post) {
    return `
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`
}

renderPosts(id);
