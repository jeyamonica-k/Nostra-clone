var topNav=document.querySelector(".topnav")
var close=document.querySelector(".close")
close.addEventListener("click",function(){
  topNav.style.display="none"
})

var icon=document.getElementById("menubar")
icon.addEventListener("click",function(){
  sideNav.style.display="block"
})
 var closeSidenav=document.querySelector(".close_sidenav")
 var sideNav=document.querySelector(".sidenav")
 closeSidenav.addEventListener("click",function(){
  sideNav.style.display="none"
  
 })