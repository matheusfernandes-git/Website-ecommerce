
function clickMenu(){
    if (links.style.display == 'block'){
        links.style.display = 'none'
        document.getElementById('img').src = 'img/menu-aberto.png';
    }else{
        links.style.display = 'block'
        document.getElementById('img').src = 'img/closed3.png';
    }
}
