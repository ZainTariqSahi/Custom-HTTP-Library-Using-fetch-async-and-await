// Creating an object of EasyHTTP
 const easyHTTP=new EasyHTTP;

//  Getting user
// easyHTTP.get('https://jsonplaceholder.typicode.com/users').then((data)=>console.log(data)).catch((err)=>console.log(err))


const data={
    name:'John Doe',
    userName:'Doe123',
    email:'Doe@example.com'
}
// Posting user
// easyHTTP.post('https://jsonplaceholder.typicode.com/users',data).then((data)=>console.log(data)).catch((err)=>console.log(err))

// // Updating user

// easyHTTP.put('https://jsonplaceholder.typicode.com/users/2',data).then((data)=>console.log(data)).catch((err)=>console.log(err))

// //Delete user
easyHTTP.delete('https://jsonplaceholder.typicode.com/users/2',).then(data=>console.log(data)).catch(err=>console.log(err))


