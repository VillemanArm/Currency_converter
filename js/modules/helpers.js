function animate({timing, draw, duration}) {
    // подробности на сайте https://learn.javascript.ru/js-animation
    
    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
  
      draw(progress); // отрисовать её
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
      
      // подключение:
    //   animate({
    //     duration: 1000,
    //     timing(timeFraction) {
    //       return timeFraction;
    //     },
    //     draw(progress) {
    //       elem.style.width = progress * 100 + '%';
    //     }
    //   });
    });
  }

const digits = /[^\d\.]/g
const cyrillic = /[^а-я -]/gi
const email = /[^\w\d@-_\.\!\~\*\']/gi
const phone = /[^\d()-]/gi


const addValidaton = (input, regExp) => {
    input.addEventListener('input', (event) => {
        input.value = input.value.replace(regExp, '')
    })
}


export {animate, addValidaton}