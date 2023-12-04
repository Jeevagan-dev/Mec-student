var nav = document.getElementsByClassName('menu')[0];

nav.addEventListener('click',function(){
    


    // alert('clicked');
    let navList = document.getElementById('nav-list');
    
    navList.classList.toggle('disp-ul');
});

var ul = document.getElementById('nav-list');
var list = document.getElementsByClassName('nav-items');

for(let i=0;i<list.length ;i++){
    list[i].addEventListener('click',function(){
        ul.classList.remove('disp-ul');
    })
}



// for(let i=0;i<list.length ;i++){
//     list[i].addEventListener('click',function(){
//         ul.classList.remove('no-ul');
//     },100)
// }