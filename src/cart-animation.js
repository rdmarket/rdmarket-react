export default function animar(){

    let div_ = document.getElementById("notification");

    div_.style.display="block"

    setTimeout(function(){
        div_.style.display="none";
    },1300)

}