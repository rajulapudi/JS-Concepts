var arr =[];

arr.push(function(){
    console.log("Hello World")
});
arr.push(function(){
    console.log("Hello World")
});
arr.push(function(){
    console.log("Hello World")
});

arr.forEach(pranee => {
    console.log(pranee())
    });