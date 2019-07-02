/* CALL BACKS */


const posts = [
    {title: 'Post one'},
    {title: 'Post two'}
]

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

/* function createPost(post){
    setTimeout(() => {
      posts.push(post)  
    }, 2000);
}

createPost({title:'Post three'});
getPosts();
 */

/*  in the above code the createPosts starts first but before
it finishes the getPosts is called and will be painted on DOM
So we do not see the third post on the DOM */

/* to Convert this in to a call back we need to give the 
the final step as a call back to the delayed step */

/* Now the createPost should accept a callback parameter
and should execute the parameter after the thirs post is
created */

/* function createPost(post, callback){
    setTimeout(() => {
      posts.push(post);
      callback()  
    }, 2000);
}

createPost({title:'Post three'}, getPosts); */

/* PROMISES */

/* instead of callback , we want the createPosts to return
a Promise. 
Promise accepts a callback and takes two params
1.resolve & 2.reject 
in case of success we want to resove
in case of error we reject
*/

function createPost(post){
    return new Promise((resolve, reject)=>{
        
        setTimeout(() => {
            posts.push(post);
            
            
            const error = false;
        if(!error) {
            resolve();
        }else {
            reject('Error:Something went wrong')
        }
          }, 2000);

        


    })

}

/* createPost({title:'Post three'})
.then(getPosts)
.catch(err=>console.log(err)) */


/* ASYNC / AWAIT */

async function init(){

 await createPost({title:'Post three'})

 getPosts();

}
init();








/* Promise .all */

/* const promise1 = new Promise.resolve('Hello World')
const promise2 = 10;
const promise3 = new Promise.resolve('Hello World') */
