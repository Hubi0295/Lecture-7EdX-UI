window.onscroll = () =>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
        document.querySelector("body").style.backgroundColor="red";
    }
}