function changeSize(){
    if(innerWidth >= 768){
        links.style.display == 'block'
    }else{
        links.style.display == 'none'
    }
}

function clickMenu(){
    if (links.style.display == 'block'){
        links.style.display = 'none'
        document.getElementById('img').src = '../img/menu-aberto.png';
    }else{
        links.style.display = 'block'
        document.getElementById('img').src = '../img/closed3.png';
    }
}
