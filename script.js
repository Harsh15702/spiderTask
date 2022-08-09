let btn=document.getElementById('myBtn');
let rand=document.getElementById('show');
let btn2=document.getElementById('myBtn2');
let tossg=document.getElementById('toss');





btn.addEventListener('click',function(){
    const random=Math.floor(Math.random()*5)+1;
    rand.innerText=random;
})
btn2.addEventListener('click',function(){
    const random=Math.floor(Math.random()*2)+1;
    tossg.innerText=random;
})

let turn=1;
if(toss===1){
    switch(random){
        case 1:{
            switch(turn){
                case 1:
                    ctx=document.getElementById("canvas").getContext('2d');function head();
                turn+=1;

                case 2: ctx=document.getElementById("canvas").getContext('2d');
                
            function head(); function eyes();
                turn+=1;
                break;
                case3:ctx=document.getElementById("canvas").getContext('2d');
                 function head(); function eyes();function arms();
                turn+=1;
                break;
            
                case4: function head(); function eyes();function arms();function body();
                 turn+=1;
                 break;
 case5:function head(); function eyes();function arms();function body(); function legs();

            
            }

            ctx=document.getElementById("canvas").getContext('2d');
            fu
        }

    }
}
var canvas = document.getElementById("canvas");
if (canvas.getContext("2d")) { // Check HTML5 canvas support
context = canvas.getContext("2d"); // get Canvas Context object
function head(){
context.beginPath();
context.fillStyle = "bisque"; // #ffe4c4
context.arc(200, 50, 30, 0, Math.PI * 2, true); // draw circle for head

// (x,y) center, radius, start angle, end angle, anticlockwise
context.fill();}

function smile(){
context.beginPath();
context.strokeStyle = "red"; // color
context.lineWidth = 3;
context.arc(200, 50, 20, 0, Math.PI, false); // draw semicircle for smiling
context.stroke();
}

 function eyes(){
context.beginPath();
context.fillStyle = "green"; // color
context.arc(190, 45, 3, 0, Math.PI * 2, true); // draw left eye
context.fill();
context.arc(210, 45, 3, 0, Math.PI * 2, true); // draw right eye
context.fill();
 }

function body(){
context.beginPath();
context.moveTo(200, 80);
context.lineTo(200, 180);
context.strokeStyle = "navy";
context.stroke();
}

function arms(){
context.beginPath();
context.strokeStyle = "#0000ff"; // blue
context.moveTo(200, 80);
context.lineTo(150, 130);
context.moveTo(200, 80);
context.lineTo(250, 130);
context.stroke();
}

function legs(){
context.beginPath();
context.strokeStyle = "orange";
context.moveTo(200, 180);
context.lineTo(150, 280);
context.moveTo(200, 180);
context.lineTo(250, 280);
context.stroke();
}