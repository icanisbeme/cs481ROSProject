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
  document.getElementById('userSettingsDiv').style.height = "625px";
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


//   function increaseFontSizeBy100px() {
//     txt = document.getElementById('testerText');
//     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//     currentSize = parseFloat(style);
//     txt.style.fontSize = (currentSize + 100) + 'px';
// }

function makeFontSmall() {
  document.getElementById('modeText').style.fontSize = "30px";
  document.getElementById('modeBarDiv').style.height = "55px";
  document.getElementById('colorSchemeText').style.fontSize = "12px";
  document.getElementById('languageText').style.fontSize = "12px";
  document.getElementById('fontSizeText').style.fontSize = "12px";
  document.getElementById('userSettingsText').style.fontSize = "12px";
  document.getElementById('userSettingsDiv').style.height = "645px";
}

function makeFontMedium() {
  document.getElementById('modeText').style.fontSize = "40px";
  document.getElementById('modeBarDiv').style.height = "65px";
  document.getElementById('colorSchemeText').style.fontSize = "20px";
  document.getElementById('languageText').style.fontSize = "20px";
  document.getElementById('fontSizeText').style.fontSize = "20px";
  document.getElementById('userSettingsText').style.fontSize = "20px";
  document.getElementById('userSettingsDiv').style.height = "635px";
}

function makeFontBig() {
  document.getElementById('modeText').style.fontSize = "50px";
  document.getElementById('modeBarDiv').style.height = "80px";
  document.getElementById('colorSchemeText').style.fontSize = "28px";
  document.getElementById('languageText').style.fontSize = "28px";
  document.getElementById('fontSizeText').style.fontSize = "28px";
  document.getElementById('userSettingsText').style.fontSize = "28px";
  document.getElementById('userSettingsDiv').style.height = "620px";
}


function makeRed(){
  document.getElementById('userSettingsDiv').style.background = "rgb(255, 137, 137)";
  document.getElementById('mainDisplayDiv').style.background = "rgb(255, 137, 137)";
  document.getElementById('colorSchemeText').style.color = "rgb(33,37,41)";
  document.getElementById('languageText').style.color = "rgb(33,37,41)";
  document.getElementById('fontSizeText').style.color = "rgb(33,37,41)";
  document.getElementById('userSettingsText').style.color = "rgb(33,37,41)";

  document.getElementById('body').style.background = "rgb(250, 250, 250)";
  document.getElementById('modeBarDiv').style.background = "rgb(177,221,240)";
  document.getElementById('modeBarDiv').style.color = "rgb(33,37,41)";
  document.getElementById('settingsButton').style.background = "rgb(250,215,172)";
  document.getElementById('settingsButton').style.color = "rgb(33,37,41)";
  document.getElementById('mainDisplayButton').style.background = "rgb(177,221,240)";
  document.getElementById('mainDisplayButton').style.color = "rgb(33,37,41)";
}
function makeBlue(){
  document.getElementById('userSettingsDiv').style.background = "rgb(64, 183, 219)";
  document.getElementById('mainDisplayDiv').style.background = "rgb(64, 183, 219)";
  document.getElementById('colorSchemeText').style.color = "rgb(33,37,41)";
  document.getElementById('languageText').style.color = "rgb(33,37,41)";
  document.getElementById('fontSizeText').style.color = "rgb(33,37,41)";
  document.getElementById('userSettingsText').style.color = "rgb(33,37,41)";

  document.getElementById('body').style.background = "rgb(250, 250, 250)";
  document.getElementById('modeBarDiv').style.background = "rgb(177,221,240)";
  document.getElementById('modeBarDiv').style.color = "rgb(33,37,41)";
  document.getElementById('settingsButton').style.background = "rgb(250,215,172)";
  document.getElementById('settingsButton').style.color = "rgb(33,37,41)";
  document.getElementById('mainDisplayButton').style.background = "rgb(177,221,240)";
  document.getElementById('mainDisplayButton').style.color = "rgb(33,37,41)";
}
function makeBlack(){
  document.getElementById('userSettingsDiv').style.background = "rgb(61, 61, 61)";
  document.getElementById('mainDisplayDiv').style.background = "rgb(61, 61, 61)";
  document.getElementById('colorSchemeText').style.color = "rgb(250, 250, 250)";
  document.getElementById('languageText').style.color = "rgb(250, 250, 250)";
  document.getElementById('fontSizeText').style.color = "rgb(250, 250, 250)";
  document.getElementById('userSettingsText').style.color = "rgb(250, 250, 250)";

  document.getElementById('body').style.background = "rgb(250, 250, 250)";
  document.getElementById('modeBarDiv').style.background = "rgb(177,221,240)";
  document.getElementById('modeBarDiv').style.color = "rgb(33,37,41)";
  document.getElementById('settingsButton').style.background = "rgb(250,215,172)";
  document.getElementById('settingsButton').style.color = "rgb(33,37,41)";
  document.getElementById('mainDisplayButton').style.background = "rgb(177,221,240)";
  document.getElementById('mainDisplayButton').style.color = "rgb(33,37,41)";
}
function makeContrast(){
  document.getElementById('userSettingsDiv').style.background = "rgb(10, 10, 10)";
  document.getElementById('mainDisplayDiv').style.background = "rgb(10, 10, 10)";
  document.getElementById('colorSchemeText').style.color = "rgb(17, 255, 49)";
  document.getElementById('languageText').style.color = "rgb(17, 255, 49)";
  document.getElementById('fontSizeText').style.color = "rgb(17, 255, 49)";
  document.getElementById('userSettingsText').style.color = "rgb(17, 255, 49)";
  document.getElementById('body').style.background = "rgb(50, 50, 50)";
  document.getElementById('modeBarDiv').style.background = "rgb(50, 50, 50)";
  document.getElementById('modeBarDiv').style.color = "rgb(17, 255, 49)";
  document.getElementById('settingsButton').style.background = "rgb(50, 50, 50)";
  document.getElementById('settingsButton').style.color = "rgb(17, 255, 49)";
  document.getElementById('mainDisplayButton').style.background = "rgb(50, 50, 50)";
  document.getElementById('mainDisplayButton').style.color = "rgb(17, 255, 49)";
}

  // function colorChanger(){
  //     var color = document.getElementById("colorDropdown").nodeValue;
  //     var background = document.getElementById("mainDisplayDiv");
  //     if(color === 'Blue'){
  //       background.style.backgroundColor = "blue";
  //     }
  //     if(color === 'Red'){
  //       background.style.backgroundColor = "red";
  //     }
  //     if(color === 'Green'){
  //       background.style.backgroundColor = "green";
  //     }
  //     if(color === 'White'){
  //       background.style.backgroundColor = "white";
  //     }


  // }