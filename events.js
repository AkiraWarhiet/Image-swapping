




document.getElementById('thumbnail1').addEventListener('click', function () {
    if(src="images/elephant.jpg"){
        document.getElementById('idBig').src = "images/elephant.jpg";
    }

    else (src="images/foto2.jpg") {
        document.getElementById("idBig").src = "images/foto2.jpg";
        } 
        
         
})

document.getElementById('thumbnail2').addEventListener('click', function () { 
    if (src="images/giraffe.jpg") {
        document.getElementById('idBig').src = "images/giraffe.jpg";
    }
    else (src="images/foto1.jpg"){
        document.getElementById('idBig').src = "images/foto1.jpg";
    }
})

document.getElementById('thumbnail3').addEventListener('click', function () {
    if (src="images/duck.jpg") {
        document.getElementById('idBig').src = "images/duck.jpg";  
    }
    else (src="images/foto3.jpg"){
        document.getElementById('idBig').src = "images/foto3.jpg"; 
    }
})





document.getElementById('idBig').addEventListener('dblclick', function(){
    document.getElementById('idBig').src = "images/foto1.jpg";
    document.getElementById('thumbnail1').src = "images/foto2.jpg";
    document.getElementById('thumbnail2').src = "images/foto1.jpg";
    document.getElementById('thumbnail3').src = "images/foto3.jpg";
})