var icon=document.getElementById("menubar")
icon.addEventListener("click",function(){
  sideNav.style.display="block"
})
 var closeSidenav=document.querySelector(".close_sidenav")
 var sideNav=document.querySelector(".sidenav")
 closeSidenav.addEventListener("click",function(){
  sideNav.style.display="none"
  
 })