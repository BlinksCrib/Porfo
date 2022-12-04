/*=============== SHOW MENU ===============*/
const sideMenu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('.nav__close');
// const activeLink = document.querySelector( '.nav__menu ul li a');

menuBtn.addEventListener('click' , () => {
    sideMenu.classList.remove("display");
    sideMenu.classList.add("show")
})
closeBtn.addEventListener('click' , () => {
    sideMenu.classList.add("display")
})

// activeLink.addEventListener('click' , () => {
//     sideMenu.style.display ='none';
// })


function closenav(){
    sideMenu.classList.remove("show");
    sideMenu.classList.add("display");
    // console.log("hey");
}


/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header =document.getElementById('header')

    if (this.scrollY>=50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper ('.home-swiper',{
      spaceBetween:16,
      centeredSlider: true,
      slidesPerview:'auto',
      loop:'true'
    })
/*=============== SERVICES TAB ===============*/

    const tabs = document.querySelectorAll('[data-target]'),
                tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach( tab => {
          tab.addEventListener("click", () =>{
              const target=document.querySelector(tab.dataset.target)

              tabContent.forEach(tabContents =>{
                  tabContents.classList.remove('servics__active')
              })
              target.classList.add('servics__active')
              
              tabs.forEach(tab =>{
                tab.classList.remove('servics__active')
            })
           tab.classList.add('servics__active')
          })
      })        
        


/*=============== LIGHTBOX GALLERY ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/