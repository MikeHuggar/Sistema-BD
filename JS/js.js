descricaoA = document.querySelector("#textoHiddenA");
document.querySelector("#colapsadorA").addEventListener("click",()=>{ colapsarProjA("#colapsadorA")});
let showA = false;
function colapsarProjA(){
    if (showA == false){
        descricaoA.style.setProperty("display", "block");
        showA = true;
    } else {
        descricaoA.style.setProperty("display", "none");
        showA = false;
    }
};

descricaoB = document.querySelector("#textoHiddenB");
document.querySelector("#colapsadorB").addEventListener("click",()=>{ colapsarProjB("#colapsadorB")});
let showB = false;
function colapsarProjB(){
    if (showB == false){
        descricaoB.style.setProperty("display", "block");
        showB = true;
    } else {
        descricaoB.style.setProperty("display", "none");
        showB = false;
    }
};

descricaoC = document.querySelector("#textoHiddenC");
document.querySelector("#colapsadorC").addEventListener("click",()=>{ colapsarProjC("#colapsadorC")});
let showC = false;
function colapsarProjC(){
    if (showC == false){
        descricaoC.style.setProperty("display", "block");
        showC = true;
    } else {
        descricaoC.style.setProperty("display", "none");
        showC = false;
    }
};