function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    var max_of_array = Math.max.apply(Math, A);
    
    for(var i = 1; i < max_of_array; i++){
        if(!A.includes(i)){
            return i;
        }
    }
    
}

function showSettings(div1,div2){
   document.getElementById(div1).style.display = "none";
   document.getElementById(div2).style.display = "inline-block";
}
