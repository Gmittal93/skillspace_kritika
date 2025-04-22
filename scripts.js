const particles = {
  autoPlay: true,
  fpsLimit: 60,
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: ["circle", "star"],
    },
    opacity: {
      value: 1,
      random: {
        enable: true,
        minimumValue: 0.1,
      },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: {
        enable: true,
        minimumValue: 1,
      },
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      resize: false,
      onHover: {
        enable: true,
        mode: ["repulse", "grab"],
        parallax: {
          enable: false,
          force: 2,
          smooth: 10
        }
      },
      onClick: {
        enable: true,
        mode: "attract"
      }
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          blink: true,
          consent: true,
          opacity: 1
        }
      },
      repulse: {
        distance: 200,
        duration: 0.2,
        factor: 25,
        speed: 0.15,
        maxSpeed: 50,
        easing: "ease-out-quad"
      },
      attract: {
        distance: 800,
        duration: 0.5,
        factor: 10,
        speed: .8,
        maxSpeed: 50,
        easing: "ease-out-quad"
      }

      
    }


    },
  detectRetina: true,
};

tsParticles.load("tsparticles", particles);



// document.addEventListener('contextmenu', event => event.preventDefault());
// preventDefault()
