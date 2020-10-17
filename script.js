let keyclick = {
    49:'#boom',
    50:"#clap",
    51:"#hihat",
    52:"#kick",
    53:"#openhat",
    54:"#ride",
    55:"#snare",
    56:"#tink",
    57:"#tom"

};
document.onkeydown=(e)=>{
    let b = document.querySelector(keyclick[e.keyCode]);
    if(b){
       b.currentTime=0;
    }
    b.play();
    console.log(e);
}
function play(keycode){
  
}