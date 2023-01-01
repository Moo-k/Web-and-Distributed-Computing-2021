function getTimestamp(){
  // create new ajax request
  var xhttp = new XMLHttpRequest();

  // define function that runs on response
  xhttp.onreadystatechange = function(){
    if (this.readyState==4 && this.status==200){
      document.getElementById("last").innerHTML="This page was last viewed "+this.responseText;
    }
  };

  // open connection
  xhttp.open("GET", "/last.txt", true);

  // send request
  xhttp.send();
}

function getColor2(){
  // create new ajax request
  var xhttp = new XMLHttpRequest();

  // define function that runs on response
  xhttp.onreadystatechange = function(){
    if (this.readyState==4 && this.status==200){
      document.getElementById("color2").innerHTML=this.responseText;
      document.getElementById("color2").style.color=String(this.responseText);
    }
  };

  // open connection
  xhttp.open("GET", "/color.txt", true);

  // send request
  xhttp.send();
}

/*var newtime = "";
var i = 0;
var timevec2 = [];
function getLog2(){
  // create new ajax request
  var xhttp = new XMLHttpRequest();

  // define function that runs on response
  xhttp.onreadystatechange = function(){
    if (this.readyState==4 && this.status==200){
        var st = JSON.parse(this.responseText);
        newtime="<li>"+st+"</li>";
        timevec2[i] = newtime;
        i++;
        document.getElementById("log2").innerHTML=timevec2;
    }
  };

  // open connection
  xhttp.open("GET", "/log.json", true);

  // send request
  xhttp.send();
}*/

function getLog2(){
  // create new ajax request
  var xhttp = new XMLHttpRequest();

  // define function that runs on response
  xhttp.onreadystatechange = function(){
    if (this.readyState==4 && this.status==200){
        var st = JSON.parse(this.responseText);
        var output = "";
        //var ro = document.createElement("li");
        //ro.innerHTML = st;
        //document.getElementById("log2").appendChild(ro);
        for (var i = 0; i < st.length; i++){
          output+="<li>"+st[i]+"</li>";
        }
        document.getElementById("log2").innerHTML = output;
    }
  };

  // open connection
  xhttp.open("GET", "/log.json", true);

  // send request
  xhttp.send();
}

function getLog2Interval(){
  // create new ajax request
  var xhttp = new XMLHttpRequest();

  // define function that runs on response
  xhttp.onreadystatechange = function(){
    if (this.readyState==4 && this.status==200){
        var st = JSON.parse(this.responseText);
        var output = "";
        //var ro = document.createElement("li");
        //ro.innerHTML = st;
        //document.getElementById("log2").appendChild(ro);
        for (var i = 0; i < st.length; i++){
          output+="<li>"+st[i]+"</li>";
        }
        document.getElementById("log2").innerHTML = output;
        //document.getElementById("log2").innerHTML = "<li>"+st+"</li>";
    }
  };

  // open connection
  xhttp.open("GET", "/log-ro.json", true);

  // send request
  xhttp.send();
}

var logInterval = setInterval(getLog2Interval,10000);

function getDogInterval(){
  // create new ajax request
  setTimeout(getDogInterval,10000);
  var xhttp = new XMLHttpRequest();

  // define function that runs on response
  xhttp.onreadystatechange = function(){
    if (this.readyState==4 && this.status==200){
      var response = JSON.parse(this.responseText);
      var dog = `<img src='/images/${response["uri"]}' alt='${response["description"]}'>`;
      var desc = `<p>${response["description"]}</p>`;
      document.getElementById("dog").innerHTML=`${dog}${desc}`;
    }
  };

  // open connection
  xhttp.open("GET", "/images.json", true);

  // send request
  xhttp.send();
}

//var dogInterval = setInterval(getDogInterval,10000);

