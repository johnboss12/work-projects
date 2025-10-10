

var text = document.getElementById("text");
var preview = document.getElementById("preview")
var Logo_link; 
var School_slogan;
var School_name;
var borderColor =[0,0,0];
var out;
var theme = 0;
var themeCount = 10;


function themeUp(){if(theme==themeCount-1){theme=0;}theme++;colorCheck();updatePreview();}

function updatePreview(){
        Logo_link = url.value
        School_name = title.value
        School_slogan = slogan.value
        out = '<div style="overflow:hidden;height:fit-content; border:5px solid rgb('+borderColor[0]+','+borderColor[1]+','+borderColor[2]+')"><h1 style="text-align:center; color:rgb('+borderColor[0]+','+borderColor[1]+','+borderColor[2]+')">'+School_name+'</h1>\n<div style="text-align:right;display:block;">\n<img src="'+Logo_link+'" style="min-width:10%;max-width:40%;float:right;padding-right:10%;" alt="'+School_name+' Logo"></div>\n<div style="min-width:70%;">\n<h2 style="text-align:center;"> '+School_slogan+'</h2></div><div>';
        preview.innerHTML=out;
        text.innerText=out; 
        colorCheck();
}

function colorCheck(){
const colorThief = new ColorThief();
const img = document.querySelector('img');
img.crossOrigin = 'Anonymous';
console.log(img);
 if (img.complete) {
      var color = colorThief.getPalette(img,themeCount);
        console.log(color);
         //preview.style.border = "5px solid rgb("+color[theme][0]+","+color[theme][1]+","+color[theme][2]+")";
         borderColor[0] =color[theme][0];
         borderColor[1] =color[theme][1];
         borderColor[2] =color[theme][2];
    } else {
      img.addEventListener('load', function() {
        var color = colorThief.getPalette(img,themeCount);
        console.log(color);
         //preview.style.border = "5px solid rgb("+color[theme][0]+","+color[theme][1]+","+color[theme][2]+")";
         borderColor[0] =color[theme][0];
         borderColor[1] =color[theme][1];
         borderColor[2] =color[theme][2];
      });
    }
}

function copy() {navigator.clipboard.writeText(out);}

url.addEventListener('change', (event) => {updatePreview(); });
title.addEventListener('change', (event) => {updatePreview();});
slogan.addEventListener('change', (event) => {updatePreview();});







