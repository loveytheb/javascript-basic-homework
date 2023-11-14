// 여기에 1번 문제의 답을 작성하세요.
// 문제
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);


// 답
const getPost = async () => {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        console.log(res);
    }catch{
        console.log('error');
    }
}


// 여기에 2번 문제의 답을 작성하세요.
// 문제
fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'BMW Pencil',
        /* other product data */
    })
})
    .then(res => res.json())
    .then(console.log);

// 답
const productContainer = document.querySelector('.productContainer');

const getPosts = async () => {
    const res = await fetch('https://dummyjson.com/products/add');
    const data = await res.json();
    // console.log(data);
    return data;
};


const addPostsHTML = async () => {
    const data = await getPosts();
    productContainer.innerHTML = `
    <div> ID : ${data.id} </div>
    <div> Title : ${data.title} </div>
    `
}
addPostsHTML();