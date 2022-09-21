 //can make changes to stored data without it being cancelled//

async function main() {
    const id = localStorage.getItem ("id")
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = posts.json();
}
