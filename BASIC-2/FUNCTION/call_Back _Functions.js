function h (x, fn){
    console.log(x * x);
    fn();
}

h(10, function(){
    console.log("Done with CallBack");
})