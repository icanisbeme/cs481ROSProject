function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    var max_of_array = Math.max.apply(Math, A);
    
    for(var i = 1; i < max_of_array; i++){
        if(!A.includes(i)){
            return i;
        }
    }
    
}

function changeDiv(div1,div2, div3){
   document.getElementById(div1).style.display = "none";
   document.getElementById(div2).style.display = "none";
   document.getElementById(div3).style.display = "inline-block";
}


function modeSwitch() {
    var x = document.getElementById("modeText");
    var selectLocation = document.getElementById("selectLocationButton");
    var deleteLocation = document.getElementById("deleteLocationButton");
    var setNewDestination = document.getElementById("setNewDestinationButton");
    if (x.innerHTML === "Manual Mode") {
      x.innerHTML = "Autonomous Mode";
      selectLocation.disabled = false;
      deleteLocation.disabled = false;
      setNewDestination.disabled = false;

    } else {
      x.innerHTML = "Manual Mode";
      selectLocation.disabled = true;
      deleteLocation.disabled = true;
      setNewDestination.disabled = true;
    }
  }


//   function colorChanger(){
//       var color = document.getElementById("colorDropdown").nodeValue;
//       var background = document.getElementById("mainDisplayDiv");
//       if(color === 'Blue'){
//         background.style.backgroundColor = "blue";
//       }
//       if(color === 'Red'){
//         background.style.backgroundColor = "red";
//       }
//       if(color === 'Green'){
//         background.style.backgroundColor = "green";
//       }
//       if(color === 'White'){
//         background.style.backgroundColor = "white";
//       }


//   }