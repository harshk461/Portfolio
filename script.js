window.onscroll=function(){scrollFunction()};
function scrollFunction(){
    if ((document.body.scrollTop>20 || document.documentElement.scrollTop>20 )){
        document.getElementById('title').style.color='#fff';
        document.getElementById('span_title').style.color='dodgerblue';
        document.getElementById('navbar').style.backgroundColor="crimson";
        document.getElementById('navbar').style.padding="10px";
    }   
    else{
        document.getElementById('title').style.color='#fff'
        document.getElementById('span_title').style.color='crimson'
        document.getElementById('navbar').style.padding="20px";
        document.getElementById('navbar').style.backgroundColor='transparent';
    }
}
var icon=document.getElementById('icon');
icon.onclick=function(){
    document.body.classList.toggle('dark-theme');
}