let keyclick = {
    49: '#boom',
    50: "#clap",
    51: "#hihat",
    52: "#kick",
    53: "#openhat",
    54: "#ride",
    55: "#snare",
    56: "#tink",
    57: "#tom"
};

const cont = document.querySelector('.container');
cont.addEventListener('click', (e) => {
    console.log(e);
    if (e.target.className === 'key') {
        let id = e.target.id;
        clickme(id);
    }
    else{
        let id = e.target.parentElement.id;
        clickme(id);
    }
})

document.onkeydown = (e) => {
    let b = document.querySelector(keyclick[e.keyCode]);
    if (b) {
        b.currentTime = 0;
    }
    b.play();
    document.querySelector(keyclick[e.keyCode] + '_').classList.add('trans');
    setTimeout(() => {
        document.querySelector(keyclick[e.keyCode] + '_').classList.remove('trans');
    }, 100);
    console.log(e);
}
function clickme(id){
    let n = id.length;
        n = n - 1;
        id = id.substring(0,n);
        console.log(id);
        let b = document.querySelector('#'+id);
        if (b) {
            b.currentTime = 0;
        }
        b.play();
        document.querySelector('#'+id + '_').classList.add('trans');
        setTimeout(() => {
            document.querySelector('#'+id + '_').classList.remove('trans');
        }, 100);
        console.log(n);
}