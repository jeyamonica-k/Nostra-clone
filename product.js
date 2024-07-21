var topbarclose = document.getElementById("topbar_close")
var topbar=document.getElementById("top_bar")
topbarclose.addEventListener("click",function(){
  topbar.style.display="none"
})
var sideBar=document.querySelector(".sidebar")
var icon=document.getElementById("menu_icon")
icon.addEventListener("click",function(){
  sideBar.style.left="0%"
})

var close=document.querySelector(".close")
close.addEventListener("click",function(){
  sideBar.style.display="none"
})
