$(window).on("load",function() {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    setTimeout(function(){
        try{
            document.getElementById("spinner").className = "hide";
            
        } catch(Exception){
            document.getElementById("bound").className = "hide";
        }     
    }, 1000);
    setTimeout(function(){
        document.getElementById("loader").className = "hidden";
        var x = document.getElementsByClassName("circle");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        document.getElementsByTagName('body')[0].style.overflow = 'visible';
    }, 2000);
});

$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});
$('#menu-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
});


function changeMenu(){
    
    var refogado = document.getElementById("refogado");
    var carne = document.getElementById("carne");
    
    switch(new Date().getDay()){
        case 1:
            carne.innerHTML = "";
            refogado.innerHTML = "Repolho refogado"; 
            break;
        case 2: 
            carne.innerHTML = "Linguiça assada";
            refogado.innerHTML = "Couve refogado, Beringela";
            break;
        case 3:
            carne.innerHTML = "Filé de frango [Assado / Empanado]";
            refogado.innerHTML = "Couve flor gratinada";
            break;
        case 4:
            carne.innerHTML = "Bife acebolado / Filé Suino";
            refogado.innerHTML = "Batata frita, Mandioca frita";
            break;
        case 5:
            carne.innerHTML = "Filé de merluza empanado";
            refogado.innerHTML="";
            break;
        default:
            carne.innerHTML = "Coxante assado";
            refogado.innerHTML = "Cuscuz, vagem com cenoura";
            break;
    }
    
}