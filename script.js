//footer 
var welcome;  
var date = new Date();  
var hour = date.getHours();  
var minute = date.getMinutes();  
var second = date.getSeconds();  
if (minute < 10) {  
minute = "0" + minute;  
}  
if (second < 10) {  
second = "0" + second;  
}  
if (hour < 12) {  
welcome = "good morning I am Anslem Lumumba";  
} else if (hour < 17) {  
welcome = "good afternoon I am Anslem Lumumba";  
} else {  
welcome = "good evening i am Anslem Lumumba";  
}  
document.getElementById('greet').innerText= welcome
document.getElementById('time').innerText=hour + ':' + minute + ':' + second



//light mode/dark mode toggle
let btnText = document.getElementById("btn");
function change() {
   let btn = document.body;
   btn.classList.toggle("dark");
   if (btnText.innerHTML === "Normal Mode") {
      btnText.innerHTML = "Dark Mode!";
   } else {
      btnText.innerHTML = "Normal Mode";
   }}

   /*let download=document.getElementById("btn")
    download.addEventListener("click", function downloadFile() {
      window.open("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg")
   })*/