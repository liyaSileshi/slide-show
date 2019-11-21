(function(){
    function makeSlideshow(slides){
        // const slides = document.getElementById(slidesId)

        const slidesInner = slides.querySelector('.slides-inner')
        const images = slidesInner.querySelectorAll('img')

        // --------------------------------------------------
        // Setup buttons
        const prev = slides.querySelector('.prev-button')
        const next = slides.querySelector('.next-button')

        if (prev !== null){
          prev.addEventListener('click', function(e){
            e.preventDefault()
            prevSlide()
          })
        }

        if (next!== null){
          next.addEventListener('click', function(e){
            e.preventDefault()
            //clear the interval
            //add a new interval
            nextSlide()
          })
        }
        // ----------------------------------------------
        // Setup indicators
        const indicatorContainer = slides.querySelector('.ms-slide-indicators')
        if (indicatorContainer !== null){
          // prev.addEventListener('click', function(e){
          //   e.preventDefault()
          //   prevSlide()
          // })
          console.log(indicatorContainer)
          for (let i = 0; i < images.length ; i+=1){ 
            const li = document.createElement('li')
            indicatorContainer.appendChild(li)
          }
          // document.innerHTML = `<li>hi<li>`; 
        }
        
        









        // -------------------------------------------------
        // Setup timer
        const delay = parseInt(slides.dataset.delay) //how long does it stay after transition 
        const transition = parseInt(slides.dataset.transition) //how fast is the transition
        slidesInner.style.transition = `${transition}ms`
    
        const slidesWidth = slides.clientWidth
        const slidesHeight = slides.clientHeight

        let index = 0
        setInterval(nextSlide, delay)
        // clearInterval(interval)
        // --------------------------------------------------

        function nextSlide(){
          index += 1
          if(index === images.length){ 
            index = 0
          }
          showSlide()
        }
        
        function prevSlide(){
          index -= 1
          if(index < 0){ 
            index = images.length - 1
          }
          showSlide()
        }

        function showSlide(){
          // CSS - transform: translate3d(0, 0, 0);
          slidesInner.style.transform = `translate3d(${index * -slidesWidth}px,0, 0)`
        }

      } //end makeSlideshow
      const slideshows = document.querySelectorAll('.ms-slide-show')
      for (let i = 0; i < slideshows.length ; i+=1){
          makeSlideshow(slideshows[i])
      }
    
})() //IIFE - Immediately Invoked Function Expression

