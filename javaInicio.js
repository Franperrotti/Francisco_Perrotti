const portfolioItems = document.querySelectorAll('.item_del_porfolio');
      
        portfolioItems.forEach(portfolioItem => {
          portfolioItem.addEventListener('mouseover', () => {
            console.log(portfolioItem.childNodes[1].classList)
            portfolioItem.childNodes[1].classList.add('imagen_fondo_negro');
          });
      
          portfolioItem.addEventListener('mouseout', () => {
            console.log(portfolioItem.childNodes[1].classList)
            portfolioItem.childNodes[1].classList.remove('imagen_fondo_negro');
          });
        });