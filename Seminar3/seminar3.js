function functie_pe_buton() 
{
    document.getElementById("id").innerHTML = 'Seminar Multimedia nr 3';
}

function calcul() {
    document.getElementById("id").innerHTML = 3+2+"Seminar "; 
}

function schimbapoza() {
    var img1 = "https://www.w3schools.com/images/picture.jpg";
    var img2 = "https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&dpr=1&w=500";
    
    var imgElement = document.getElementById('poza');
 
    imgElement.src = (imgElement.src === img1) ? img2 : img1;
}

function genereaza() {
    for(let i=0; i<100; i++)
    {
        console.log(Math.random()*256|0);
    }
}

function bigImg() {
    var x = document.getElementById("poza");
    x.style.height="700px";
    x.style.width="700px";
}

function small() {
 var x = document.getElementById("poza");
 x.style.height="100px";
 x.style.width="100px";
}