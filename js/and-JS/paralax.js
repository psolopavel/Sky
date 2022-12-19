"use strict"
window.onload = function () {
   const paralax = document.querySelector('.main-sky')
   if (paralax) {

      const n1 = document.querySelector('#main-sky-1')
      const n2 = document.querySelector('#main-sky-2')
      const n3 = document.querySelector('#main-sky-3')
      const n4 = document.querySelector('#main-sky-4')
      const n5 = document.querySelector('#main-sky-5')
      const n6 = document.querySelector('#main-sky-6')
      const n7 = document.querySelector('#main-sky-7')
      /*--*/
      const forn1 = 3
      const forn2 = 2
      const forn3 = 4
      const forn4 = 2
      const forn5 = 3
      const forn6 = 4
      const forn7 = 2

      const speed = 0.05

      let positionX = 0, positionY = 0;
      let coordXproces = 0, coordsYproces = 0;

      function setMouseParalaxStyle() {
         const distX = coordXproces - positionX
         const distY = coordsYproces - positionY

         positionX = positionX + (distX * speed)
         positionY = positionY + (distY * speed)
         /*--*/
         n1.style.cssText = `transform: translate(${-positionX / forn1}%, ${-positionY / forn1}%);`;
         n2.style.cssText = `transform: translate(${-positionX / forn2}%, ${positionY / forn2}%);`;
         n3.style.cssText = `transform: translate(${positionX / forn3}%, ${positionY / forn3}%);`;
         n4.style.cssText = `transform: translate(${positionX / forn4}%, ${-positionY / forn4}%);`;
         n5.style.cssText = `transform: translate(${positionX / forn5}%, ${positionY / forn5}%);`;
         n6.style.cssText = `transform: translate(${-positionX / forn6}%, ${-positionY / forn6}%);`;
         n7.style.cssText = `transform: translate(${positionX / forn7}%, ${positionY / forn7}%);`;

         requestAnimationFrame(setMouseParalaxStyle)
      }
      setMouseParalaxStyle();

      paralax.addEventListener('mousemove', function (event) {
         const paralaxWidth = paralax.offsetWidth
         const paralaxHeight = paralax.offsetHeight

         const coordX = event.pageX - paralaxWidth / 2
         const coordY = event.pageY - paralaxHeight / 2

         coordXproces = coordX / paralaxWidth * 100;
         coordsYproces = coordY / paralaxHeight * 100
      })
   }


   const comp = document.querySelector('.main-comp')
   if (comp) {

      /*--*/
      const forn1 = 5
      const forn2 = 7
      const forn3 = 6

      const speed = 0.05

      let positionX = 0, positionY = 0;
      let coordXproces = 0, coordsYproces = 0;

      function setMouseParalaxStyle() {
         const distX = coordXproces - positionX
         const distY = coordsYproces - positionY

         positionX = positionX + (distX * speed)
         positionY = positionY + (distY * speed)
         /*--*/

         document.querySelector('#imp-1').style.cssText = `transform: translate(${-positionX / forn1}%, ${positionY / forn1}%);`;
         document.querySelector('.main-comp__images').style.cssText = `transform: translate(${-positionX / forn2}%, ${positionY / forn2}%);`;
         document.querySelector('#imp-3').style.cssText = `transform: translate(${-positionX / forn3}%, ${-positionY / 3}%);`;

         requestAnimationFrame(setMouseParalaxStyle)
      }
      setMouseParalaxStyle();

      comp.addEventListener('mousemove', function (event) {
         const paralaxWidth = comp.offsetWidth
         const paralaxHeight = comp.offsetHeight

         const coordX = event.pageX - paralaxWidth / 2
         const coordY = event.pageY - paralaxHeight / 2

         coordXproces = coordX / paralaxWidth * 100;
         coordsYproces = coordY / paralaxHeight * 100
      })
   }

   const ds = document.querySelector('.main-started')

   if (ds) {

      /*--*/
      const forn1 = 2
      const forn2 = 4
      const forn3 = 3

      const speed = 0.05

      let positionX = 0, positionY = 0;
      let coordXproces = 0, coordsYproces = 0;

      function setMouseParalaxStyle() {
         const distX = coordXproces - positionX
         const distY = coordsYproces - positionY

         positionX = positionX + (distX * speed)
         positionY = positionY + (distY * speed)
         /*--*/

         document.querySelector('#bs-1').style.cssText = `transform: translate(${-positionX / forn1}%, ${positionY / forn1}%);`;
         document.querySelector('#bs-2').style.cssText = `transform: translate(${-positionX / forn2}%, ${positionY / forn2}%);`;
         document.querySelector('#bs-3').style.cssText = `transform: translate(${-positionX / forn3}%, ${-positionY / 3}%);`;
         document.querySelector('#bs-4').style.cssText = `transform: translate(${-positionX / forn2 - 1}%, ${positionY / forn2 - 1}%);`;
         document.querySelector('#bs-5').style.cssText = `transform: translate(${-positionX / forn3}%, ${-positionY - 2}%);`;

         requestAnimationFrame(setMouseParalaxStyle)
      }
      setMouseParalaxStyle();

      ds.addEventListener('mousemove', function (event) {
         const paralaxWidth = ds.offsetWidth
         const paralaxHeight = ds.offsetHeight

         const coordX = event.pageX - paralaxWidth / 2
         const coordY = event.pageY - paralaxHeight / 2

         coordXproces = coordX / paralaxWidth * 100;
         coordsYproces = coordY / paralaxHeight * 100
      })
   }
   const bkl = document.querySelector('.blue-cloud')
   if (bkl) {

      /*--*/
      const forn1 = 15
      const forn2 = 20
      const forn3 = 26

      const speed = 0.05

      let positionX = 0, positionY = 0;
      let coordXproces = 0, coordsYproces = 0;

      function setMouseParalaxStyle() {
         const distX = coordXproces - positionX
         const distY = coordsYproces - positionY

         positionX = positionX + (distX * speed)
         positionY = positionY + (distY * speed)
         /*--*/

         document.querySelector('#bs-6').style.cssText = `transform: translate(${positionX / forn1 - 40}%, ${-positionY / forn1}%);`;
         document.querySelector('#bs-7').style.cssText = `transform: translate(${-positionX / forn2 - 20}%, ${positionY / forn2 - 10}%);`;
         document.querySelector('#bs-8').style.cssText = `transform: translate(${-positionX / forn3}%, ${-positionY / forn3 + 50}%);`;
         document.querySelector('#bs-9').style.cssText = `transform: translate(${-positionX / forn3}%, ${positionY / forn2}%);`;

         requestAnimationFrame(setMouseParalaxStyle)
      }
      setMouseParalaxStyle();

      bkl.addEventListener('mousemove', function (event) {
         const paralaxWidth = bkl.offsetWidth
         const paralaxHeight = bkl.offsetHeight

         const coordX = event.pageX - paralaxWidth / 2
         const coordY = event.pageY - paralaxHeight / 2

         coordXproces = coordX / paralaxWidth * 100;
         coordsYproces = coordY / paralaxHeight * 100
      })
   }
}