descricao = document.querySelector("#desc");
document.querySelector("#colapsadorA").addEventListener("click",()=>{ colapsarProj("#colapsadorA")});
let show = false;
function colapsarProj(){
    if (show == false){
        descricao.style.setProperty("visibility", "visible");
        document.querySelector(".img-dropdown").style.setProperty("max-height", "fit-content");
        show = true;
    } else {
        descricao.style.setProperty("visibility", "hidden");
        document.querySelector(".img-dropdown").style.setProperty("max-height", "15vh");
        show = false;
    }
};