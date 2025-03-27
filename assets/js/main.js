const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4.5,
    spaceBetween: 10,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.5,
          spaceBetween: 5
        },
        // when window width is >= 480px
        500: {
          slidesPerView:2.5,
          spaceBetween: 20
        },
        // when window width is >= 640px
      
     
        1173: {
            slidesPerView: 3.5,
            spaceBetween: 20
        },
        1069:{
          slidesPerView: 2.5,
          spaceBetween: 20

        },

        1400:{
            slidesPerView: 4.5,
            spaceBetween: 30
        }
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const currentPath = window.location.pathname.split('/').pop(); // Get only filename
  const navLinks = document.querySelectorAll(".nav-item .nav-link");
  
  navLinks.forEach(link => {
      const linkPath = link.getAttribute('href').split('/').pop();
      if (linkPath === currentPath) {
          link.classList.toggle("active");
      }
  });

    document.body.addEventListener('click', function(e) {
        if (e.target.classList.contains('heart')) {
            const heart = e.target;
        
            heart.classList.toggle('bold-heart');
            
            const currentSrc = heart.getAttribute('src');
            const newSrc = heart.getAttribute('data-img');
            
            if (currentSrc === newSrc) {
                heart.setAttribute('src', './assets/imgs/icons/heart.svg');
            } else {
                heart.setAttribute('src', newSrc);
            }
            
            heart.style.transform = 'scale(1.2)';
            setTimeout(() => {
                heart.style.transform = 'scale(1)';
            }, 300);
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        
        const cards = document.querySelectorAll(
          '.new-product-card .card, .sale-product-home .swiper-slide .card, .pro .card'
        );
        const productModal = new bootstrap.Modal(document.getElementById('productModal'));
      
        cards.forEach(card => {
          card.addEventListener('click', (e) => {
          
            if (e.target.closest('.change-image') || 
                e.target.closest('.heart') ||
                e.target.closest('.discount')) return;
      
          
            const productTitle = card.querySelector('.card-text').textContent;
            const productPrice = card.querySelector('.rating').textContent;
            const productImage = card.querySelector('.product-image').src;

            const modalBody = productModal._element.querySelector('.modal-body');
            modalBody.innerHTML = `
              <div class="text-center">
                <img src="${productImage}" class="img-fluid mb-3" style="max-height: 300px">
                <h4>${productTitle}</h4>
                <h5 class="text-muted">${productPrice}</h5>
              </div>
            `;
      
            productModal.show();
          });
        });
      });


      document.addEventListener('DOMContentLoaded', () => {
        const counters = document.querySelectorAll('.count');
        const speed = 200; 

        const animateCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            const countTo = target;
            const countFrom = 0;
            const duration = Math.floor(speed / countTo);
            
            let currentCount = countFrom;
            const increment = countTo / duration;

            const updateCount = () => {
                currentCount += increment;
                counter.textContent = Math.ceil(currentCount);

                if (currentCount < countTo) {
                    setTimeout(updateCount, 1);
                } else {
                    counter.textContent = countTo + '+';
                }
            };

            updateCount();
        };

        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            observer.observe(counter);
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
      const navHome = document.querySelector(".nav-home");
      const modal = document.querySelector(".my-modal");
    
      if (!navHome || !modal) return;
          modal.classList.remove("active");
    
      navHome.addEventListener("mouseenter", () => {
        modal.classList.add("active");
      });
          navHome.addEventListener("mouseleave", () => {
        setTimeout(() => {
          if (!modal.matches(":hover") && !navHome.matches(":hover")) {
            modal.classList.remove("active");
          }
        }, 200);
      });
    
      modal.addEventListener("mouseleave", () => {
        modal.classList.remove("active");
      });
    });
    

    document.addEventListener("DOMContentLoaded", () => {
      const navHome = document.querySelector(".nav-home");
      const modal = document.querySelector(".my-modal");
    
      if (!navHome || !modal) return;
    
      navHome.addEventListener("mouseenter", () => {
        modal.classList.remove("d-none");
      });
    
      modal.addEventListener("mouseleave", () => {
        modal.classList.add("d-none");
      });
    });
    

    document.addEventListener("DOMContentLoaded",()=>{
      const item=document.querySelectorAll(".nav-item.position-relative");
      const modal=item.querySelectorall("my-modal");
      item.addEventListener("mouseenter ",()=>{
        modal.classList.remove("d-none");
      })
          item.addEventListener("mouseleave",()=>{
          modal.classList.add(d-none);
          })

    })