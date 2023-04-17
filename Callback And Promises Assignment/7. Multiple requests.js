// async function retrievesData() {
//     try {
//         const todoResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const todoData = await todoResponse.json();
//         const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const postData = await postResponse.json();
//         const todoPost = {
//             todos:todoData,
//             posts:postData
//         }
//         console.log(todoPost);
//     }catch(error){
//         console.log(error.message);
//     }
// }

// retrievesData()


async function fetchTodoAndPost(){
    try {
        const [todoResponse, postResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos/1"),
            fetch("https://jsonplaceholder.typicode.com/posts/1")
        ]);

        const [todoData, postData] = await Promise.all([
            todoResponse.json(),
            postResponse.json()
        ]);

        const todoPost = {
            todo: todoData, post: postData
        }
        console.log(todoPost);
    }catch(error){
        console.log(error.message);
    }
}

fetchTodoAndPost()