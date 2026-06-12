let greetings=["Good Morning","Good Afternoon","Good Evening","Good Night"];
let num=0;
function greet_afternoon()
{
    let text = document.getElementById("greet");
    text.innerText =greetings[num];
    num+=1;
    if(num>3){num=0;}
}
function turn_on(){
    let light1 = document.getElementById("on");
    light1.src ="/Files/light_on.jpeg";
}
function turn_off(){
    let light2 = document.getElementById("on");
    light2.src ="/Files/light_off.jpeg";
}

function Change_color()
{
    let color = document.getElementById("cap");
    color.style.backgroundColor = "brown";
    let txt1= document.getElementById("Data");
    txt1.style.backgroundColor = "white";
    let txt2 = document.getElementById("greet");
    txt2.style.backgroundColor = "darkblue";
}