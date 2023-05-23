function startTime() {
  var today = new Date();
  var hour = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  //   time format
  if(hour <= 12){
    hour = hour
  }else{
    hour = hour - 12;
  }

  // add zero if less than 10
  hour = concatZero(hour);
  minutes = concatZero(minutes);
  seconds = concatZero(seconds);

  // am pm 
  var mode;
  if(hour <=11){
    mode = "PM"
  }else{
    mode = "AM"
  }


  document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds + ' ' + mode;
  setTimeout(startTime, 500)
  }

  function concatZero(value){
      if(value < 9){
             value= '0' + value;
      }  
      return value;
  }


//   screen
let screen =document.getElementById("screen");

// type to the screen 
function press(numValue){
    if(screen.value == 0){
        screen.value = ''
    }
    screen.value += numValue;
}

// clear screen
function clearScreen(val){
    screen.value = val;
}

// delete key
function backspace(){
    const space = screen;
    screen.value = space.value.substring(0, space.value.length -1);
}


abcvbsvdfdf

