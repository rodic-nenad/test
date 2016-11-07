var pageHeight = document.getElementById('page').offsetHeight;
var pageWidth = document.getElementById('page').offsetWidth;

var pos = document.getElementById("followPointer");

function followCursor(e) {
    var x = e.clientX;
    var y = e.clientY;
    if(y > pageHeight / 2){
      pos.style.top = y - 70 + "px";
      if(x > pageWidth / 2){
        pos.style.left = x - 70 + "px";
      }
      else{
        pos.style.left = x + 70 + "px";
      }
    }
    else{
      pos.style.top = y + 70 + "px";
      if(x > pageWidth / 2){
        pos.style.left = x - 70 + "px";
      }
      else{
        pos.style.left = x + 70 + "px";
      }
    }
}
          /* TASK 2 */

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var info = JSON.parse(this.responseText);
        for (var i = 0; i < 100; i++) { //becaouse of large json object, insted of info.length (which is 5000) I'm placing 100
      
          var node = document.createElement("LI");

          var nodeTitle = document.createElement("P");
          var textTitle = document.createTextNode(info[i].title);
          nodeTitle.appendChild(textTitle);
          node.appendChild(nodeTitle);

          var nodeUrl = document.createElement("A");
          var textUrl = document.createTextNode(info[i].url);
          nodeUrl.appendChild(textUrl);
          var attUrl = document.createAttribute("href");
          attUrl.value = info[i].url;
          nodeUrl.setAttributeNode(attUrl);
          node.appendChild(nodeUrl);

          var nodeImg = document.createElement("IMG");
          var attImg = document.createAttribute("src");
          attImg.value = info[i].thumbnailUrl;
          nodeImg.setAttributeNode(attImg);
          node.appendChild(nodeImg);
          
          document.getElementById("listParent").appendChild(node);
          
      }
      }
  };
  xhttp.open("GET", "http://jsonplaceholder.typicode.com/photos", true);
  xhttp.send();
}

          /* TASK 3 */

var obj = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];

var countries = document.getElementById("countries");

function filter(element) {
  var value = element.value;
  while (countries.hasChildNodes()) {
      countries.removeChild(countries.lastChild);
  }
  for (var i = 0; i < obj.length; i++){
      if (obj[i].name.search(value) > -1){
        var node = document.createElement("LI");
        var nodeP = document.createElement("P");
        var textnode = document.createTextNode(obj[i].name);
        nodeP.appendChild(textnode);
        node.appendChild(nodeP);
        document.getElementById("countries").appendChild(node);
        var att = document.createAttribute("onclick");
        att.value = "alert('" + obj[i].abbreviation + "')";
        nodeP.setAttributeNode(att);

      }
  }
}

          /* TASK 4 */

var arrayA2d = [];

function CheckThis(elem){
  var arrayA = document.getElementById("arrayA").value; 
  var re = /^\[\[(\d+(?:,\s*\d+)*)\](?:,\s*\[(\d+(?:,\s*\d+)*)\])+\]$/;
  document.getElementById("errorHolder").innerHTML = "";
  if( re.test(arrayA) ){
    arrayA2d = JSON.parse(arrayA);
  }
  else{
    document.getElementById("errorHolder").innerHTML = "Error in matrices format";
  }

}


var arrayB2d = [];

function CheckThat(elem){
  var arrayB = document.getElementById("arrayB").value;
  var re = /^\[\[(\d+(?:,\s*\d+)*)\](?:,\s*\[(\d+(?:,\s*\d+)*)\])+\]$/;
  document.getElementById("errorHolder").innerHTML = "";
  if( re.test(arrayB) ){
    arrayB2d = JSON.parse(arrayB);
  }
  else{
    document.getElementById("errorHolder").innerHTML = "Error in matrices format";
  }

}

function displayMutiply(){
    var aNumRows = arrayA2d.length, aNumCols = arrayA2d[0].length,
        bNumRows = arrayB2d.length, bNumCols = arrayB2d[0].length,
        m = new Array(aNumRows);
  for (var r = 0; r < aNumRows; r++){
      m[r] = new Array(bNumCols);
      for (var c = 0; c < bNumCols; c++){
          m[r][c] = 0;
          for (var i = 0; i < aNumCols; i++){
            m[r][c] += arrayA2d[r][i] * arrayB2d[i][c];
          }
      }
  }
  document.getElementById("errorHolder").innerHTML = '[[' + m.join("], [") + ']]';
}

          /* TASK 5 */

var looper;
var degrees = 0;
function rotateByX(el,speed){
  var elem = document.getElementById('courtRotate');
  if(navigator.userAgent.match("Chrome")){
    elem.style.WebkitTransform = "rotateX("+degrees+"deg)";
  } else if(navigator.userAgent.match("Firefox")){
    elem.style.MozTransform = "rotateX("+degrees+"deg)";
  } else if(navigator.userAgent.match("MSIE")){
    elem.style.msTransform = "rotateX("+degrees+"deg)";
  } else if(navigator.userAgent.match("Opera")){
    elem.style.OTransform = "rotateX("+degrees+"deg)";
  } else {
    elem.style.transform = "rotateX("+degrees+"deg)";
  }
  looper = setTimeout('rotateByX(\''+el+'\','+speed+')',speed);
  degrees++;
  if(degrees > 359){
    degrees = 1;
    clearTimeout(looper);
  }
}

function scrollMe() {
  var objectHeight = document.getElementById("scrollSection").clientHeight;
  var scrollingHeight = document.getElementById("scrollSection").scrollHeight;
    var scrollingTop = document.getElementById("scrollSection").scrollTop;
    var scrolling = 1 - (scrollingTop / (scrollingHeight - objectHeight));
    document.getElementById("courtRotate").style.opacity = scrolling;
}