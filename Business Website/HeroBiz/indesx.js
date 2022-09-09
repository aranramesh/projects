const addinput = document.querySelector('#addinput');

const addbtn = dovument.querySelector('#addbtn');

function addlists(){
    if(addinput.value ==== ''){
        alert('Enter The Name Pls')
    }else {
        const ul = divlist.querySelector('ul');
        const li = document.createElement('li');
        li.innerHTML='';
        addinput.value ='';
        ul.appendchild(li);
    }
}


addbtn.addEventListener('click',() =>{
    addlists();
});

addinput.addEventListener('keyup',(evvent) =>{
    if(event.which===13){
        addlists();
    }
})