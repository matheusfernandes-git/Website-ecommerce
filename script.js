function changeSize(){
    if(innerWidth >= 768){
        links.style.display == 'block'
    }else{
        links.style.display == 'none'
    }
}

function clickmenu(){
    if (links.style.display == 'block'){
        links.style.display = 'none'
    }else{
        links.style.display = 'block'
    }
}