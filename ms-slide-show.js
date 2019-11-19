(function(){
    function makeSlideshow(slides){
        // const slides = document.getElementById(slidesId)
        const prev = document.getElementsByClassName('prev-button')
        console.log(prev)
        const next = document.getElementsByClassName('next-button')
        const slidesInner = slides.querySelector('.slides-inner')
        const images = slidesInner.querySelectorAll('img')
    
        const delay = parseInt(slides.dataset.delay) //how long does it stay after transition 
        const transition = parseInt(slides.dataset.transition) //how fast is the transition
        slidesInner.style.transition = `${transition}ms`
    
        const slidesWidth = slides.clientWidth
        const slidesHeight = slides.clientHeight

        let index = 0
        prev.onclick = function(e){
          console.log('prev')
          if (index == 0) {
            index = images.length - 1
          } else {
            index -= 1
          }
          
          slidesInner.style.transform = `translate3d(${index * -slidesWidth}px, 0, 0)`
        }
        next.onclick = function(e){
          index += 1
          slidesInner.style.transform = `translate3d(${index * -slidesWidth}px, 0, 0)`
        }
        // setInterval(callback, timeMS)
        setInterval(function(){
          
          
          index += 1
          if(index === images.length){ 
            index = 0
          }
          // CSS - transform: translate3d(0, 0, 0);
          slidesInner.style.transform = `translate3d(0, ${index * -slidesHeight}px, 0)`
    
        }, delay)
      } //end makeSlideshow
      const slideshows = document.querySelectorAll('.ms-slide-show')
      for (let i = 0; i < slideshows.length ; i+=1){
          makeSlideshow(slideshows[i])
      }
    
})() //IIFE - Immediately Invoked Function Expression

