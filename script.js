let yes = document.getElementById('yes')
let no = document.getElementById('no')

yes.addEventListener('click', yesClick)
no.addEventListener('mouseover', moveNo)

function yesClick() {
    alert("<3")
}

function moveNo() {
    let x = Math.round(Math.random() * (window.innerWidth/10));
    let y = Math.round(Math.random() * (window.innerHeight/10));
    no.style.left = x + 'px';
    no.style.top = y + 'px';

}