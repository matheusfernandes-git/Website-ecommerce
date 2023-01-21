function changeSize(){
    if(innerWidth >= 768){
        links.style.display == 'block'
    }else{
        links.style.display == 'none'
    }
}

function clickmenu(){
    const icone = document.getElementById('icon')
    if (links.style.display == 'block'){
        icone.src = 'img/close.png'
        links.style.display = 'none'
    }else{
        links.style.display = 'block'
    }
}
document.getElementById('icon').src = 'img/close.png';