var messages=document.getElementById("messages");
var textbox=document.getElementById("textbox");
var button=document.getElementById("button");
var messages1=document.getElementById("messages1");
var textbox1=document.getElementById("textbox1");
var button1=document.getElementById("button1");

button.addEventListener("click", function(){
var newMessages=document.createElement("li");
var sameMessages=document.createElement("li");
var time = new Date();
let p=document.createElement('li');
p.innerHTML = textbox.value;
let t=document.createElement('time');
t.innerHTML = time.getHours()+":"+time.getMinutes();;
newMessages.appendChild(p);
newMessages.appendChild(t);

sameMessages.innerHTML = textbox.value;
messages.appendChild(newMessages);
messages1.appendChild(sameMessages);
sameMessages.classList.add('user');
newMessages.classList.add('user1');


textbox.value=" ";



});


button1.addEventListener("click", function(){
var newMessages=document.createElement("li");
var sameMessages=document.createElement("li");
var times = new Date();
var p=document.createElement('li');
p.innerHTML=textbox1.value;
var t=document.createElement("time");
t.innerHTML=times.getHours()+":"+times.getMinutes();
newMessages.appendChild(p);
newMessages.appendChild(t);
sameMessages.innerHTML = textbox1.value;
messages1.appendChild(newMessages);
messages.appendChild(sameMessages);

sameMessages.classList.add('user' );
newMessages.classList.add('user1');
textbox1.value=" ";

});

var x = document.getElementById("myAudio"); 
function playAudio(){
    x.play();
}


    

  