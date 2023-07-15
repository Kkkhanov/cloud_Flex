let acceptButton = document.getElementById('accept');
const cookiesBlock = document.querySelectorAll('.hide-cookies');
let bird = document.getElementById('bird');
let form = document.getElementById('form');


acceptButton.addEventListener('click', ()=>{
   cookiesBlock.forEach(element => {
        element.style.display = 'none'
   });
   bird.setAttribute('class', 'bird')
   function hideBird(){
        bird.style.display = 'none'
   }
   setTimeout(hideBird, 800)
});


function f1(){
    let str = 'Данные формы' + '\n';
    let elems = form.elements
    for (x in elems){
        if (x == elems.length-1){break}
        if (elems[x].type!='checkbox' && elems[x].type!= 'radio'){
            if (elems[x].name == ''){continue}
            if (elems[x].value == undefined){continue}
            str += elems[x].name+ ' '
            str += elems[x].value + '\n'
        }
        
    }
   
   telegram(str, token, chatid)
    return false
}


function telegram(str, token, chatid){
    let z=$.ajax({
        type: "POST",
        url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
        data: "parse_mode=HTML&text="+encodeURIComponent(str),
        }).then(alert('you will be contacted for more information') )
     
}

let token = '5730344248:AAHqNHpJgS7D960z4ZsNEVe4O5h59BoiBtU'
let chatid = '1111116283'
let bot = 'Testttttttttttttttttttitbot';
form.onsubmit = f1;