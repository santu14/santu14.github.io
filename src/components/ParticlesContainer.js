import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";

function ParticlesContainer() {
  const initialRes = {
    x: 0,
    y: 0,
  };
  const [res, setRes] = useState(initialRes);
  const [particleCount, setParticleCount] = useState(0);

  useEffect(() => {
    function handleResize() {
      setRes({ x: window.innerWidth, y: window.innerHeight });
      if (window.innerWidth >= 1920) {
        setParticleCount(120);
      } else if (window.innerWidth < 1920) {
        setParticleCount(40);
      }
    }
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
  }, [])
  
  return (
    <div>
      <Particles
        className="particles"
        height={res.y}
        
        params={{
          particles: {
            shape: {
              type: "triangle",
            },
            number: {
              value: particleCount,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                speed: 4,
                size_min: 1,
              },
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                // blur: 5,
              },
            },
            move: {
              random: true,
              speed: 0.5,
              direction: "",
              out_mode: "out",
            },
            opacity: {
              nim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 6,
                opacity: 0.5,
              },
              repulse: {
                distance: 200,
                duration: 4,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default ParticlesContainer;
