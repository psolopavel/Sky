const dot = document.querySelectorAll('#dot span')
const perc = document.querySelector('.main-pupels-left__percent')
const ar_items = document.querySelectorAll('.main-arrow__item >p')
dot.forEach(element => {
   document.addEventListener('mousemove', function (event) {
      element.style.cssText = `
         border: 2px solid rgba(94, 128, 254, ${Math.abs((element.getBoundingClientRect().left - event.clientX) / 150)});
      `
   })
});
document.addEventListener('scroll', function () {
   if (scrollY > 10) {
      document.querySelector('header').classList.add('_scroll-header')
   }
   if (scrollY < 10) {
      document.querySelector('header').classList.remove('_scroll-header')
   }
   let i = 0
   if (!perc.classList.contains('_active')) {
      let intr = setInterval(function () {
         if (i <= 89) {
            perc.innerHTML = `${i++}%`
         }
         else {
            clearInterval(intr)
         }
      }, 20)
   }
})

let y = 0
ar_items.forEach(element => {
   ++y
   element.setAttribute('data-parent', `${y}`)
   element.nextElementSibling.setAttribute('data-submenu', `${y}`)
});
