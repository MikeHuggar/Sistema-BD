descricaoA = document.querySelector("#textoHiddenA");
document.querySelector("#colapsadorA").addEventListener("click",()=>{ colapsarProjA("#colapsadorA")});
let showA = false;
function colapsarProjA(){
    if (showA == false){
        descricaoA.style.setProperty("display", "block");
        showA = true;
        document.querySelector("#colapsadorA").innerHTML = ("Mostrar Menos...")
    } else {
        descricaoA.style.setProperty("display", "none");
        showA = false;
        document.querySelector("#colapsadorA").innerHTML = ("Mostrar Mais...")
    }
};

descricaoB = document.querySelector("#textoHiddenB");
document.querySelector("#colapsadorB").addEventListener("click",()=>{ colapsarProjB("#colapsadorB")});
let showB = false;
function colapsarProjB(){
    if (showB == false){
        descricaoB.style.setProperty("display", "block");
        showB = true;
        document.querySelector("#colapsadorB").innerHTML = ("Mostrar Menos...")
    } else {
        descricaoB.style.setProperty("display", "none");
        showB = false;
        document.querySelector("#colapsadorB").innerHTML = ("Mostrar Mais...")
    }
};

descricaoC = document.querySelector("#textoHiddenC");
document.querySelector("#colapsadorC").addEventListener("click",()=>{ colapsarProjC("#colapsadorC")});
let showC = false;
function colapsarProjC(){
    if (showC == false){
        descricaoC.style.setProperty("display", "block");
        showC = true;
        document.querySelector("#colapsadorC").innerHTML = ("Mostrar Menos...")
    } else {
        descricaoC.style.setProperty("display", "none");
        showC = false;
        document.querySelector("#colapsadorC").innerHTML = ("Mostrar Mais...")
    }
};