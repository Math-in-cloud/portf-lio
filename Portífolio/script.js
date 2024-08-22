const meuObservador = new IntersectionObserver((func) => {
    func.forEach((cada) => {
        if (cada.isIntersecting) {
            cada.target.classList.add('mostrar');
        } else {
            cada.target.classList.remove('mostrar');
        }
    });
});

const elements = document.querySelectorAll('.esconder');
elements.forEach((element) => meuObservador.observe(element));

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;

        setTimeout(() => {
            imgs.style.transition = 'none';
            img.style.transform = 'translateX(0)';

            setTimeout(() => {
                imgs.style.transition = 'transform 0.5s ease-in-out';
            }, 500);
        }, 20);
    } else {
        imgs.style.transform = `translateX(${-idx * 600}px`;
        }
    }

    document.getElementById('link-servicos').addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offsetPosition = target.offsetTop + 350; 
  
      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
  document.querySelectorAll('.logo-flutuante').forEach(function(logo) {
    logo.style.top = Math.random() * 100 + 'vh';
    logo.style.left = Math.random() * 100 + 'vw';
    logo.style.animationDuration = Math.random() * 10 + 5 + 's';

    if (Math.random() > 0.5) {
        logo.style.animationDirection = 'reverse';
    }
});
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00bcd4"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00bcd4",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    }
  },
  "retina_detect": true
});


