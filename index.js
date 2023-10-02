const arrow=document.getElementById("rightarrow");
const arrow2=document.getElementById("leftarrow");
const car11=document.getElementById("car11");
const car12=document.getElementById("car12");
const car13=document.getElementById("car13");
const car14=document.getElementById("car14");
const car15=document.getElementById("car15");
const car16=document.getElementById("car16");

const hide=document.getElementById("moveall");
const hide1=document.getElementById("arrowcon");
const hide2=document.getElementById("hide2");
const hide3=document.getElementById("hide3");
const hide4=document.getElementById("hide4");
const hide5=document.getElementById("hide5");
const hide6=document.getElementById("hide6");
const hide22=document.getElementById("moveallleft");
hide.addEventListener('click',()=>{
console.log("wo");
   hide1.style.display="none";
   hide2.style.display="none";
   hide3.style.display="none";
   hide4.style.display="flex";
   hide5.style.display="flex";
   hide6.style.display="flex";
});

hide22.addEventListener('click',()=>{
    hide4.style.display="none";
    hide5.style.display="none";
    hide6.style.display="none";
    hide1.style.display="flex";
    hide3.style.display="flex";
    hide2.style.display="flex";
});

const bug=document.getElementById("hidetwo");

const dialog=document.getElementById("opendia");
const openit=document.getElementById("get");
const donate=document.getElementById("donateit");
const collab=document.getElementById("collab");
const volent=document.getElementById("volent");
const hidetwo=document.getElementById("donatedialog");
const hidetwo2=document.getElementById("hidetwo2");
const det=document.getElementById("det");
dialog.addEventListener('click',()=>{
    if(openit.style.display==='none'){
        openit.style.display="flex";
    }else{
        openit.style.display="none";
    }
    collab.style.display="none";
    volent.style.display="flex";
    donate.style.display="none";
    det.style.display="none";
});
hidetwo.addEventListener('click',()=>{
    if(openit.style.display==='none'){
        openit.style.display="flex";
    }else{
        openit.style.display="none";
    }
    collab.style.display="none";
    volent.style.display="none";
    donate.style.display="flex";
    det.style.display="block";
});
hidetwo2.addEventListener('click',()=>{
    if(openit.style.display==='none'){
        openit.style.display="flex";
    }else{
        openit.style.display="none";
    }
    collab.style.display="flex";
    volent.style.display="none";
    donate.style.display="none";
    det.style.display="none";
});

bug.addEventListener('click',()=>{
    if(openit.style.display==='none'){
        openit.style.display="flex";
    }else{
        openit.style.display="none";
    }
    collab.style.display="flex";
    volent.style.display="none";
    donate.style.display="none";
    det.style.display="none";
});
const close=document.getElementById("closedialog");
close.addEventListener('click',()=>{
    openit.style.display="none";
    collab.style.display="none";
    volent.style.display="none";
    donate.style.dialog="none";
    det.style.display="none";
});