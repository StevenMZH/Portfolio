import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function BackgroundParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      key: "bg-anim",
      name: "bg-anim",
      autoPlay: true,

      fullScreen: { enable: true, zIndex: -1 },
      background: { color: { value: "transparent" } },

      fpsLimit: 30,
      detectRetina: false,

      interactivity: {
        detectsOn: "canvas",
        events: {
          resize: { enable: true, delay: 0.5 },
        },
      },

      particles: {
        number: { value: 160, density: { enable: true } },
        color: { value: "#aabbff" },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.6, max: 1 },
          animation: { enable: true, speed: 1, startValue: "random", sync: false },
        },
        size: { value: { min: 0.5, max: 1.5 } },
        move: {
          enable: true,
          speed: { min: 0.1, max: 0.2 },
          direction: "none",
          outModes: { default: "out" },
        },
        links: { enable: false },
      },

      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: { value: 70 },
              move: { speed: { min: 0.05, max: 0.12 } },
            },
          },
        },
      ],

      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      smooth: false,

      motion: {
        disable: false,
        reduce: { factor: 4, value: true },
      },
    }),
    []
  );

  if (!ready) return null;

  return <Particles id="bg-anim" options={options} />;
}
