import React from 'react'
import Particles from "react-particles-js";

function ParticlesContainer() {
    return (
        <div>
            <Particles
          height={900}
          params={{
            particles: {
              number: {
                value: 400,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 1,
                random: true,
                anim: {
                  speed: 1,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: .5,
                direction: "top",
                out_mode: "out",
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
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
        </div>
    )
}

export default ParticlesContainer
