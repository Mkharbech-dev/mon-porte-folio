const btnMenu = document.querySelector('.btn-rond')
const nav = document.querySelector('.navigation');
const btnDetail = document.querySelectorAll('.detail-menu-item');
const btnLigneUnique = document.querySelector('.btn-ligne-unique');
const salah = document.querySelector('.btn-ligne-unique');
const croix = 'x'

btnMenu.addEventListener(('click'),  ()=>{
    // console.log("salah");
   
    if (btnMenu.classList.toggle('active')){
        salah.innerHTML= croix;
    }else{
        salah.innerHTML= "";
    }; 
    nav.classList.toggle("menu-visible");
})
// si je suis en mode tablette ou mobile en cliquant sur un liens de nav ca enleve la barre et remettre le bouton initial
if(window.matchMedia('(max-width:1300px)')){
    btnDetail.forEach(item=>{
        item.addEventListener('click',()=>{
            nav.classList.toggle('menu-visible')
            btnMenu.classList.remove('active')
            salah.innerHTML= ""
        })
    })
}