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
};
// **************Animation écriture************************
const txtAnim = document.querySelector('.txt-animation');
let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
});
typewriter.typeString('Salah eddine M\'kharbech, ')
          .pauseFor(500)
          .changeDelay(20)
          .pauseFor(100)
          .typeString('<span>Développeur junior</span> !')
          .pauseFor(1000)
          .deleteChars(8)
          .typeString('<span style =" color: #49f08f;"> HTML</span> !')
          .pauseFor(1000)
          .deleteChars(6)
          .typeString('<span style =" color: #EA39ff;"> CSS</span> !')
          .pauseFor(1000)
          .deleteChars(5)
          .typeString('<span style =" color: #ff3964;"> Javascript</span> !')
          .pauseFor(1000)
          .deleteChars(12)
          .typeString('<span style =" color: rgb(236, 154, 45);"> PHP</span> !')
          .start();
//**************** */          