(function(){
    function makeSlideshow(slides){
        // const slides = document.getElementById(slidesId)
        const slidesInner = slides.querySelector('.slides-inner')
        const images = slidesInner.querySelectorAll('img')
    
        const delay = parseInt(slides.dataset.delay) //how long does it stay after transition 
        const transition = parseInt(slides.dataset.transition) //how fast is the transition
        slidesInner.style.transition = `${transition}ms`
    
        const slidesWidth = slides.clientWidth
        let index = 0
        // setInterval(callback, timeMS)
        setInterval(function(){
          index += 1
          if(index === images.length){ 
            index = 0
          }
          // CSS - transform: translate3d(0, 0, 0);
          slidesInner.style.transform = `translate3d(${index * -slidesWidth}px, 0, 0)`
    
        }, delay)
      } //end makeSlideshow
      const slideshows = document.querySelectorAll('.ms-slide-show')
      for (let i = 0; i < slideshows.length ; i+=1){
          makeSlideshow(slideshows[i])
      }
    
})() //IIFE - Immediately Invoked Function Expression

