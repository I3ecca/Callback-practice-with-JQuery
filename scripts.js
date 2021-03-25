$(function(){
    $(".red-box").delay(500).animate({
        "height":"20%",
        "font-size":"20px", 
    }, myFirstAction)

});

//Another way to time your animations is with a callback function!
//You can have a function as your thrid parameter. There are no more parameters you can pass after you use a function in the third spot, so if you need to do more functions, you would have to call them withing the fucntion that is being passed. 

//The function is executed as soon as the animation is finsihed. 

//It can get complex very fast if you overdo it. It is useful that you can do anything once an animation is finished!

//for this challenge, use the animate function to make your own animation and then incorporate what you have leaned with callback function. 



let myFirstAction = function() {
    alert("The callback function is finished!");
    mySecondAction();
}

let mySecondAction = function(){
    alert("I'm a function inside the first function! Now I am finished 😁");
    $(".green-box").fadeTo(1000, 0, myThirdAction);
}

let myThirdAction = function() {
    alert("Im the third function! I'm fading this blue box!")
    $(".blue-box").fadeTo(1000, 0);
}