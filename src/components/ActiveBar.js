
export function ActiveBar(tab){

    var i,x,y;
    x =document.getElementsByClassName("nav".li);
    for (i = 0; i < x.length; i++){
        x[i].className = x[i].className.replace(" w3-red", ""); 
    }
    y = document.getElementById(tab);
    document.write('this has run')
}