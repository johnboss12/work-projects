

var text = document.getElementById("text");
var preview = document.getElementById("preview")
var Logo_link; //= "https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1697702299/d11org/bf4fyds9xl4mdd4ksvac/howbert-logo.png";
var School_slogan; //="where learning happens beyond four walls";
var School_name;//="Howbert Elementary";
var out = '<div style="overflow:hidden;height:fit-content"><h1 style="text-align:center;">'+School_name+'</h1>\n<div style="text-align:right;display:block;">\n<img src="'+Logo_link+'" style="min-width:10%;max-width:40%;float:right;padding-right:10%;" alt="'+School_name+' Logo"></div>\n<div style="min-width:70%;">\n<h2 style="text-align:center;"> '+School_slogan+'</h2></div><div>';

function copy() {
  navigator.clipboard.writeText(out);


}








url.addEventListener('change', (event) => {
        Logo_link = url.value
        out = '<div style="overflow:hidden;height:fit-content"><h1 style="text-align:center;">'+School_name+'</h1>\n<div style="text-align:right;display:block;">\n<img src="'+Logo_link+'" style="min-width:10%;max-width:40%;float:right;padding-right:10%;" alt="'+School_name+' Logo"></div>\n<div style="min-width:70%;">\n<h2 style="text-align:center;"> '+School_slogan+'</h2></div><div>';
        preview.innerHTML=out;
        text.innerText=out;
        
    });
title.addEventListener('change', (event) => {
        School_name = title.value
        out = '<div style="overflow:hidden;height:fit-content"><h1 style="text-align:center;">'+School_name+'</h1>\n<div style="text-align:right;display:block;">\n<img src="'+Logo_link+'" style="min-width:10%;max-width:40%;float:right;padding-right:10%;" alt="'+School_name+' Logo"></div>\n<div style="min-width:70%;">\n<h2 style="text-align:center;"> '+School_slogan+'</h2></div><div>';
        preview.innerHTML=out;
        text.innerText=out;
        
    });
slogan.addEventListener('change', (event) => {
        School_slogan = slogan.value
        out = '<div style="overflow:hidden;height:fit-content"><h1 style="text-align:center;">'+School_name+'</h1>\n<div style="text-align:right;display:block;">\n<img src="'+Logo_link+'" style="min-width:10%;max-width:40%;float:right;padding-right:10%;" alt="'+School_name+' Logo"></div>\n<div style="min-width:70%;">\n<h2 style="text-align:center;"> '+School_slogan+'</h2></div><div>';
        preview.innerHTML=out;
        text.innerText=out;
        
    });







